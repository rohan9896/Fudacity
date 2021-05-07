import React from "react";
import "./WatchPage.css";
import { SuggestedVideos, VideoCardExpand } from "../index";

export function WatchPage(detailsProps) {
  return (
    <div className="VideoCardExpand__wrapper">
      <div>
        <VideoCardExpand {...detailsProps} />
      </div>
      <div>
        <SuggestedVideos />
      </div>
    </div>
  );
}
