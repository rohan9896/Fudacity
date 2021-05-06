import "./VideoCardExpand.css";
import { useRef, useEffect } from "react";
import { useLikedHistoryWatchLater } from "../../Context/liked-history-watchLater-context";
import ReactPlayer from "react-player";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function VideoCardExpand({
  id,
  thumbnail,
  title,
  videoLength,
  channel,
  channelImg,
  link,
  liked,
  disliked,
  views,
  monthsAgo,
}) {
  const inputNotes = useRef();
  const {
    dispatch,
    isVideoLiked,
    isVideoInWatchLater,
  } = useLikedHistoryWatchLater();

  const save = () => {
    localStorage.setItem(id, JSON.stringify(inputNotes.current.value));
    toast.success("Saved");
  };

  useEffect(() => {
    inputNotes.current.value = JSON.parse(localStorage.getItem(id));
  });

  return (
    <div className="videoCardExpand">
      <div className="videoCardExpand__videoWrapper">
        <ReactPlayer
          controls
          width="100%"
          height="100%"
          className="react-player"
          url={link}
        />
      </div>
      <div className="videoCardExpand__details">
        <div>
          <p className="videoCardExpand__title">{title}</p>
          <p className="videoCardExpand__viewsAndDate">
            <strong>{channel}</strong> | {views}k views | {monthsAgo} months ago
          </p>
        </div>
        <div className="videoCardExpand__Buttons">
          <button
            onClick={() => {
              dispatch({
                type: isVideoLiked(id) ? "REMOVE_FROM_LIKED" : "ADD_TO_LIKED",
                payload: id,
              });
              isVideoLiked(id)
                ? toast.warning("Removed from liked")
                : toast.success("Video liked");
            }}
            className="btn"
          >
            <img
              alt="btn"
              src={
                liked
                  ? "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/403bf3efef4d411f345f5b77cfc87e638baeb54f/icons/videoLib/like-filled.svg"
                  : "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/b57630ad485a8ad95990506a9f8d00db49eb57bf/icons/videoLib/like.svg"
              }
            />
          </button>
          <button
            onClick={() => {
              dispatch({ type: "TOGGLE_DISLIKED", payload: id });
              disliked ? toast.warning("Removed from disliked") : toast.success("Video disliked")
            }}
            className="btn"
          >
            <img
              alt="btn"
              src={
                disliked
                  ? "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/403bf3efef4d411f345f5b77cfc87e638baeb54f/icons/videoLib/dislike-filled.svg"
                  : "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/b57630ad485a8ad95990506a9f8d00db49eb57bf/icons/videoLib/dislike.svg"
              }
            />
          </button>
          <button
            onClick={() => {
              dispatch({ type: "ADD_TO_WATCHLATER", payload: id });
              isVideoInWatchLater(id)
                ? toast.info("Already in watch later")
                : toast.success("Added to watch later");
            }}
            className="btn"
          >
            <img
              alt="btn"
              src="https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/b57630ad485a8ad95990506a9f8d00db49eb57bf/icons/videoLib/playlist.svg"
            />
          </button>
        </div>
      </div>
      <div className="videoCardExpand__notesContainer">
        <h2>Take Notes</h2>
        <textarea
          ref={inputNotes}
          className="videoCardExpand__notes"
        ></textarea>
      </div>
      <div className="saveBtn">
        <button className="primary-button black" onClick={save}>
          Save
        </button>
      </div>
      <ToastContainer autoClose={1500} />
    </div>
  );
}

export default VideoCardExpand;
