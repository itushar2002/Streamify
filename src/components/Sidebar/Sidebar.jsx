import React from "react";
import "./Sidebar.css";
import HomeIcon from "../../Assets/home.png";
import gameIcon from "../../Assets/game_icon.png";
import automobileIcon from "../../Assets/automobiles.png";
import sportsIcon from "../../Assets/sports.png";
import musicIcon from "../../Assets/music.png";
import newsIcon from "../../Assets/news.png";
import BlogIcon from "../../Assets/blogs.png";
import entertainmentIcon from "../../Assets/entertainment.png";
import TechIcon from "../../Assets/tech.png";
import profileImage from "../../Assets/jack.png";
import megan from "../../Assets/megan.png";

const Sidebar = ({ sidebar, category, setCategory }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="container">
        <div
          className={`links ${category ===0?"active":""}`}
          onClick={() => setCategory(0)}
        >
          <img src={HomeIcon} alt="" />
          <p>Home</p>
        </div>
        <div className={`links ${category ===20?"active":""}`} onClick={() => setCategory(20)}>
          <img src={gameIcon} alt="" />
          <p>Game</p>
        </div>
        <div className={`links ${category ===10?"active":""}`}  onClick={() => setCategory(10)}>
          <img src={musicIcon} alt="" />
          <p>Music</p>
        </div>
        <div className={`links ${category ===17?"active":""}`}  onClick={() => setCategory(17)}>
          <img src={sportsIcon} alt="" />
          <p>Sports</p>
        </div>
        <div className={`links ${category ===2?"active":""}`}  onClick={() => setCategory(2)}>
          <img src={automobileIcon} alt="" />
          <p>Automobiles</p>
        </div>
        <div className={`links ${category ===24?"active":""}`}  onClick={() => setCategory(24)}>
          <img src={entertainmentIcon} alt="" />
          <p>Entertainment</p>
        </div>
        <div className={`links ${category ===28?"active":""}`}  onClick={() => setCategory(28)}>
          <img src={TechIcon} alt="" />
          <p>Technology</p>
        </div>
        <div className={`links ${category ===25?"active":""}`}  onClick={() => setCategory(25)}>
          <img src={newsIcon} alt="" />
          <p>News</p>
        </div>
        <div className={`links ${category ===22?"active":""}`}  onClick={() => setCategory(22)}>
          <img src={BlogIcon} alt="" />
          <p>Blogs</p>
        </div>
        <hr />
      </div>
      <div className="sidebar-bottom">
        <h3>Subscribed</h3>
        <div className="links">
          <img src={profileImage} alt="" />
          <p>Pwediepie</p>
        </div>
        <div className="links">
          <img src={megan} alt="" />
          <p>BeerBiceps</p>
        </div>
        <div className="links">
          <img src={megan} alt="" />
          <p>BeerBiceps</p>
        </div>
        <div className="links">
          <img src={megan} alt="" />
          <p>BeerBiceps</p>
        </div>
        <div className="links">
          <img src={megan} alt="" />
          <p>BeerBiceps</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

