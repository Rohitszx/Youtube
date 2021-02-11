import React from 'react';
import "./VideoCard.css";
import {Avatar}  from '@material-ui/core'
function VideoCard({image,title,channel,views,timestamp,channelImage}) {
    return (
        <div className="VideoCard">
            <img className="videoCard_thmb"  src={image} alt=""/>
            <div className="video_info">
                <Avatar className="videoCard_avatar" alt={channel} src={channelImage}/>
                <div className="video_text">
                    <h5>{title}</h5><p>{channel}</p><p>{views} • {timestamp}</p>
                </div>
            </div>
        </div>
    );
}

export default VideoCard
