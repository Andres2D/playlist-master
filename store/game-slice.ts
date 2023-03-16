import { createSlice, CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { LyricsGameState, LyricGame } from '../interfaces/game';
import { QuestionState } from '../types/game.types';

export const initialState: LyricsGameState = {
  playlist: [],
  playlistName: '',
  currentSong: 0
};

interface SetGamePayload {
  playlist: LyricGame[],
  playlistName: string;
}

interface QuestionStatePayload {
  spotifyId: string;
  questionState: QuestionState;
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

const setQuestionState: CaseReducer<LyricsGameState, PayloadAction<QuestionStatePayload>> =
  (state: LyricsGameState, action: PayloadAction<QuestionStatePayload>) => {
    const { spotifyId, questionState } = action.payload;
    state.playlist[state.playlist.findIndex(track => track.spotifyId === spotifyId)].state = questionState;
};

const gameSlice = createSlice({
  name: 'gameSlice',
  initialState,
  reducers: {
    setGameState,
    nextGame,
    setQuestionState
  }
});

export const gameSlicesActions = gameSlice.actions;
export default gameSlice.reducer;
