import React from 'react'
import './Topbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';

function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <Link to='/' className='link'>
                        <span className='logo'>admin</span>
                    </Link>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNoneIcon />
                        <span className='topIcanBadge'>2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <LanguageIcon />
                        <span className='topIcanBadge'>2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <SettingsIcon />
                    </div>

                    <img src="https://randomuser.me/api/portraits/women/22.jpg" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}

export default Topbar