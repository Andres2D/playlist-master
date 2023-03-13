import { TrackDetails } from '../interfaces/track';
import { Lyrics } from '../interfaces/lyrics';
import { LyricGame } from '../interfaces/game';

export const getLyricsByISRC = async(isrc: string): Promise<null | LyricGame> => {
  try {
    const trackId = await getTrackInformation(isrc);
    if(!trackId) {
      return null;
    }
    const trackLyrics = await getLyricsById(trackId);
    if(!trackLyrics) {
      return null;
    }
    return {
      musxmatchId: trackId!,
      lyrics: trackLyrics
    };
  } catch(err) {
    console.log(err);
    return null;
  }
};

const getTrackInformation = async(isrc: string): Promise<null | number> => {
  try {
    const response = await fetch(
      `${process.env.MUSIXMATCH_BASE_API}/track.get?track_isrc=${isrc}&apikey=${process.env.MUSIXMATCH_APIKEY}`
    );

    if(!response.ok) {
      return null;
    } 
    const { message: { body } } = await response.json() as TrackDetails;

    if(body.track.has_lyrics === 0) {
      return null;
    }

    return body.track.track_id;
  } catch(err) {
    console.log(err);
    return null;
  }
};

const getLyricsById = async(id: number): Promise<null | string> => {
  try {
    const response = await fetch(
      `${process.env.MUSIXMATCH_BASE_API}/track.lyrics.get?track_id=${id}&apikey=${process.env.MUSIXMATCH_APIKEY}`
    );

    if(!response.ok) {
      return null;
    } 
    const { message: { body } } = await response.json() as Lyrics;
    return body.lyrics.lyrics_body;
  } catch(err) {
    console.log(err);
    return null;
  }
}
