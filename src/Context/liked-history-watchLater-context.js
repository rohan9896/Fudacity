import { createContext, useContext, useReducer } from "react";
import { categorywiseVideoData } from "../VideosData";

export const LikedHistoryWatchLaterContext = createContext();

const actionTypes = {
  ADD_TO_HISTORY: "ADD_TO_HISTORY",
  REMOVE_FROM_HISTORY: "REMOVE_FROM_HISTORY",
  CLEAR_HISTORY: "CLEAR_HISTORY",
  ADD_TO_WATCHLATER: "ADD_TO_WATCHLATER",
  REMOVE_FROM_WATCHLATER: "REMOVE_FROM_WATCHLATER",
  ADD_TO_LIKED: "ADD_TO_LIKED",
  REMOVE_FROM_LIKED: "REMOVE_FROM_LIKED",
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
};

const reducerFunction = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_HISTORY:
      return {
        ...state,
        historyArr: [
          ...new Set(
            state.historyArr.concat(
              state.allVideosArr.filter((video) => video.id === action.payload)
            )
          ),
        ],
      };
    case actionTypes.REMOVE_FROM_HISTORY:
      return {
        ...state,
        historyArr: state.historyArr.filter(
          (video) => video.id !== action.payload
        ),
      };
    case actionTypes.CLEAR_HISTORY:
      return {
        ...state,
        historyArr: [],
      };
    case actionTypes.ADD_TO_LIKED:
      return {
        ...state,
        likedArr: [
          ...new Set(
            state.likedArr.concat(
              state.allVideosArr.filter((video) => video.id === action.payload)
            )
          ),
        ],
        allVideosArr: state.allVideosArr.map((video) =>
          video.id === action.payload
            ? { ...video, liked: true, disliked: false }
            : video
        ),
      };
    case actionTypes.REMOVE_FROM_LIKED:
      return {
        ...state,
        likedArr: state.likedArr.filter((video) => video.id !== action.payload),
        allVideosArr: state.allVideosArr.map((video) =>
          video.id === action.payload
            ? { ...video, liked: false, disliked: true }
            : video
        ),
      };
    case actionTypes.ADD_TO_WATCHLATER:
      return {
        ...state,
        watchLaterArr: [
          ...new Set(
            state.watchLaterArr.concat(
              state.allVideosArr.filter((video) => video.id === action.payload)
            )
          ),
        ],
      };
    case actionTypes.REMOVE_FROM_WATCHLATER:
      return {
        ...state,
        watchLaterArr: state.watchLaterArr.filter(
          (video) => video.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default function LikedHistoryWatchLaterProvider({ children }) {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  return (
    <LikedHistoryWatchLaterContext.Provider value={{ state, dispatch }}>
      {children}
    </LikedHistoryWatchLaterContext.Provider>
  );
}

export const useLikedHistoryWatchLater = () =>
  useContext(LikedHistoryWatchLaterContext);
