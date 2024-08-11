import { configureStore } from '@reduxjs/toolkit'
import codeSliceReducer from './codeSlice';
import receivedCodeSliceReducer from './receivedCodeSlice';

export const store = configureStore({
  reducer: {codeSlice: codeSliceReducer, receivedCodeSlice: receivedCodeSliceReducer},
          
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch