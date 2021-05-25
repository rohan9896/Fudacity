import { Routes, Route } from "react-router-dom";
import {
  CategoryScroller,
  ClearHistoryBtn,
  LandingPage,
  LikedHistoryWatchLaterVideosPage,
  NavBar,
  NoVideosFoundPage,
  SearchGrid,
  WatchPage,
} from "./components/index";
import { useLikedHistoryWatchLater } from "./Context/liked-history-watchLater-context";

function App() {
  const { state } = useLikedHistoryWatchLater();

  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <CategoryScroller />
              <LandingPage />
            </>
          }
        />
        <Route
          path="/search/:searchQuery"
          element={
            <>
              <SearchGrid />
            </>
          }
        />
        <Route
          path="/liked"
          element={
            <>
              {state.likedArr.length === 0 ? (
                <NoVideosFoundPage />
              ) : (
                <LikedHistoryWatchLaterVideosPage
                  actionTypeOfCross="REMOVE_FROM_LIKED"
                  arrayToBeMapped={state.likedArr}
                  cross
                />
              )}
            </>
          }
        />
        <Route
          path="/watch-later"
          element={
            <>
              {state.watchLaterArr.length === 0 ? (
                <NoVideosFoundPage />
              ) : (
                <LikedHistoryWatchLaterVideosPage
                  actionTypeOfCross="REMOVE_FROM_WATCHLATER"
                  arrayToBeMapped={state.watchLaterArr}
                  cross
                />
              )}
            </>
          }
        />
        <Route
          path="/history"
          element={
            <>
              {state.historyArr.length === 0 ? (
                <NoVideosFoundPage />
              ) : (
                <>
                  <ClearHistoryBtn />
                  <LikedHistoryWatchLaterVideosPage
                    actionTypeOfCross="REMOVE_FROM_HISTORY"
                    arrayToBeMapped={state.historyArr}
                  />
                </>
              )}
            </>
          }
        />
        <Route
          path="/:id"
          element={
            <>
              <WatchPage />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
