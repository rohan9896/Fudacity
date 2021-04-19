import React from "react";
import "./VideoCard.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { useLikedHistoryWatchLater } from "../../Context/liked-history-watchLater-context";

function VideoCard({
  id,
  thumbnail,
  title,
  videoLength,
  channel,
  channelImg,
  views,
  monthsAgo,
  cross,
  actionTypeOfCross,
}) {
  const { dispatch } = useLikedHistoryWatchLater();

  return (
    <>
      <div key={id} className="videoCard">
        <div className="videoCard__thumbnail">
          <Link
            to={`/${id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
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
          </Link>
          <span className="videoCard__videoLength">{videoLength}</span>
        </div>

        <div className="videoCard__detailsContainer">
          <div className="videoCard__channelIcon">
            <img className="faceavatar" src={channelImg} alt="avatar" />
          </div>
          <Link
            to={`/${id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="videoCard__titleContainer">
              <span className="videoCard__title">{title}</span>
              <span className="videoCard__secondTitle">
                {`${channel} | ${views}k views | ${monthsAgo} months ago`}
              </span>
            </div>
          </Link>
        </div>
        <span
          onClick={() =>
            dispatch({
              type: actionTypeOfCross ? actionTypeOfCross : "",
              payload: id,
            })
          }
          style={{ display: cross ? null : "none" }}
          className="cross"
        >
          X
        </span>
      </div>
    </>
  );
}

export default VideoCard;
