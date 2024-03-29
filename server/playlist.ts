import {
  SpotifyPlaylist,
  PlaylistSelection,
  UserPlaylist,
  UserPlaylistItem
} from '../interfaces/playlist';
import { LyricGame } from '../interfaces/game';
import { getLyricsByISRC } from './lyrics';
import { getRandomTracks } from '../helpers/game';
import { MUSIXMATCH_COPYRIGHT, likedSongsPlaylist, DEFAULT_ANSWERS_LIST_LIMIT, defaultAnswersSongs } from '../constants/game';
import mongoConnection from '../database/connection';
import Stats from '@/database/models/stats';
import User from '@/database/models/user';

interface PlaylistGame {
  playlistName: string;
  playlist: LyricGame[];
}

export const getPlaylistGame = async(playlistId: string, accessToken: string, limit: number): Promise<null | PlaylistGame> => {
  try {
    let answersListSelection: string[] = [];
    const isLikedSongs = playlistId[0] === 'liked-songs';
    let playlist = await getPlaylist(accessToken, limit, isLikedSongs, playlistId);
    let playlistName = isLikedSongs
      ? 'Liked Songs'
      : await getPlaylistDetails(playlistId, accessToken) || '';

    const likedSongsList = await getPlaylist(accessToken, DEFAULT_ANSWERS_LIST_LIMIT, true);
    const likedSongsListMapped = await mapPlaylistResult(likedSongsList || []) || null;

    answersListSelection = likedSongsListMapped && likedSongsListMapped?.length < 30
      ? defaultAnswersSongs
      : likedSongsListMapped?.map(song => song.name || '') || [];

    playlist = await mapPlaylistResult(playlist || []);

    if(!playlist) {
      return null;
    }

    playlist = playlist.map(track => {
      const answers: any = [...getRandomTracks(answersListSelection.filter(song => song !== track.name!)), track.name!]
      .sort(() => 0.5 - Math.random());
      return {
        ...track,
        answers,
      }
    });

    return {
      playlistName: isLikedSongs ? 'Liked songs' : playlistName,
      playlist: playlist.filter(track => track.lyrics !== undefined)
    }

  } catch(err) {
    console.log(err);
    return null;
  }
};

export const getPlaylist =
  async(accessToken: string, limit: number = 5, isLikedSongs: boolean = false, playlistId: string = ''): Promise<LyricGame[] | null> => {
  try {
    let tracks: LyricGame[] = [];
    const path = isLikedSongs ? '/me/tracks' : `/playlists/${playlistId}/tracks`;
    const response = await fetch(
      `${process.env.SPOTIFY_BASE_API}${path}?limit=${limit}`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      }
    );

    if(!response.ok) {
      return null;
    }
    const { items } = await response.json() as SpotifyPlaylist;

    tracks = items.map(item => {
      return {
        name: item.track.name,
        isrcId: item.track.external_ids.isrc,
        spotifyId: item.track.id,
      }
    });

    return tracks;

  } catch(err) {
    console.error(err);
    return null;
  }
};

export const getUserPlaylist = async(accessToken: string, email: string, limit: number): Promise<null | PlaylistSelection[]> => {
  try {
    let playlists: PlaylistSelection[] = [];
    const response = await fetch(
      `${process.env.SPOTIFY_BASE_API}/me/playlists?limit=${limit}`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      }
    );
    if(!response.ok) {
      return null;
    }
    const { items } = await response.json() as UserPlaylist;

    playlists = items.map(playlist => {
      return {
        id: playlist.id,
        name: playlist.name,
        description: playlist.description,
        image: playlist.images && playlist.images.length > 0 ? playlist.images[0].url : '',
        tracks: playlist.tracks.total,
        bestScore: 0
      }
    });
    playlists.push(likedSongsPlaylist);

    playlists = await Promise.all(playlists.map(async playlist => {
      let playlistScore = 0;
      await mongoConnection();

      const user = await User.findOne({email});
      if(user) {
        const stats = await Stats.findOne({user: user, playlistId: playlist.id}).lean();
        if(stats) {
          playlistScore = stats.bestScore
        }
      }

      return {...playlist, bestScore: Math.floor(playlistScore)}
    }));

    playlists = playlists.filter(playlist => playlist.tracks > 0);

    return playlists;
  }catch(err) {
    console.error(err);
    return null;
  }
}

const getPlaylistDetails = async(playlistId: string, accessToken: string): Promise<string | null> => {
  try {
    const response = await fetch(
      `${process.env.SPOTIFY_BASE_API}/playlists/${playlistId}`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      }
    );
    if(!response.ok) {
      return null;
    }

    const { name } = await response.json() as UserPlaylistItem;

    return name;

  } catch(err) {
    console.log(err);
    return null;
  }
};

const mapPlaylistResult = (playlist: LyricGame[]): Promise<LyricGame[] | null> => {
  try {
      return Promise.all(playlist.map(async track => {
        const trackDetails = await getLyricsByISRC(track.isrcId!);
        if(!trackDetails) {
          return {
            ...track
          };
        }
    
        const lyricsReplaced = trackDetails?.lyrics?.replace(MUSIXMATCH_COPYRIGHT, '').replace(/\n/gm, '</br>');

        return {
          ...track,
          musxmatchId: trackDetails?.musxmatchId,
          lyrics: lyricsReplaced,
          state: 'unknown'
        };
      }));
  }catch (err: any) {
    console.log('Error: ', err);
    return Promise.resolve(null);
  }
};
