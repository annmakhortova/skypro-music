import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allTracks: [],
  currentTrack: {},
  currentPlaylist: [],
  activePlaylist: [],
  isPlaying: false,
  isLoading: true,
  filters: {
    status: false,
    authors: '',
    years: 'По умолчанию',
    genre: '',
    searchValue: '',
  },
  filteredPlaylist: [], //
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
    setFilters: (state, action) => {
      state.filters = action.payload
    },
    setFilteredPlaylist: (state, action) => {
      state.filteredPlaylist = action.payload
    }
  }
})

export const { setAllTracks, setCurrentTrack, setIsLoading, setIsPlaying, setCurrentPlaylist, setActivePlaylist, setFilters, setFilteredPlaylist } = trackSlice.actions
export default trackSlice.reducer

