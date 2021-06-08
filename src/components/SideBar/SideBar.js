import React from "react";
import "./SideBar.css";
import { NavLink } from "react-router-dom";
import { sideBar } from "./sidebar-details-array";

export function SideBar() {
  return (
    <div className="sideBar__List">
      {sideBar.map((item) => {
        return (
          <NavLink
            end
            to={item.route}
            activeStyle={{ fontWeight: "700", fontFamily: "Segoe UI" }}
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
