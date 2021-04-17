import React from "react";
import "./SideBar.css";
import { v4 as uuid } from "uuid";

const sideBar = [
  {
    name: "Home",
    id: uuid(),
    route: "",
    icon:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/760f25216b78578fd83adba52ff4b72c67ad1f52/icons/ecomm/home.svg",
  },
  {
    name: "Liked",
    id: uuid(),
    route: "",
    icon:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/760f25216b78578fd83adba52ff4b72c67ad1f52/icons/videoLib/like.svg",
  },
  {
    name: "Watch Later",
    id: uuid(),
    route: "",
    icon:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/760f25216b78578fd83adba52ff4b72c67ad1f52/icons/videoLib/playlist.svg",
  },
  {
    name: "History",
    id: uuid(),
    route: "",
    icon:
      "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/760f25216b78578fd83adba52ff4b72c67ad1f52/icons/videoLib/watch-later.svg",
  },
];

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
