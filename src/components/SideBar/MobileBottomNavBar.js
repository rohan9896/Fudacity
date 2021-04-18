import React from "react";
import "./MobileBottomNavBar.css";
import { sideBar } from "./sidebar-details-array";

function MobileBottomNavBar() {
  return (
    <>
      <nav className="videolibNav">
        <div className="videolibNav__list">
          {sideBar.map((item) => {
            return (
              <div className="videolibNav__item" key={item.id}>
                <img style={{width: "2rem", height: "2rem"}} src={item.icon} alt="icon" />
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>
      </nav>
    </>
  );
}

export default MobileBottomNavBar;
