import React from 'react'
import './topbar.css'
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
function Topbar() {
  return (
    <div className='topbar'>
      <div className="topbarWrapper">

        <div className="topLeft">
          <span className='logo'>MAI Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <div className="topIconBadge">2</div>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <div className="topIconBadge">2</div>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="../assets/images/profile.jpg" alt="BS" className="topAvatar" />
        </div>

      </div>
    </div>
  )
}

export default Topbar