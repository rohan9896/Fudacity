import React from "react";
import { SideBar, MobileBottomNavBar, VideoCardGrid } from "../index";
import "./LandingPage.css";
import { useSelectedCategory } from "../../Context/selected-category-context";
import { useLikedHistoryWatchLater } from "../../Context/liked-history-watchLater-context";

export function LandingPage() {
  const { selectedCategory } = useSelectedCategory();
  const { state } = useLikedHistoryWatchLater();

  const categoryArrForLandingPageNavigation =
    selectedCategory === "All"
      ? state.allVideosArr
      : state.categoryArr[selectedCategory];

  return (
    <div className="wrapper">
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
