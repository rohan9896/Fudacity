import React from "react";
import "../LandingPage/LandingPage.css";
import { SideBar, MobileBottomNavBar, VideoCardGrid } from "../index";

export function LikedHistoryWatchLaterVideosPage({
  cross,
  arrayToBeMapped,
  actionTypeOfCross,
}) {
  return (
    <>
      <div className="wrapper">
        <div className="sideBar">
          <SideBar />
        </div>
        <div>
          <VideoCardGrid
            cross={cross}
            actionTypeOfCross={actionTypeOfCross}
            arrayToBeMapped={arrayToBeMapped}
          />
        </div>
        <div className="bottomNavBar">
          <MobileBottomNavBar />
        </div>
      </div>
    </>
  );
}
