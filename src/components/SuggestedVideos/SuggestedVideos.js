import React from "react";
import "./SuggestedVideos.css";
import { AdCard, VideoSuggestionsCard } from "../index";
import { useLikedHistoryWatchLater } from "../../Context/liked-history-watchLater-context";
import { Link } from "react-router-dom";

export function SuggestedVideos() {
  const { state } = useLikedHistoryWatchLater();

  return (
    <div className="SuggestedVideos__container">
      <AdCard />

      {state.allVideosArr.map((video) => {
        return (
          <div key={video.id} className="suggestedVideos__item">
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`/${video.id}`}
            >
              <VideoSuggestionsCard {...video} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
