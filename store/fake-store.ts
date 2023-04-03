import { configureStore } from '@reduxjs/toolkit';
import gameSliceMock, { gameMockEmptySlice } from './game-slice.mock';

export const createEmptyTestStore = () => {
  const store = configureStore({
    reducer: {
      game: gameMockEmptySlice.reducer,
      loader: gameMockEmptySlice.reducer,
    }
  });
  return store;
};

export const createTestStore = () => {
  const store = configureStore({
    reducer: {
      game: gameSliceMock,
      loader: gameSliceMock
    }
  });
  return store;
};
