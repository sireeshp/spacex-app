import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchLaunches from '../api/launchApi';
import { LaunchModel } from '../models/LaunchModel';
export const fetchLaunchesAsync = createAsyncThunk('api/fetchLaunches', async (_, { getState, requestId }) => {
    const state: any = getState();
    const { currentRequestId, loading } = state.launches;
    if (loading !== 'pending' || requestId !== currentRequestId) {
        return
    }
    return await fetchLaunches();

});

export interface LaunchState {
    entities: Array<LaunchModel>,
    loading: string,
    currentRequestId: string,
    error: any
}

const initialState: LaunchState = {
    entities: [],
    loading: 'idle',
    currentRequestId: '',
    error: undefined,
};

const launchSlice = createSlice({
    name: 'launches',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchLaunchesAsync.pending, (state, action) => {
                if (state.loading === 'idle') {
                    state.loading = 'pending';
                    state.currentRequestId = action.meta.requestId;
                }
            })
            .addCase(fetchLaunchesAsync.fulfilled, (state, action) => {
                const { requestId } = action.meta
                if (
                    state.loading === 'pending' &&
                    state.currentRequestId === requestId
                ) {
                    state.loading = 'idle';
                    state.entities = action.payload as Array<LaunchModel>;
                    state.currentRequestId = '';
                }
            })
            .addCase(fetchLaunchesAsync.rejected, (state, action) => {
                const { requestId } = action.meta
                if (
                    state.loading === 'pending' &&
                    state.currentRequestId === requestId
                ) {
                    state.loading = 'idle';
                    state.error = action.error.message;
                    state.currentRequestId = '';
                }
            })
    },
});

export default launchSlice.reducer;