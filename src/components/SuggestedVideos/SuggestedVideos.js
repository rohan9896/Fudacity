import React from "react";
import "./SuggestedVideos.css";
import AdCard from "../AdCard/AdCard";
import VideoSuggestionsCard from "../VideoSuggestionsCard/VideoSuggestionsCard";
import { useLikedHistoryWatchLater } from "../../Context/liked-history-watchLater-context";
import { Link } from "react-router-dom";

function SuggestedVideos() {
  const { state } = useLikedHistoryWatchLater();

  return (
    <div className="SuggestedVideos__container">
      <AdCard />

      {state.allVideosArr.map((video) => {
        return (
          <div key={video.id} className="suggestedVideos__item">
            <Link style={{textDecoration: "none", color: "black"}} to={`/${video.id}`}>
              <VideoSuggestionsCard {...video} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default SuggestedVideos;
