import React from "react";
import "./VideoCardGrid.css";
import VideoCard from "../VideoCard/VideoCard";

function VideoCardGrid() {
  return (
    <>
      <div className="VideoCardGrid__container">
        {Array(20)
          .fill(true)
          .map((item) => {
            return (
              <div className="VideoCardGrid__item">
                <VideoCard />
              </div>
            );
          })}
      </div>
    </>
  );
}

export default VideoCardGrid;
