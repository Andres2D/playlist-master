export interface AnswerButtonState {
  basic: string;
  correct: string;
  wrong: string;
};

export interface LyricGame {
  name: string;
  spotifyId: string;
  isrcId: string;
  musxmatchId: number;
  lyrics: string;
  answers: string[];
}

export interface LyricsGameState {
  game: LyricGame[];
  currentSong: number;
}
