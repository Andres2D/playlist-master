import { QuestionState } from '../types/game.types';
export interface AnswerButtonState {
  basic: string;
  correct: string;
  wrong: string;
};

export interface LyricGame {
  name?: string;
  spotifyId?: string;
  isrcId?: string;
  musxmatchId?: number;
  lyrics?: string;
  answers?: string[];
  state?: QuestionState;
}

export interface LyricsGameState {
  playlist: LyricGame[];
  playlistName: string;
  currentSong: number;
}
