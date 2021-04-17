import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import LikedHistoryWatchLaterProvider from "./Context/liked-history-watchLater-context";

ReactDOM.render(
  <React.StrictMode>
    <LikedHistoryWatchLaterProvider>
      <App />
    </LikedHistoryWatchLaterProvider>
  </React.StrictMode>,
  document.getElementById("root")
);