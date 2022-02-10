import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import fetchRocketInfo from '../api/rocketApi';
import { RocketModel } from '../models/RocketModel';

export interface RocketState {
  rocketId: string,
  showModal: boolean,
  rocketInfo: RocketModel | undefined,
  loading: string,
  error: any,
  currentRequestId: string
}

const initialState: RocketState = {
  rocketId: '',
  showModal: false,
  rocketInfo: undefined,
  loading: 'idle',
  error: undefined,
  currentRequestId: ''
};

export const getRocketInfoAsync = createAsyncThunk(
  'api/fetchRocketInfo',
  async (rocketId: string) => {
    const response = await fetchRocketInfo(rocketId);
    return response;
  }
);

export const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.showModal = !state.showModal;
    },
    setRocketId: (state, action: PayloadAction<string>) => {
      state.rocketId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRocketInfoAsync.pending, (state, action) => {
        if (state.loading === 'idle') {
          state.loading = 'pending';
          state.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(getRocketInfoAsync.fulfilled, (state, action) => {
        const { requestId } = action.meta
        if (
          state.loading === 'pending' &&
          state.currentRequestId === requestId
        ) {
          state.loading = 'idle';
          state.rocketInfo = action.payload;
          state.showModal = true;
          state.rocketId = action.payload.id;
          state.currentRequestId = '';
        }
      })
      .addCase(getRocketInfoAsync.rejected, (state, action) => {
        const { requestId } = action.meta
        if (
          state.loading === 'pending' &&
          state.currentRequestId === requestId
        ) {
          state.loading = 'idle';
          state.showModal = false;
          state.error = action.error.message;
          state.currentRequestId = '';
        }
      })
  },
});

export const { toggleModal, setRocketId } = rocketSlice.actions;

export default rocketSlice.reducer;
