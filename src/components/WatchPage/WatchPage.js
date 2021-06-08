import React, { useEffect } from "react";
import "./WatchPage.css";
import { SuggestedVideos, VideoCardExpand } from "../index";

export function WatchPage() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
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
