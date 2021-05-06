import React from "react";
import "./SearchGrid.css";
import { useLikedHistoryWatchLater } from "../../Context/liked-history-watchLater-context";
import VideoCardGrid from "../VideoCardGrid/VideoCardGrid";

function SearchGrid() {
  const { state } = useLikedHistoryWatchLater();

  return (
    <>
      <div className="SearchGrid__heading">
        <h1>
          RESULTS - {state.searchedVideos.length}
        </h1>
      </div>
      <VideoCardGrid arrayToBeMapped={state.searchedVideos} />
    </>
  );
}

export default SearchGrid;
