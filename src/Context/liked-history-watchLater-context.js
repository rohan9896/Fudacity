import { createContext, useContext, useReducer } from "react";
import { categorywiseVideoData } from "../VideosData";

export const LikedHistoryWatchLaterContext = createContext();

const actionTypes = {
  ADD_TO_HISTORY: "ADD_TO_HISTORY",
  CLEAR_HISTORY: "CLEAR_HISTORY",
  ADD_TO_WATCHLATER: "ADD_TO_WATCHLATER",
  REMOVE_FROM_WATCHLATER: "REMOVE_FROM_WATCHLATER",
  ADD_TO_LIKED: "ADD_TO_LIKED",
  REMOVE_FROM_LIKED: "REMOVE_FROM_LIKED",
  TOGGLE_DISLIKED: "TOGGLE_DISLIKED",
  SEARCH_VIDEOS: "SEARCH_VIDEOS"
};

function generateAllCategoriesVideos() {
  const allCategoriesVideos = Object.keys(categorywiseVideoData).map((key) => {
    return categorywiseVideoData[key];
  });
  return allCategoriesVideos.flat();
}
const allCategoriesVideosData = generateAllCategoriesVideos();

const initialState = {
  allVideosArr: allCategoriesVideosData,
  categoryArr: categorywiseVideoData,
  historyArr: [],
  likedArr: [],
  watchLaterArr: [],
  searchedVideos: []
};

const reducerFunction = (state, action) => {
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
        searchedVideos: state.allVideosArr.filter(video => video.title.toLowerCase().includes(action.payload.toLowerCase()))
      }
    default:
      return state;
  }
};

export default function LikedHistoryWatchLaterProvider({ children }) {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  const isVideoLiked = (id) => state.likedArr.some((video) => video.id === id);
  const isVideoInWatchLater = (id) => state.watchLaterArr.some(video => video.id === id);

  return (
    <LikedHistoryWatchLaterContext.Provider
      value={{ state, dispatch, isVideoLiked, isVideoInWatchLater }}
    >
      {children}
    </LikedHistoryWatchLaterContext.Provider>
  );
}

export const useLikedHistoryWatchLater = () =>
  useContext(LikedHistoryWatchLaterContext);
