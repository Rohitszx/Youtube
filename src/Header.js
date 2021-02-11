import React from 'react'
import './header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <MenuIcon/>
                <img className="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt=""></img> 
            </div>
            <div className="header_input">
                <input type="text" placeholder="Search" /><SearchIcon class="header_inputButton"/>
            </div>
            <div className="header_icons">
                <VideoCallIcon className="header_icon"/>
                <AppsIcon className="header_icon"/>
                <NotificationsIcon className="header_icon"/>
                <Avatar alt="Rohit Singh" src="https://ytbassets.s3.ap-south-1.amazonaws.com/avtr.jpg"/>
            </div>
        </div>
        
    )
}

export default Header
