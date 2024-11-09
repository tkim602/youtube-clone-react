import React from 'react';
import './Sidebar.css';
import home from '../../assets/home.png';
import game_icon from '../../assets/game_icon.png';
import automobiles from '../../assets/automobiles.png';
import explore from '../../assets/explore.png';
import subscriprion from '../../assets/subscriprion.png';
import sports from '../../assets/sports.png';
import entertainment from '../../assets/entertainment.png';
import tech from '../../assets/tech.png';
import music from '../../assets/music.png';
import blogs from '../../assets/blogs.png';
import news from '../../assets/news.png';
import user1 from '../../assets/user_profile.jpg';
import user2 from '../../assets/user_profile.jpg';
import user3 from '../../assets/user_profile.jpg';
import user4 from '../../assets/user_profile.jpg';
import user5 from '../../assets/user_profile.jpg';

const Sidebar = ({ sidebar, category, setCategory }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="shortcut-links">
        <div onClick={() => { setCategory(0); }} className={`side-link ${category === 0 ? "active" : ""}`}>
          <img src={home} alt="Home" />
          <p>Home</p>
        </div>
        <div onClick={() => { setCategory(20); }} className={`side-link ${category === 20 ? "active" : ""}`}>
          <img src={game_icon} alt="Gaming" />
          <p>Gaming</p>
        </div>
        <div onClick={() => { setCategory(2); }} className={`side-link ${category === 2 ? "active" : ""}`}>
          <img src={automobiles} alt="Automobiles" />
          <p>Automobiles</p>
        </div>
        <div onClick={() => { setCategory(17); }} className={`side-link ${category === 17 ? "active" : ""}`}>
          <img src={sports} alt="Sports" />
          <p>Sports</p>
        </div>
        <div onClick={() => { setCategory(24); }} className={`side-link ${category === 24 ? "active" : ""}`}>
          <img src={entertainment} alt="Entertainment" />
          <p>Entertainment</p>
        </div>
        <div onClick={() => { setCategory(28); }} className={`side-link ${category === 28 ? "active" : ""}`}>
          <img src={tech} alt="Technology" />
          <p>Technology</p>
        </div>
        <div onClick={() => { setCategory(10); }} className={`side-link ${category === 10 ? "active" : ""}`}>
          <img src={music} alt="Music" />
          <p>Music</p>
        </div>
        <div onClick={() => { setCategory(22); }} className={`side-link ${category === 22 ? "active" : ""}`}>
          <img src={blogs} alt="Blogs" />
          <p>Blogs</p>
        </div>
        <div onClick={() => { setCategory(25); }} className={`side-link ${category === 25 ? "active" : ""}`}>
          <img src={news} alt="News" />
          <p>News</p>
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>SUBSCRIBED</h3>
        <div className="side-link">
          <img src={user1} alt="PewDiePie" />
          <p>PewDiePie</p>
        </div>
        <div className="side-link">
          <img src={user2} alt="MrBeast" />
          <p>MrBeast</p>
        </div>
        <div className="side-link">
          <img src={user3} alt="Justin Bieber" />
          <p>Justin Bieber</p>
        </div>
        <div className="side-link">
          <img src={user4} alt="5-Minute Crafts" />
          <p>5-Minute Crafts</p>
        </div>
        <div className="side-link">
          <img src={user5} alt="Nas Daily" />
          <p>Nas Daily</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
