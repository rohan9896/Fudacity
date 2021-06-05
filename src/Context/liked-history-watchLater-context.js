import { createContext, useContext, useEffect, useReducer } from "react";
import axios from 'axios'
import { reducerFunction } from "./reducer-function";
// import {categorywiseVideoData} from "../VideosData"

export const LikedHistoryWatchLaterContext = createContext();

export default function LikedHistoryWatchLaterProvider({ children }) {

  // const allVideos = Object.keys(categorywiseVideoData).map(key => categorywiseVideoData[key]).flat()
  
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

  
  const getAllVideos = async (dispatch) => {
    const resp = await axios.get("https://Video-lib-backend.rohangupta7.repl.co/videos");
    if(resp.data.success) {
      const allVideosWithId = resp.data.allVideos.map(video => {
        return {...video, id: video._id, _id: undefined}
      })
      dispatch({type: "SET_ALL_VIDEOS", payload: allVideosWithId});
    }
  }

  useEffect(() => {
    getAllVideos(dispatch);
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
