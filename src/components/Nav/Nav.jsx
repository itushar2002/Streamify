import React from "react";
import "./Nav.css";
import menuIcon from "../../Assets/menu.png";
import SearchIcon from "../../Assets/search.png";
import uploadIcon from "../../Assets/upload.png";
import moreIcon from "../../Assets/more.png";
import notificationIcon from "../../Assets/notification.png";
import userIcon from "../../Assets/user_profile.jpg";
import { Link } from "react-router-dom";
const Nav = ({ setsidebar }) => {
  return (
    <nav className=" flex-div nav-bar">
      <div className="nav-left flex-div">
        <img
          className="menu-icon"
          onClick={() => setsidebar((prev) => (prev === false ? true : false))}
          src={menuIcon}
          alt="logo"
        />
        <Link style={{textDecoration:"none", color: "black"}} to='/'>
          <h1 className="logo">STREAMIFY</h1>
        </Link>
      </div>
      <div className="nav-middle flex-div">
        <div className="searchbox flex-div">
          <input type="text" placeholder="Search" name="" id="" />
          <img src={SearchIcon} alt="" />
        </div>
      </div>
      <div className="nav-right flex-div">
        <img src={uploadIcon} alt="" />
        <img src={moreIcon} alt="" />
        <img src={notificationIcon} alt="" />
        <img src={userIcon} className="user-icon" alt="" />
      </div>
    </nav>
  );
};

export default Nav;
