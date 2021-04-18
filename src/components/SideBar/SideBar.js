import React from "react";
import "./SideBar.css";
import { sideBar } from "./sidebar-details-array";


function SideBar() {
  return (
    <div className="sideBar__List">
      {sideBar.map((sideBarItem) => {
        return (
          <div key={sideBarItem.id} className="sideBar__item">
            <img className="ecomm__icon" src={sideBarItem.icon} alt="cart" />
            <p>{sideBarItem.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default SideBar;
