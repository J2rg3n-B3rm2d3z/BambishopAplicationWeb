import { configureStore } from '@reduxjs/toolkit'
import { clienteScreenSlice } from './slices/clientescreen/clienteSlide';
import { bambishopApi } from './slices/apis/clienteapi';
// ...

export const store = configureStore({
  reducer: {
    clienteScreenSlice: clienteScreenSlice.reducer,

    [bambishopApi.reducerPath]: bambishopApi.reducer, 
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  .concat( bambishopApi.middleware )
  
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch