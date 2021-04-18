import React from 'react'
import "./WatchPage.css"
import VideoCardExpand from "../VideoCardExpand/VideoCardExpand"

function WatchPage(detailsProps) {
    return (
        <>
            <div>
                <VideoCardExpand {...detailsProps} />
            </div>
        </>
    )
}

export default WatchPage
