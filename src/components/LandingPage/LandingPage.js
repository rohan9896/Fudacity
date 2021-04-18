import React from "react";
import MobileBottomNavBar from "../SideBar/MobileBottomNavBar";
import SideBar from "../SideBar/SideBar";
import VideoCardGrid from "../VideoCardGrid/VideoCardGrid";
import "./LandingPage.css"
import { useSelectedCategory } from "../../Context/selected-category-context";
import { useLikedHistoryWatchLater } from "../../Context/liked-history-watchLater-context";

function LandingPage() {
  const { selectedCategory } = useSelectedCategory();
  const { state } = useLikedHistoryWatchLater();

  const categoryArrForLandingPageNavigation =
    selectedCategory === "All"
      ? state.allVideosArr
      : state.categoryArr[selectedCategory];

  return (
    <div className="landingPage__wrapper">
      <div className="sideBar">
        <SideBar />
      </div>
      <div>
        <VideoCardGrid arrayToBeMapped={categoryArrForLandingPageNavigation} />
      </div>
      <div className="bottomNavBar">
          <MobileBottomNavBar />
      </div>
    </div>
  );
}

export default LandingPage;
