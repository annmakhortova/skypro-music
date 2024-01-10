import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    currentTrack: null,
    isPlaying: false,
    tracks: [],
    allTracks: [],
    favorites: [],
    catalog_1: [],
    catalog_2: [],
    catalog_3: [],
    search: "",
    sort: "",
    authorFilter: [],
    genreFilter: [],
    FiltersPlaylist: {
        authors: [],
        isActiveAuthors: false,
        genres: [],
        isActiveGenres: false,
        sort: 'По умолчанию',
        isActiveSort: false,
        search: '',
        isActiveSearch: false,
        filterTracksArr: [],
    },
}

export const trackSlice = createSlice({
    name: "track",
    initialState,
    reducers: {
        setCurrentTrackRedux: (state, action) => {
            state.currentTrack = action.payload
        },
        setIsPlaying: (state, action) => {
            state.isPlaying = action.payload
        },
        tracksRedux: (state, action) => {
            state.tracks = action.payload
        },
        setAlltracks: (state, action) => {
            state.allTracks = action.payload
        },
        favoritesRedux: (state, action) => {
            state.favorites = action.payload
        },
        catalogClassic: (state, action) => {
            state.catalog_1 = action.payload
        },
        catalogElectro: (state, action) => {
            state.catalog_2 = action.payload
        },
        catalogRock: (state, action) => {
            state.catalog_3 = action.payload
        },
        setSearch: (state, action) => {
            state.search = action.payload
        },
        setSort: (state, action) => {
            state.sort = action.payload
        },
        setAuthorFilter: (state, action) => {
            state.authorFilter = action.payload
        },
        setGenreFilter: (state, action) => {
            state.genreFilter = action.payload
        },
        setFiltersPlaylist: (state, action) => {
            const { sort, authors, genres, search } = action.payload

            if (authors === '') {
              state.FiltersPlaylist.authors = []
            } else if (authors) {
              if (state.FiltersPlaylist.authors.includes(authors)) {
                state.FiltersPlaylist.authors = state.FiltersPlaylist.authors.filter(
                  (item) => item !== authors
                )
              } else {
                state.FiltersPlaylist.authors = [
                  ...state.FiltersPlaylist.authors,
                  authors,
                ]
              }
            }
      
            if (genres === '') {
              state.FiltersPlaylist.genres = []
            } else if (genres) {
              if (state.FiltersPlaylist.genres.includes(genres)) {
                state.FiltersPlaylist.genres = state.FiltersPlaylist.genres.filter(
                  (item) => item !== genres
                )
              } else {
                state.FiltersPlaylist.genres = [
                  ...state.FiltersPlaylist.genres,
                  genres,
                ]
              }
            }
      
            if (sort) {
              state.FiltersPlaylist.sort = sort
            }
      
            if (search?.length > 0) {
              state.FiltersPlaylist.search = search
            } else {
              state.FiltersPlaylist.search = ''
              state.FiltersPlaylist.isActiveSearch = false
            }
      
            const getFilteredTracks = () => {
                let filterArray = []
                filterArray = state.allTracks
              
      
              if (state.FiltersPlaylist.authors.length > 0) {
                state.FiltersPlaylist.isActiveAuthors = true
      
                filterArray = filterArray.filter((track) =>
                  state.FiltersPlaylist.authors.includes(track.author)
                )
              }
      
              if (state.FiltersPlaylist.genres.length > 0) {
                state.FiltersPlaylist.isActiveGenres = true
      
                filterArray = filterArray.filter((track) =>
                  state.FiltersPlaylist.genres.includes(track.genre)
                )
              }
      
              if (state.FiltersPlaylist.sort === 'Сначала новые') {
                state.FiltersPlaylist.isActiveSort = true
      
                filterArray = filterArray.sort(
                  (a, b) => new Date(b.release_date) - new Date(a.release_date)
                )
              } else if (state.FiltersPlaylist.sort === 'Сначала старые') {
                state.FiltersPlaylist.isActiveSort = true
      
                filterArray = filterArray.sort(
                  (a, b) => new Date(a.release_date) - new Date(b.release_date)
                )
              } else {
                state.FiltersPlaylist.isActiveSort = false
              }
      
              if (state.FiltersPlaylist.search.length > 0) {
                state.FiltersPlaylist.isActiveSearch = true
      
                filterArray = filterArray.filter((item) =>
                  item.name
                    .toLocaleLowerCase()
                    .includes(state.FiltersPlaylist.search.toLocaleLowerCase())
                )
              }
      
              return filterArray
            }
      
            state.FiltersPlaylist.filterTracksArr = getFilteredTracks()
        },
    }
})

export const {setCurrentTrackRedux, setIsPlaying, tracksRedux, favoritesRedux, catalogClassic, catalogElectro, 
    catalogRock, setSearch, setSort, setAuthorFilter, setGenreFilter, setFiltersPlaylist, setAlltracks } = trackSlice.actions
export default trackSlice.reducer