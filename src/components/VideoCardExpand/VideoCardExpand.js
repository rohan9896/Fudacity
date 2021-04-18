import "./VideoCardExpand.css";
import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";
import { useRef } from "react";

function VideoCardExpand() {
  const inputNotes = useRef();

  const save = () => {
    localStorage.setItem("key", JSON.stringify(inputNotes.current.value));
    // console.log(inputNotes.current)
  };

  const videoSrc = {
    type: "video",
    sources: [
      {
        src: "https://www.youtube.com/watch?v=_AyFP5s69N4",
        provider: "youtube",
      },
    ],
  };

  return (
    <div className="videoCardExpand">
      <div className="videoCardExpand__video">
        <Plyr source={videoSrc} />
      </div>
      <div className="videoCardExpand__details">
        <div>
          <p className="videoCardExpand__titleHeader">#React #WebDev</p>
          <p className="videoCardExpand__title">
            Learn useCallback In 8 Minutes
          </p>
          <p className="videoCardExpand__viewsAndDate">
            <strong>WebDev Simplified</strong> | 240,000 views | 28 July, 2019
          </p>
        </div>
        <div className="videoCardExpand__Buttons">
          <button className="icon-button">
            <img
              alt="btn"
              src="https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/b57630ad485a8ad95990506a9f8d00db49eb57bf/icons/videoLib/like.svg"
            />
          </button>
          <button className="icon-button">
            <img
              alt="btn"
              src="https://raw.githubusercontent.com/rohan9896/Testing-for-CSS-component-library/b57630ad485a8ad95990506a9f8d00db49eb57bf/icons/videoLib/dislike.svg"
            />
          </button>
          <button className="icon-button">
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
    </div>
  );
}

export default VideoCardExpand;
