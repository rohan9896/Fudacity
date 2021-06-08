import "./VideoCardExpand.css";
import { useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";
import { useLikedHistoryWatchLater } from "../../Context/liked-history-watchLater-context";

export function VideoCardExpand() {
  const { pathname } = useLocation();
  const id = pathname.substring(1);

  const inputNotes = useRef();
  const { state, dispatch, isVideoLiked, isVideoInWatchLater } =
    useLikedHistoryWatchLater();

  const save = () => {
    localStorage.setItem(
      clickedVideo.id,
      JSON.stringify(inputNotes.current.value)
    );
    toast.success("Saved");
  };

  useEffect(() => {
    inputNotes.current.value = JSON.parse(
      localStorage.getItem(clickedVideo.id)
    );
  });

  const clickedVideo = state.allVideosArr.find((video) => video.id === id);

  return (
    <div className="videoCardExpand">
      <div className="videoCardExpand__videoWrapper">
        <ReactPlayer
          controls
          width="100%"
          height="100%"
          className="react-player"
          url={clickedVideo.link}
        />
      </div>
      <div className="videoCardExpand__details">
        <div>
          <p className="videoCardExpand__title">{clickedVideo.title}</p>
          <p className="videoCardExpand__viewsAndDate">
            <strong>{clickedVideo.channel}</strong> | {clickedVideo.views}k
            views | {clickedVideo.monthsAgo} months ago
          </p>
        </div>
        <div className="videoCardExpand__Buttons">
          <button
            onClick={() => {
              dispatch({
                type: isVideoLiked(clickedVideo.id)
                  ? "REMOVE_FROM_LIKED"
                  : "ADD_TO_LIKED",
                payload: clickedVideo.id,
              });
              isVideoLiked(clickedVideo.id)
                ? toast.warning("Removed from liked")
                : toast.success("Video liked");
            }}
            className="btn"
          >
            <img
              alt="btn"
              src={
                clickedVideo.liked
                  ? "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/403bf3efef4d411f345f5b77cfc87e638baeb54f/icons/videoLib/like-filled.svg"
                  : "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/b57630ad485a8ad95990506a9f8d00db49eb57bf/icons/videoLib/like.svg"
              }
            />
          </button>
          <button
            onClick={() => {
              dispatch({ type: "TOGGLE_DISLIKED", payload: clickedVideo.id });
              clickedVideo.disliked
                ? toast.warning("Removed from disliked")
                : toast.success("Video disliked");
            }}
            className="btn"
          >
            <img
              alt="btn"
              src={
                clickedVideo.disliked
                  ? "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/403bf3efef4d411f345f5b77cfc87e638baeb54f/icons/videoLib/dislike-filled.svg"
                  : "https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/b57630ad485a8ad95990506a9f8d00db49eb57bf/icons/videoLib/dislike.svg"
              }
            />
          </button>
          <button
            onClick={() => {
              dispatch({ type: "ADD_TO_WATCHLATER", payload: clickedVideo.id });
              isVideoInWatchLater(clickedVideo.id)
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
