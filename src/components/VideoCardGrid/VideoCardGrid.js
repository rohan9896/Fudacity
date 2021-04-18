import React from "react";
import "./VideoCardGrid.css";
import VideoCard from "../VideoCard/VideoCard";
import { useSelectedCategory } from "../../Context/selected-category-context";
import { useLikedHistoryWatchLater } from "../../Context/liked-history-watchLater-context";

function VideoCardGrid() {
  const { selectedCategory } = useSelectedCategory();
  const { state, dispatch } = useLikedHistoryWatchLater();

  const arrToBeMapped =
    selectedCategory === "All"
      ? state.allVideosArr
      : state.categoryArr[selectedCategory];

  return (
    <>
      <div className="VideoCardGrid__container">
        {arrToBeMapped.map((item) => {
          return (
            <div onClick={() => dispatch({type: "ADD_TO_HISTORY", payload: item.id})} className="VideoCardGrid__item">
              <VideoCard {...item} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default VideoCardGrid;
