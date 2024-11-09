import React from 'react';
import './Navbar.css';
import menu_icon from '../../assets/menu.png';
import logo from '../../assets/logo.png';
import search_icon from '../../assets/search.png';
import upload_icon from '../../assets/upload.png';
import more_icon from '../../assets/more.png';
import notification_icon from '../../assets/notification.png';
import user1 from '../../assets/user_profile.jpg';
import { Link } from 'react-router-dom';

const Navbar = ({ setSidebar }) => {

    const sidebar_toggle = () => {
        setSidebar((prev) => !prev);
    };

    return (
        <nav className='flex-div'>
            <div className="nav-left flex-div">
                <img src={menu_icon} alt="Menu" className="menu-icon" onClick={sidebar_toggle} />
                <Link to='/'> <img src={logo} alt="Logo" className="logo" /></Link>
            </div>
            <div className="nav-middle flex-div">
                <div className="search-box flex-div">
                    <input type="text" placeholder="Search" />
                    <img src={search_icon} alt="Search" />
                </div>
            </div>
            <div className="nav-right flex-div">
                <img src={upload_icon} alt="Upload" />
                <img src={more_icon} alt="More" />
                <img src={notification_icon} alt="Notifications" />
                <img src={user1} alt="User" className="user-icon" />
            </div>
        </nav>
    );
};

export default Navbar;
