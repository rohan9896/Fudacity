import React from 'react'
import "./WatchPage.css"
import VideoCardExpand from "../VideoCardExpand/VideoCardExpand"
import SuggestedVideos from '../SuggestedVideos/SuggestedVideos'

function WatchPage(detailsProps) {
    return (
        <div className="VideoCardExpand__wrapper">
            <div>
                <VideoCardExpand {...detailsProps} />
            </div>
            <div>
                <SuggestedVideos />
            </div>
        </div>
    )
}

export default WatchPage
