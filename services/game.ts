import { Observable, of, switchMap, catchError, map, from, mergeAll, concatMap } from 'rxjs';
import { filter } from 'rxjs/operators';
import { fromFetch } from 'rxjs/fetch';
import { SpotifyTracks, MusixmatchTracks, MusixmatchTracksLyrics } from '../interfaces/api';

const spotifyBaseUrl = 'https://api.spotify.com/v1';
const musixmatchBaseUrl = 'https://api.musixmatch.com/ws/1.1';

const fetchAsObservable = (url: string, headers: any = {}) =>
  fromFetch(url, {
      headers
  }).pipe(
    switchMap(response => {
      if (response.ok) {
        // OK return data
        return response.json();
      } else {
        // Server is returning a status requiring the client to try something else.
        return of({ error: true, message: `Error ${ response.status }` });
      }
    }),
    catchError(err => {
      // Network or other error, handle appropriately
      console.error(err);
      return of({ error: true, message: err.message })
    })
  );

const getSpotifyUserPlaylists = (accessToken: string, limit: number): Observable<SpotifyTracks> =>
  fetchAsObservable(`${spotifyBaseUrl}/me/tracks?limit=${limit}`, {
    'Authorization': `Bearer ${accessToken}`
  });

const getMusixmatchTrackInformation = (isrc: string): Observable<MusixmatchTracks> =>
  fetchAsObservable(`${musixmatchBaseUrl}/track.get?track_isrc=${isrc}&apikey=${process.env.MUSIXMATCH_APIKEY}`);

const getMusixmatchTrackLyrics = (trackId: number): Observable<MusixmatchTracksLyrics> =>
  fetchAsObservable(`${musixmatchBaseUrl}/track.lyrics.get?track_id=${trackId}&apikey=${process.env.MUSIXMATCH_APIKEY}`);

export const getGame = (accessToken: string): Observable<any> =>
  getSpotifyUserPlaylists(accessToken, 20).pipe(
    map(response => from(response.items)),
    map(song => song.pipe(
      map(track => {
        return {
          spotifyId: track.track.id,
          isrcId: track.track.external_ids.isrc,
          trackName: track.track.name
        }
      }),
      concatMap(track => {
        return getMusixmatchTrackInformation(track.isrcId).pipe(
          map(trackInfo => {
            return {
              trackInfo,
              ...track
            }
          })
        )
      }),
      filter(track => track.trackInfo.message.body.track.has_lyrics === 1),
      map(track => {
        return {
          musxmatchId: track.trackInfo.message.body.track.track_id,
          ...track
        }
      }),
      concatMap(track => {
        return getMusixmatchTrackLyrics(track.musxmatchId).pipe(
          map(trackLyrics => {
            return {
              trackLyrics,
              ...track
            }
          })
        )
      }),
      map(track => {
        return {
          lyrics: track.trackLyrics.message.body.lyrics.lyrics_body,
          ...track
        }
      }),
      map(track => {
        const {trackLyrics, trackInfo, ...trackState} = track; 
        return trackState;
      })
    )),
    mergeAll(),
  );
