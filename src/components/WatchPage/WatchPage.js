import React, { useEffect } from "react";
import "./WatchPage.css";
import { SuggestedVideos, VideoCardExpand } from "../index";

export function WatchPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="VideoCardExpand__wrapper">
      <div>
        <VideoCardExpand />
      </div>
      <div>
        <SuggestedVideos />
      </div>
    </div>
  );
}
