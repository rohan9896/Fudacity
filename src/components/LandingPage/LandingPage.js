import React from "react";
import MobileBottomNavBar from "../SideBar/MobileBottomNavBar";
import SideBar from "../SideBar/SideBar";
import VideoCardGrid from "../VideoCardGrid/VideoCardGrid";
import "./LandingPage.css"

function LandingPage() {
  return (
    <div className="landingPage__wrapper">
      <div className="sideBar">
        <SideBar />
      </div>
      <div>
        <VideoCardGrid />
      </div>
      <div className="bottomNavBar">
          <MobileBottomNavBar />
      </div>
    </div>
  );
}

export default LandingPage;
