import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import launchSlice from '../reducers/launchSlice';
import rocketSlice from '../reducers/rocketSlice';

export const store = configureStore({
  reducer: {
    launches: launchSlice,
    rocket: rocketSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

