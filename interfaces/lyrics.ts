export interface Lyrics {
  message: Message;
}

export interface Message {
  header: Header;
  body:   Body;
}

export interface Body {
  lyrics: LyricsClass;
}

export interface LyricsClass {
  lyrics_id:           number;
  explicit:            number;
  lyrics_body:         string;
  script_tracking_url: string;
  pixel_tracking_url:  string;
  lyrics_copyright:    string;
  updated_time:        Date;
}

export interface Header {
  status_code:  number;
  execute_time: number;
}
