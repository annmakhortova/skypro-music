const initialState = {
    loading: false,
    error: null,
    favorites: [],
  }
  
  export default function todoReducer(state = initialState, action) {
    switch (action.type) {
  
      case "ADD_LIKE_SUCCESS":
        const tracksCopy = state.tracks.slice();
        const targetTodoId = action.payload.todo.id;
        const targetTodo = copy.find((track) => track.id === targetTodoId);
  
        targetTrack.completed = action.payload.track.completed;
  
        return {
          ...state,
          loading: false,
          error: null,
          tracks: copy,
        };

    case "ADD_LIKE_STARTED":
    return {
        ...state,
        loading: true,
        };

    case "ADD_LIKE_FAILURE":
        return {
            ...state,
            loading: false,
            error: action.payload.error,
          };
  
      default:
        return state;
    }
  }