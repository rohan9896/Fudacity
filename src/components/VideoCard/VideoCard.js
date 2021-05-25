import React from "react";
import "./VideoCard.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import { useLikedHistoryWatchLater } from "../../Context/liked-history-watchLater-context";

export function VideoCard({
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

  const overflowProcessedString = (str, wordExceedLimit) => {
    if (str.length > wordExceedLimit) {
      return str.substring(0, wordExceedLimit - 2) + "...";
    }
    return str;
  };

  const navigate = useNavigate();

  return (
    <>
      <div key={id} className="videoCard">
        <div className="videoCard__thumbnail">
          <LazyLoadImage
          onClick={() => navigate(`/${id}`)}
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
          <div className="videoCard__channelIcon">
            <img className="faceavatar" src={channelImg} alt="avatar" />
          </div>
          <div onClick={() => navigate(`/${id}`)} className="videoCard__titleContainer">
            <p className="videoCard__title">
              {overflowProcessedString(title, 34)}
            </p>
            <span className="videoCard__secondTitle">
              {overflowProcessedString(
                `${channel} | ${views}k views | ${monthsAgo} months ago`,
                43
              )}
            </span>
          </div>
        </div>
        <span
          onClick={() =>
            dispatch({
              type: actionTypeOfCross ? actionTypeOfCross : null,
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
