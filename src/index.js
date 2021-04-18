import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import LikedHistoryWatchLaterProvider from "./Context/liked-history-watchLater-context";
import SelectedCategoryContextProvider from "./Context/selected-category-context";

ReactDOM.render(
  <React.StrictMode>
    <SelectedCategoryContextProvider>
      <LikedHistoryWatchLaterProvider>
        <App />
      </LikedHistoryWatchLaterProvider>
    </SelectedCategoryContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);