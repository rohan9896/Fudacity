import React from "react";
import "./SideBar.css";
import { NavLink } from "react-router-dom";
import { sideBar } from "./sidebar-details-array";

function SideBar() {
  return (
    <div className="sideBar__List">
      {sideBar.map((item) => {
        return (
          <NavLink
            end
            to={item.route}
            activeStyle={{ fontWeight: "1000", color: "#3B82F6" }}
            style={{ textDecoration: "none", color: "black" }}
            key={item.id}
          >
            <div key={item.id} className="sideBar__item">
              <img className="ecomm__icon" src={item.icon} alt="cart" />
              <p>{item.name}</p>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
}

export default SideBar;
