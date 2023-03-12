import { SpotifyPlaylist } from '../interfaces/playlist';
import { LyricGame } from '../interfaces/game';

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
