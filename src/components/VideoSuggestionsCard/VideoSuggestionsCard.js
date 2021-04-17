import React from "react";
import "./VideoSuggestionsCard.css";

function VideoSuggestionsCard({thumbnail, title, channel, views, monthsAgo}) {
  return (
    <div className="videoSuggestionsCard">
      <img
        className="videoSuggestionsCard__firstColumn"
        src={thumbnail}
        alt="thumbnail"
      />
      <div className="videoSuggestionsCard__secondColumn">
        <span className="videoSuggestionsCard__title">
          {title}
        </span>
        <span className="videoSuggestionsCard__channel">{channel}</span>
        <span className="videoSuggestionsCard__viewsAndDate">
          {`${views}k views | ${Math.ceil(Math.random()*12)} Months Ago`}
        </span>
      </div>
    </div>
  );
}

export default VideoSuggestionsCard;
