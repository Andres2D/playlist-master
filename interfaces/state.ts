import { LyricsGameState } from './game';
import { LoaderState } from './loader';

export interface RootState {
  game: LyricsGameState;
  loader: LoaderState;
}
