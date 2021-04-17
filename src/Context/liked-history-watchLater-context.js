import { createContext, useContext, useReducer } from "react";

export const LikedHistoryWatchLaterContext = createContext();

const actionTypes = {
  ADD_TO_HISTORY: "ADD_TO_HISTORY",
  CLEAR_HISTORY: "CLEAR_HISTORY",
  ADD_TO_WATCHLATER: "ADD_TO_WATCHLATER",
  REMOVE_FROM_WATCHLATER: "REMOVE_FROM_WATCHLATER",
  ADD_TO_LIKED: "ADD_TO_LIKED",
  REMOVE_FROM_LIKED: "REMOVE_FROM_LIKED",
};

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "":
      break;
    default:
      break;
  }
};

const initialState = {};

export default function LikedHistoryWatchLaterProvider({ children }) {
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  return (
    <LikedHistoryWatchLaterContext.Provider value={{ state, dispatch }}>
      {children}
    </LikedHistoryWatchLaterContext.Provider>
  );
}

export const useLikedHistoryWatchLater = () =>
  useContext(LikedHistoryWatchLaterContext);
