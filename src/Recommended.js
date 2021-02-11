import React from 'react';
import "./Recommended.css";
import VideoCard from "./VideoCard";
function Recommended() {
    return (
        <div className="recommended">
            <h2>Recommended</h2>
            <div className="recommended_videos">
                <VideoCard
                title="All About Google HashCode"
                views="2.3M Views"
                timestamp="2days ago"
                channelImage="###"
                channel="Rohit Singh"
                image="https://ytbassets.s3.ap-south-1.amazonaws.com/Thmb1.jpg"
                />
                <VideoCard
                title="All About Google HashCode"
                views="2.3M Views"
                timestamp="2days ago"
                channelImage="###"
                channel="Rohit Singh"
                image="https://ytbassets.s3.ap-south-1.amazonaws.com/Thmb2.jpg"
                />
                <VideoCard
                title="All About Google HashCode"
                views="2.3M Views"
                timestamp="2days ago"
                channelImage="###"
                channel="Rohit Singh"
                image="https://ytbassets.s3.ap-south-1.amazonaws.com/Thmb3.jpg"
                />
                <VideoCard
                title="All About Google HashCode"
                views="2.3M Views"
                timestamp="2days ago"
                channelImage="###"
                channel="Rohit Singh"
                image="https://ytbassets.s3.ap-south-1.amazonaws.com/Thmb4.jpg"
                />
                <VideoCard
                title="All About Google HashCode"
                views="2.3M Views"
                timestamp="2days ago"
                channelImage="###"
                channel="Rohit Singh"
                image="https://ytbassets.s3.ap-south-1.amazonaws.com/Thmb5.jpg"
                />
                <VideoCard
                title="All About Google HashCode"
                views="2.3M Views"
                timestamp="2days ago"
                channelImage="###"
                channel="Rohit Singh"
                image="https://ytbassets.s3.ap-south-1.amazonaws.com/Thmb6.jpg"
                />
            </div>
        </div>
    )
}

export default Recommended
