import React from "react";
import "./VideoCard.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

function VideoCard({ id, thumbnail, title, videoLength, channel, channelImg }) {
  return (
    <Link to={`/${id}`} style={{textDecoration: "none", color: "black"}}>
    <div key={id} className="videoCard">
      <div className="videoCard__thumbnail">
        <LazyLoadImage
          effect="blur"
          alt="video_thumbnail"
          style={{
            width: "25rem",
            maxWidth: "100%",
            height: "17rem",
            margin: "0",
          }}
          src={thumbnail}
        />
        <span className="videoCard__videoLength">{videoLength}</span>
      </div>
      <div className="videoCard__detailsContainer">
        <div>
          <img className="faceavatar" src={channelImg} alt="avatar" />
        </div>
        <div className="videoCard__titleContainer">
          <span className="videoCard__title">{title}</span>
          <span className="videoCard__secondTitle">
            {`${channel} | ${Math.ceil(
              Math.random() * 999
            )}k views | ${Math.ceil(Math.random() * 12)} months ago`}
          </span>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default VideoCard;
