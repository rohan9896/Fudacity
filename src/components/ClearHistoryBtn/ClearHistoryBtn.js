import React from 'react'
import "./ClearHistoryBtn.css"
import { useLikedHistoryWatchLater } from "../../Context/liked-history-watchLater-context";

function ClearHistoryBtn() {

    const {dispatch} = useLikedHistoryWatchLater();

    return (
        <div className="clearHistoryBtn__container">
            <button onClick={() => dispatch({type: "CLEAR_HISTORY"})} className="primary-button red">Clear History</button>
        </div>
    )
}

export default ClearHistoryBtn
