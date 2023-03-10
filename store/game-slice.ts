import { createSlice, CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { LyricsGameState, LyricGame } from '../interfaces/game';

export const initialState: LyricsGameState = {
  playlist: [],
  playlistName: '',
  currentSong: 0
};

interface SetGamePayload {
  playlist: LyricGame[],
  playlistName: string;
}

const setMatchState: CaseReducer<LyricsGameState, PayloadAction<SetGamePayload>> = 
  (state: LyricsGameState, action: PayloadAction<SetGamePayload>) => {
    const { playlist, playlistName } = action.payload;
    state.playlist = playlist;
    state.playlistName = playlistName;
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
