import { createContext, useContext, useReducer, useEffect } from "react";
import { reducerFunction } from "./reducer-function";
import axios from "axios"

export const LikedHistoryWatchLaterContext = createContext();

export default function LikedHistoryWatchLaterProvider({ children }) {
  
  const initialState = {
    allVideosArr: [],
    categoryArr: [],
    historyArr: [],
    likedArr: [],
    watchLaterArr: [],
    searchedVideos: [],
  };

  const [state, dispatch] = useReducer(reducerFunction, initialState);

  const isVideoLiked = (id) => state.likedArr.some((video) => video.id === id);
  const isVideoInWatchLater = (id) =>
    state.watchLaterArr.some((video) => video.id === id);

    useEffect(() => {
      (async () => {
        const response = await axios.get("https://video-lib-backend.rohangupta7.repl.co/videos/categorywise-videos-data");
    
        if(response.data.success) {
          const categorywiseVideoData = response.data.categorywiseVideoData;
          dispatch({type: "SET_VIDEOS", payload: categorywiseVideoData})
        }
      })()
    }, [dispatch])

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
