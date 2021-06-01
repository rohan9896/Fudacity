import { createContext, useContext, useReducer } from "react";
import { reducerFunction } from "./reducer-function";
import {categorywiseVideoData} from "../VideosData"

export const LikedHistoryWatchLaterContext = createContext();

export default function LikedHistoryWatchLaterProvider({ children }) {

  const allVideos = Object.keys(categorywiseVideoData).map(key => categorywiseVideoData[key]).flat()
  
  const initialState = {
    allVideosArr: allVideos,
    categoryArr: categorywiseVideoData,
    historyArr: [],
    likedArr: [],
    watchLaterArr: [],
    searchedVideos: [],
  };

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
