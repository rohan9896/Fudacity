import React from "react";
import "./MobileBottomNavBar.css";
import { NavLink } from "react-router-dom";
import { sideBar } from "./sidebar-details-array";

function MobileBottomNavBar() {
  return (
    <>
      <nav className="videolibNav">
        <div className="videolibNav__list">
          {sideBar.map((item) => {
            return (
              <NavLink
                end
                to={item.route}
                activeStyle={{ fontWeight: "1000", color: "#3B82F6" }}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="videolibNav__item" key={item.id}>
                  <img
                    style={{ width: "2rem", height: "2rem" }}
                    src={item.icon}
                    alt="icon"
                  />
                  <span>{item.name}</span>
                </div>
              </NavLink>
            );
          })}
        </div>
      </nav>
    </>
  );
}

export default MobileBottomNavBar;
