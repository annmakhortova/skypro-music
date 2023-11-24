import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allTracks: [],
  currentTrack: {},
  currentPlaylist: [],
  activePlaylist: [], //
  isPlaying: false,
  isLoading: true,
}

export const trackSlice = createSlice({
  name: 'Track',
  initialState,
  reducers: {
    setAllTracks: (state, action) => {
      state.allTracks = action.payload
    },
    setCurrentTrack: (state, action) => {
      state.currentTrack = action.payload
    },
    setIsPlaying: (state, action) => {
      state.isPlaying = action.payload
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setCurrentPlaylist : (state, action) => {
      state.currentPlaylist = action.payload
    },
    setActivePlaylist : (state, action) => {
      state.activePlaylist = action.payload
    },
  }
})

export const { setAllTracks, setCurrentTrack, setIsLoading, setIsPlaying, setCurrentPlaylist, setActivePlaylist } = trackSlice.actions
export default trackSlice.reducer

