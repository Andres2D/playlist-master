import { SpotifyPlaylist } from '../interfaces/playlist';
import { LyricGame } from '../interfaces/game';
import { getLyricsByISRC } from './lyrics';

export const getPlaylistGame = async(accessToken: string, limit: number): Promise<null | LyricGame[]> => {
  try {
    let playlist = await getLikedSongsPlaylist(accessToken, limit);

    if(!playlist) {
      return null;
    }
    
    playlist = await Promise.all(playlist.map(async track => {
      const trackDetails = await getLyricsByISRC(track.isrcId!);
      return {
        ...track,
        musxmatchId: trackDetails?.musxmatchId,
        lyrics: trackDetails?.lyrics
      };
    }));

    return playlist;

  } catch(err) {
    console.log(err);
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
