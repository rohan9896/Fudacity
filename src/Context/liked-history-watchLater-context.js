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
    default:
      break;
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
