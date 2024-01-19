import {
  SET_CURRENT_TRACK,
  SET_IS_PLAYING,
  SET_CURRENT_TRACKLIST,
  SET_IS_LOADING,
} from '../types/currentTrack'

export const selectCurrentTrack = (track) => ({
  type: SET_CURRENT_TRACK,
  payload: track,
})

export const selectIsPlaying = (isPlaying) => ({
  type: SET_IS_PLAYING,
  payload: isPlaying,
})

export const selectCurrentTracklist = (tracklist) => ({
  type: SET_CURRENT_TRACKLIST,
  payload: tracklist,
})

export const selectIsLoading = (isLoading) => ({
  type: SET_IS_LOADING,
  payload: isLoading,
})
