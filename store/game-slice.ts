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

const setGameState: CaseReducer<LyricsGameState, PayloadAction<SetGamePayload>> = 
  (state: LyricsGameState, action: PayloadAction<SetGamePayload>) => {
    const { playlist, playlistName } = action.payload;
    state.playlist = playlist;
    state.playlistName = playlistName;
}

const nextGame: CaseReducer<LyricsGameState, PayloadAction> = 
  (state: LyricsGameState, action: PayloadAction) => {
    if(state.currentSong + 1  === state.playlist.length) {
      return;
    }
    state.currentSong = state.currentSong + 1;
}

const gameSlice = createSlice({
  name: 'gameSlice',
  initialState,
  reducers: {
    setGameState,
    nextGame
  }
});

export const gameSlicesActions = gameSlice.actions;
export default gameSlice.reducer;
