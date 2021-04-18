import React from "react";
import "./VideoCardGrid.css";
import VideoCard from "../VideoCard/VideoCard";
import { useLikedHistoryWatchLater } from "../../Context/liked-history-watchLater-context";

function VideoCardGrid({ arrayToBeMapped }) {
  const { dispatch } = useLikedHistoryWatchLater();

  return (
    <>
      <div className="VideoCardGrid__container">
        {arrayToBeMapped.map((item) => {
          return (
            <div
              onClick={() =>
                dispatch({ type: "ADD_TO_HISTORY", payload: item.id })
              }
              className="VideoCardGrid__item"
            >
              <VideoCard id={item.id} {...item} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default VideoCardGrid;
