import { actionTypes } from "./action-types";

export const reducerFunction = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_HISTORY:
      if (state.historyArr.some((video) => video.id === action.payload))
        return state;
      return {
        ...state,
        historyArr: state.historyArr.concat(
          state.allVideosArr.filter((video) => video.id === action.payload)
        ),
      };
    case actionTypes.CLEAR_HISTORY:
      return {
        ...state,
        historyArr: [],
      };
    case actionTypes.ADD_TO_LIKED:
      if (state.likedArr.some((video) => video.id === action.payload))
        return state;
      return {
        ...state,
        likedArr: state.likedArr.concat(
          state.allVideosArr.filter((video) => video.id === action.payload)
        ),
        allVideosArr: state.allVideosArr.map((video) =>
          video.id === action.payload ? { ...video, liked: true } : video
        ),
      };
    case actionTypes.REMOVE_FROM_LIKED:
      return {
        ...state,
        likedArr: state.likedArr.filter((video) => video.id !== action.payload),
        allVideosArr: state.allVideosArr.map((video) =>
          video.id === action.payload ? { ...video, liked: false } : video
        ),
      };
    case actionTypes.TOGGLE_DISLIKED:
      return {
        ...state,
        allVideosArr: state.allVideosArr.map((video) =>
          video.id === action.payload
            ? { ...video, disliked: !video.disliked }
            : video
        ),
      };
    case actionTypes.ADD_TO_WATCHLATER:
      if (state.watchLaterArr.some((video) => video.id === action.payload))
        return state;
      return {
        ...state,
        watchLaterArr: state.watchLaterArr.concat(
          state.allVideosArr.filter((video) => video.id === action.payload)
        ),
      };
    case actionTypes.REMOVE_FROM_WATCHLATER:
      return {
        ...state,
        watchLaterArr: state.watchLaterArr.filter(
          (video) => video.id !== action.payload
        ),
      };
    case actionTypes.SEARCH_VIDEOS:
      return {
        ...state,
        searchedVideos: state.allVideosArr.filter((video) =>
          video.title.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    case actionTypes.NO_VIDEOS_FOUND:
        return {
            ...state,
            searchedVideos: []
        }
    default:
      return state;
  }
};
