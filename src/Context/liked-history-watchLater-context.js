import { createContext, useContext, useReducer } from "react";
import { categorywiseVideoData } from "../VideosData";
import {reducerFunction} from "./reducer-function"

export const LikedHistoryWatchLaterContext = createContext();

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
  searchedVideos: [],
};

export default function LikedHistoryWatchLaterProvider({ children }) {
  const [state, dispatch] = useReducer(reducerFunction, initialState);

  const isVideoLiked = (id) => state.likedArr.some((video) => video.id === id);
  const isVideoInWatchLater = (id) =>
    state.watchLaterArr.some((video) => video.id === id);

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
