export const addLikeSuccess = (track) => ({
    type: "ADD_LIKE_SUCCESS",
    payload: {
        track,
      },
  });
  
  export const addLikeStarted = () => ({
    type: "ADD_LIKE_STARTED",
  });
  
  export const addLikeFailure = (error) => ({
    type: "ADD_LIKE_FAILURE",
    payload: {
      error,
    },
  });