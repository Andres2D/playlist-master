export interface SpotifyTracks {
  href:     string;
  items:    SpotifyItem[];
  limit:    number;
  next:     string;
  offset:   number;
  previous: null;
  total:    number;
}

export interface SpotifyItem {
  added_at: Date;
  track:    SpotifyTrack;
}

export interface SpotifyTrack {
  album:             SpotifyAlbum;
  artists:           Artist[];
  available_markets: string[];
  disc_number:       number;
  duration_ms:       number;
  explicit:          boolean;
  external_ids:      ExternalIDS;
  external_urls:     ExternalUrls;
  href:              string;
  id:                string;
  is_local:          boolean;
  name:              string;
  popularity:        number;
  preview_url:       null | string;
  track_number:      number;
  type:              TrackType;
  uri:               string;
}

export interface SpotifyAlbum {
  album_group:            AlbumGroup;
  album_type:             AlbumGroup;
  artists:                Artist[];
  available_markets:      string[];
  external_urls:          ExternalUrls;
  href:                   string;
  id:                     string;
  images:                 Image[];
  is_playable:            boolean;
  name:                   string;
  release_date:           string;
  release_date_precision: ReleaseDatePrecision;
  total_tracks:           number;
  type:                   AlbumGroup;
  uri:                    string;
}

export enum AlbumGroup {
  Album = "album",
  Compilation = "compilation",
  Single = "single",
}

export interface Artist {
  external_urls: ExternalUrls;
  href:          string;
  id:            string;
  name:          string;
  type:          ArtistType;
  uri:           string;
}

export interface ExternalUrls {
  spotify: string;
}

export enum ArtistType {
  Artist = "artist",
}

export interface Image {
  height: number;
  url:    string;
  width:  number;
}

export enum ReleaseDatePrecision {
  Day = "day",
  Year = "year",
}

export interface ExternalIDS {
  isrc: string;
}

export enum TrackType {
  Track = "track",
}

export interface MusixmatchTracks {
  message: MessageTrack;
}

export interface MessageTrack {
  header: Header;
  body:   BodyTracks;
}

export interface BodyTracks {
  track: MusixmatchTrack;
}

export interface MusixmatchTrack {
  track_id:                    number;
  track_name:                  string;
  track_name_translation_list: any[];
  track_rating:                number;
  commontrack_id:              number;
  instrumental:                number;
  explicit:                    number;
  has_lyrics:                  number;
  has_subtitles:               number;
  has_richsync:                number;
  num_favourite:               number;
  album_id:                    number;
  album_name:                  string;
  artist_id:                   number;
  artist_name:                 string;
  track_share_url:             string;
  track_edit_url:              string;
  restricted:                  number;
  updated_time:                Date;
  primary_genres:              PrimaryGenres;
}

export interface PrimaryGenres {
  music_genre_list: MusicGenreList[];
}

export interface MusicGenreList {
  music_genre: MusicGenre;
}

export interface MusicGenre {
  music_genre_id:            number;
  music_genre_parent_id:     number;
  music_genre_name:          string;
  music_genre_name_extended: string;
  music_genre_vanity:        string;
}

export interface Header {
  status_code:  number;
  execute_time: number;
}

export interface MusixmatchTracksLyrics {
  message: MessageLyrics;
}

export interface MessageLyrics {
  header: Header;
  body:   BodyLyrics;
}
 
export interface BodyLyrics {
  lyrics: Lyrics;
}

export interface Lyrics {
  lyrics_id:           number;
  explicit:            number;
  lyrics_body:         string;
  script_tracking_url: string;
  pixel_tracking_url:  string;
  lyrics_copyright:    string;
  updated_time:        Date;
}

// export interface Header {
//   status_code:  number;
//   execute_time: number;
// }
