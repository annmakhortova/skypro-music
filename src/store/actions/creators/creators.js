import {
  SET_CURRENT_TRACK,
  NEXT_TRACK,
  PREV_TRACK,
  TOGGLE_SUFFLED,
} from "../types/types";

export const setCurrentTrack = (id, content, isPlayingTrack, allTracks) => ({
  type: SET_CURRENT_TRACK,
  payload: {
    id,
    content,
    isPlayingTrack,
    allTracks,
  },
});
export const nextTrack = () => ({
  type: NEXT_TRACK,
});

export const prevTrack = () => ({
  type: PREV_TRACK,
});

export const toggleSuffled = (isSuffled) => ({
  type: TOGGLE_SUFFLED,
  payload: {
    isSuffled,
  },
});
