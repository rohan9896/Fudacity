import React from 'react'
import "./WatchPage.css"
import VideoCardExpand from "../VideoCardExpand/VideoCardExpand"

function WatchPage(detailsProps) {
    return (
        <div className="VideoCardExpand__wrapper">
            <div>
                <VideoCardExpand {...detailsProps} />
            </div>
            <div></div>
        </div>
    )
}

export default WatchPage
