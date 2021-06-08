import React from "react";
import "./VideoCardGrid.css";
import { VideoCard } from "../index";
import { useLikedHistoryWatchLater } from "../../Context/liked-history-watchLater-context";

export function VideoCardGrid({ arrayToBeMapped, cross, actionTypeOfCross }) {
  const { dispatch } = useLikedHistoryWatchLater();

  return (
    <>
      <div className="VideoCardGrid__container">
        {arrayToBeMapped.map((item) => {
          return (
            <div
              key={item.id}
              onClick={() =>
                dispatch({ type: "ADD_TO_HISTORY", payload: item.id })
              }
              className="VideoCardGrid__item"
            >
              <VideoCard
                cross={cross}
                actionTypeOfCross={actionTypeOfCross}
                {...item}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
