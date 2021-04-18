import "./App.css";
import { Routes, Route } from "react-router-dom";
import CategoryScroller from "./components/CategoryScroller/CategoryScroller";
import LandingPage from "./components/LandingPage/LandingPage";
import NavBar from "./components/NavBar/NavBar";
import WatchPage from "./components/WatchPage/WatchPage";
import { useLikedHistoryWatchLater } from "./Context/liked-history-watchLater-context";

function App() {
  const { state } = useLikedHistoryWatchLater();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <CategoryScroller />
              <LandingPage />
            </>
          }
        />
        <Route
          path="/liked"
          element={
            <>
              <NavBar />
            </>
          }
        />
        <Route
          path="/watch-later"
          element={
            <>
              <NavBar />
            </>
          }
        />
        <Route
          path="/history"
          element={
            <>
              <NavBar />
            </>
          }
        />
        {state.allVideosArr.map((videoObj) => {
          return (
            <Route
              key={videoObj.id}
              path={videoObj.id}
              element={
                <>
                  <NavBar />
                  <WatchPage {...videoObj} />
                </>
              }
            />
          );
        })}
      </Routes>
    </>
  );
}

export default App;

/*
<VideoSuggestionsCard
  thumbnail="https://img.youtube.com/vi/Wa6it7j_OHY/mqdefault.jpg"
  title="Learn useCallback In 8 Minutes"
  channel="WebDev Simplified"
  views={2.2}
/> */
