import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="NavBar">
      <nav>
        <ul className="nav2__navList">
          <li className="nav2__navStart">
          <img className='ecomm__icon' src="https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/403bf3efef4d411f345f5b77cfc87e638baeb54f/icons/fudacity.svg" alt="truck" />
          <h2>FUDACITY</h2>
          </li>
          <li className="nav2__navEnd">
            <input
              type="text"
              className="searchInput-NonExpand"
              placeholder="Search..."
            />
            <button><span role="img">🔍</span></button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
