import { configureStore } from '@reduxjs/toolkit';
import gameSlice from './game-slice';
import loaderSlice from './loader-slice';

const store = configureStore({
  reducer: {
    game: gameSlice,
    loader: loaderSlice
  }
});

export default store;
