import { SpotifyPlaylist, PlaylistSelection, UserPlaylist } from '../interfaces/playlist';
import { LyricGame } from '../interfaces/game';
import { getLyricsByISRC } from './lyrics';
import { getRandomTracks } from '../helpers/game';
import { MUSIXMATCH_COPYRIGHT } from '../constants/game';

export const getPlaylistGame = async(accessToken: string, limit: number): Promise<null | LyricGame[]> => {
  try {
    let playlist = await getLikedSongsPlaylist(accessToken, limit);

    if(!playlist) {
      return null;
    }
    
    playlist = await Promise.all(playlist.map(async track => {
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

    playlist = playlist.map(track => {
      const answers = 
        [...getRandomTracks(playlist!.map(t => t.name!).filter(t => t !== track.name!)), track.name!]
        .sort(() => 0.5 - Math.random());
      return {
        ...track,
        answers,
      }
    });

    return playlist.filter(track => track.lyrics !== undefined);

  } catch(err) {
    return null;
  }
};

export const getLikedSongsPlaylist = 
  async(accessToken: string, limit: number = 5): Promise<LyricGame[] | null> => {
  try {
    let tracks: LyricGame[] = [];
    const response = await fetch(
      `${process.env.SPOTIFY_BASE_API}/me/tracks?limit=${limit}`,
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

export const getUserPlaylist = async(accessToken: string, limit: number): Promise<null | PlaylistSelection[]> => {
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
        tracks: playlist.tracks.total
      }
    });

    playlists = playlists.filter(playlist => playlist.tracks > 0);

    return playlists;
  }catch(err) {
    console.error(err);
    return null;
  }
}
