import React from "react";
import "./SearchGrid.css";
import { useLikedHistoryWatchLater } from "../../Context/liked-history-watchLater-context";
import { VideoCardGrid } from "../index";
import { NoVideosFoundPage } from "../NoVideosFoundPage/NoVideosFoundPage";

export function SearchGrid() {
  const { state } = useLikedHistoryWatchLater();

  return (
    <>
      <div className="SearchGrid__heading">
        <h1>RESULTS - {state.searchedVideos.length}</h1>
      </div>
      {
        state.searchedVideos.length === 0 ? <NoVideosFoundPage /> : <VideoCardGrid arrayToBeMapped={state.searchedVideos} />
      }
    </>
  );
}
