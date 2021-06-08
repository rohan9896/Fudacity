import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import LikedHistoryWatchLaterProvider from "./Context/liked-history-watchLater-context";
import SelectedCategoryContextProvider from "./Context/selected-category-context";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <SelectedCategoryContextProvider>
        <LikedHistoryWatchLaterProvider>
          <App />
        </LikedHistoryWatchLaterProvider>
      </SelectedCategoryContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
