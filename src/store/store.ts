import { configureStore } from '@reduxjs/toolkit'
import { clienteScreenSlice } from './slices/clientescreen/clienteSlide';
// ...

export const store = configureStore({
  reducer: {
    clienteScreenSlice: clienteScreenSlice.reducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch