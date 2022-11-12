import React from 'react'
import {Link} from 'react-router-dom'
import { LineStyle, Timeline, TrendingUp,PersonOutline, AttachMoney, AssessmentOutlined, MailOutline, FeedbackOutlined, MessageOutlined, WorkOutlined, ReportOutlined} from '@material-ui/icons'
import './sidebar.css'
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidbarMenu">
                    <h3 className="sidebarHeading">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItems active"><Link to="/">
                            <LineStyle className='sidebarIcon' />
                            <span className='item-text'>Home</span></Link>
                        </li>
                        <li className="sidebarListItems">
                            <Timeline className='sidebarIcon' />
                            <span className='item-text'>Analytics</span>
                        </li>
                        <li className="sidebarListItems"> 
                            <TrendingUp className='sidebarIcon' />
                            <span className='item-text'>Sales</span>
                        </li>
                    </ul>
                    
                </div>
                <div className="sidbarMenu">
                    <h3 className="sidebarHeading">Quick Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItems"><Link to="/users">
                            <PersonOutline className='sidebarIcon' />
                            <span className='item-text'>Users</span></Link>
                        </li>
                        <li className="sidebarListItems">
                            <Timeline className='sidebarIcon' />
                            <span className='item-text'>Products</span>
                        </li>
                        <li className="sidebarListItems">
                            <AttachMoney className='sidebarIcon' />
                            <span className='item-text'>Transactions</span>
                        </li>
                        <li className="sidebarListItems">
                            <AssessmentOutlined className='sidebarIcon' />
                            <span className='item-text'>Reports</span>
                        </li>
                    </ul>
                    
                </div>
                <div className="sidbarMenu">
                    <h3 className="sidebarHeading">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItems">
                            <MailOutline className='sidebarIcon' />
                            <span className='item-text'>Mail</span>
                        </li>
                        <li className="sidebarListItems">
                            <FeedbackOutlined className='sidebarIcon' />
                            <span className='item-text'>Feedback</span>
                        </li>
                        <li className="sidebarListItems">
                            <MessageOutlined className='sidebarIcon' />
                            <span className='item-text'>Messages</span>
                        </li>
                    </ul>
                    
                </div>
                <div className="sidbarMenu">
                    <h3 className="sidebarHeading">Staffs</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItems">
                            <WorkOutlined className='sidebarIcon' />
                            <span className='item-text'>Manage</span>
                        </li>
                        <li className="sidebarListItems">
                            <Timeline className='sidebarIcon' />
                            <span className='item-text'>Analytics</span>
                        </li>
                        <li className="sidebarListItems">
                            <ReportOutlined className='sidebarIcon' />
                            <span className='item-text'>Reports</span>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </div>
    )
}

export default Sidebar