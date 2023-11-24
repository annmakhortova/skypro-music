import { configureStore } from '@reduxjs/toolkit'
import trackSliceReducer from './slices/trackSlice'
import { playlistApi } from '../services/playlists'

export const store = configureStore({
    reducer: {
        currentPlay: trackSliceReducer,
        [playlistApi.reducerPath]: playlistApi.reducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(playlistApi.middleware),
})