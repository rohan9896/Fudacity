import React from "react";
import "./NoVideosFoundPage.css";
import { Link } from "react-router-dom";

export function NoVideosFoundPage() {
  return (
    <div className="NoVideoFoundPage__container">
      <img
        src="https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/9868a4179f0707e18e554ade9a85f0310388be95/icons/videoLib/no%20vidoes%20found%20img.svg"
        alt="img"
      />
      <p>No Videos Found</p>
      <Link to="/">
        <button className="primary-button black">Back To Home</button>
      </Link>
    </div>
  );
}
