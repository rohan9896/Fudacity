import React from "react";
import "./VideoCard.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

function VideoCard() {
  return (
    <div className="videoCard">
      <div className="videoCard__thumbnail">
        <LazyLoadImage
          effect="blur"
          alt="video_thumbnail"
          style={{
            width: "25rem",
            maxWidth: "100%",
            margin: "0",
          }}
          src="https://img.youtube.com/vi/_AyFP5s69N4/maxresdefault.jpg"
        />
        <span className="videoCard__videoLength">9:50</span>
      </div>
      <div className="videoCard__detailsContainer">
        <div>
          <img
            className="faceavatar"
            src="https://yt3.ggpht.com/ytc/AAUvwnhIz_0Su6HhW6Ym50QCroJCAnF10X9xnnMDboN2=s176-c-k-c0x00ffffff-no-rj"
            alt="avatar"
          />
        </div>
        <div className="videoCard__titleContainer">
          <span className="videoCard__title">
            Learn useCallback in 8 Minutes
          </span>
          <span className="videoCard__secondTitle">
            {`Web Dev Simplified | ${Math.ceil(
              Math.random() * 999
            )}k views | ${Math.ceil(Math.random() * 12)} months ago`}
          </span>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
