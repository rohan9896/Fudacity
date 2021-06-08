import React from "react";
import "./VideoSuggestionsCard.css";

export function VideoSuggestionsCard({
  id,
  link,
  thumbnail,
  title,
  channel,
  views,
  monthsAgo,
}) {
  return (
    <div className="videoSuggestionsCard">
      <img
        className="videoSuggestionsCard__firstColumn"
        src={thumbnail}
        alt="thumbnail"
      />
      <div className="videoSuggestionsCard__secondColumn">
        <span className="videoSuggestionsCard__title">{title}</span>
        <span className="videoSuggestionsCard__channel">{channel}</span>
        <span className="videoSuggestionsCard__viewsAndDate">
          {`${views}k views | ${monthsAgo} Months Ago`}
        </span>
      </div>
    </div>
  );
}
