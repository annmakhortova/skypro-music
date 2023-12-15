export const allTracksSelector = (store) => store.currentPlay.allTracks
export const currentTrackSelector = (store) => store.currentPlay.currentTrack
export const selectIsPlaying = (store) => store.currentPlay.isPlaying
export const selectIsLoading = (store) => store.currentPlay.isLoading
export const currentTrackIndexSelector = (store) =>
  store.currentPlay.currentTrack.id

export const currentPlaylistSelector = (store) => store.currentPlay.currentPlaylist

export const activePlaylistSelector = (store) => store.currentPlay.activePlaylist
