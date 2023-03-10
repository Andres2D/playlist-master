import { createSlice, CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { LyricsGameState, LyricGame } from '../interfaces/game';

export const initialState: LyricsGameState = {
  game: [],
  currentSong: 0
};

const setMatchState: CaseReducer<LyricsGameState, PayloadAction<LyricGame[]>> = 
  (state: LyricsGameState, action: PayloadAction<LyricGame[]>) => {
    state.game = action.payload;
}

const nextGame: CaseReducer<LyricsGameState, PayloadAction> = 
  (state: LyricsGameState, action: PayloadAction) => {
    state.currentSong = state.currentSong + 1;
}

const gameSlice = createSlice({
  name: 'gameSlice',
  initialState,
  reducers: {
    setMatchState,
    nextGame
  }
});

export const gameSlicesActions = gameSlice.actions;
export default gameSlice.reducer;
