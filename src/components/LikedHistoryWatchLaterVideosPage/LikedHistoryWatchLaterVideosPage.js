import React from "react";
import "../LandingPage/LandingPage.css";
import VideoCardGrid from "../VideoCardGrid/VideoCardGrid";
import SideBar from "../SideBar/SideBar";
import MobileBottomNavBar from "../SideBar/MobileBottomNavBar";

function LikedHistoryWatchLaterVideosPage({
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
            cross={true}
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

export default LikedHistoryWatchLaterVideosPage;
