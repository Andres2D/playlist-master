interface BaseResponse {
  href:     string;
  limit:    number;
  next:     string;
  offset:   number;
  previous: null;
  total:    number;
}

export interface UserPlaylist extends BaseResponse {
  items:    UserPlaylistItem[];
}

export interface SpotifyPlaylist extends BaseResponse {
  items:    PlaylistItem[];
}

export interface PlaylistItem {
  added_at: Date;
  track:    Track;
}

export interface Track {
  album:             Album;
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

export interface Album {
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

export interface UserPlaylistItem {
  collaborative: boolean;
  description:   string;
  external_urls: ExternalUrls;
  href:          string;
  id:            string;
  images:        Image[];
  name:          string;
  owner:         Owner;
  primary_color: null;
  public:        boolean;
  snapshot_id:   string;
  tracks:        Tracks;
  type:          ItemType;
  uri:           string;
}

export interface ExternalUrls {
  spotify: string;
}

export interface Owner {
  display_name:  string;
  external_urls: ExternalUrls;
  href:          string;
  id:            string;
  type:          OwnerType;
  uri:           string;
}

export enum OwnerType {
  User = "user",
}

export interface Tracks {
  href:  string;
  total: number;
}

export enum ItemType {
  Playlist = "playlist",
}

export interface PlaylistSelection {
  id: string;
  name: string;
  description: string;
  image: string;
  tracks: number;
  bestScore: number;
}
