import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useLikedHistoryWatchLater } from "../../Context/liked-history-watchLater-context";

export function NavBar() {
  const searchQuery = new URLSearchParams(useLocation().search);

  const { dispatch } = useLikedHistoryWatchLater();
  const [inputVal, setInputVal] = useState(searchQuery.get("q") || '');
  let navigate = useNavigate();

  useEffect(() => {
    if (inputVal) {
      dispatch({ type: "SEARCH_VIDEOS", payload: inputVal });
    }
  }, [inputVal, dispatch]);

  return (
    <div className="NavBar">
      <nav>
        <ul className="nav2__navList">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <li className="nav2__navStart">
              <img
                className="ecomm__icon"
                src="https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/403bf3efef4d411f345f5b77cfc87e638baeb54f/icons/fudacity.svg"
                alt="truck"
              />
              <h2>FUDACITY</h2>
            </li>
          </Link>
          <li className="nav2__navEnd">
            <input
              type="text"
              className="searchInput-NonExpand"
              placeholder="Search..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            />
            <button
              disabled={inputVal === ""}
              onClick={() => {
                dispatch({ type: inputVal ? "SEARCH_VIDEOS" : "NO_VIDEOS_FOUND", payload: inputVal });
                navigate(`search/search?q=${inputVal}`);
              }}
            >
              <img src="https://github.com/rohan9896/Testing-for-CSS-component-library/blob/main/icons/videoLib/search-icon.png?raw=true" alt="search-icon" />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
