import { createSlice, CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { LoaderState } from '../interfaces/loader';

const initialState: LoaderState = {
  loading: false
}

const setLoaderState: CaseReducer<LoaderState, PayloadAction<LoaderState>> = 
  (state: LoaderState, action: PayloadAction<LoaderState>) => {
    state.loading = action.payload.loading;
}

const loaderSlice = createSlice({
  name: 'loaderSlice',
  initialState,
  reducers: {
    setLoaderState
  }
});

export const loaderSliceActions = loaderSlice.actions;
export default loaderSlice.reducer;
