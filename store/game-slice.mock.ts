import { createSlice, CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { LyricsGameState, LyricGame } from '../interfaces/game';

export const initialState: LyricsGameState = {
  playlist: [
    {
      spotifyId: '1',
      answers: [
        'Evil - Mercyful Fate',
        'Time’s Up - O.C',
        'Walk - Pantera',
        'Call me - 90sFlav',
      ],
      isrcId: '2',
      lyrics: '"..And I was made a mercenary..."',
      musxmatchId: 2,
      name: 'Evil - Mercyful Fate'
    }
  ],
  playlistName: 'Liked Songs',
  currentSong: 0
};

const initialEmptyState: LyricsGameState = {
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
}

const nextGame: CaseReducer<LyricsGameState, PayloadAction> = 
  (state: LyricsGameState, action: PayloadAction) => {
}

const gameMockSlice = createSlice({
  name: 'gameSlice',
  initialState,
  reducers: {
    setGameState,
    nextGame
  }
});

export const gameMockEmptySlice = createSlice({
  name: 'gameSliceEmpty',
  initialState: initialEmptyState,
  reducers: {
    setGameState,
    nextGame
  }
});

export const gameMockSlicesActions = gameMockSlice.actions;
export default gameMockSlice.reducer;
