import React, { useEffect, useState } from 'react';
import { gapi } from 'gapi-script';
import './Sidebar.css';
import home from '../../assets/home.png';
import game_icon from '../../assets/game_icon.png';
import automobiles from '../../assets/automobiles.png';
import explore from '../../assets/explore.png';
import subscriptions from '../../assets/subscriprion.png';
import sports from '../../assets/sports.png';
import entertainment from '../../assets/entertainment.png';
import tech from '../../assets/tech.png';
import music from '../../assets/music.png';
import blogs from '../../assets/blogs.png';
import news from '../../assets/news.png';
import download from '../../assets/download_icon.jpg';
import shorts from '../../assets/shorts.png';
import watchLater from '../../assets/watchlater.png';
import videos from '../../assets/yourVideos.png';
import liked from '../../assets/likedVideos.png';
import playlists from '../../assets/playlist.png';
import history from '../../assets/history_new.png';
import user1 from '../../assets/user_profile.jpg';
import user2 from '../../assets/user_profile.jpg';
import user3 from '../../assets/user_profile.jpg';
import user4 from '../../assets/user_profile.jpg';
import user5 from '../../assets/user_profile.jpg';

const CLIENT_ID = process.env.REACT_APP_YOUTUBE_CLIENT_ID;
const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';

const Sidebar = ({ sidebar, category, setCategory }) => {
  const [channelId, setChannelId] = useState('');

  useEffect(() => {
    // Load gapi script
    const initializeGapi = () => {
      if (window.gapi) {
        window.gapi.load('client:auth2', start);
      } else {
        console.error("Google API script not loaded.");
      }
    };

    const start = () => {
      gapi.client
        .init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          scope: SCOPES,
        })
        .then(() => {
          return gapi.auth2.getAuthInstance().signIn();
        })
        .then(() => {
          return gapi.client.youtube.channels.list({
            mine: true,
            part: 'id',
          });
        })
        .then((response) => {
          const id = response.result.items[0].id;
          setChannelId(id);
        })
        .catch((error) => {
          console.error("Error fetching channel ID:", error);
        });
    };

    // Delay the initialization to ensure gapi loads correctly
    setTimeout(initializeGapi, 1000);
  }, []);

  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      
      {/* Main Navigation */}
      <div className="shortcut-links">
        <div onClick={() => setCategory(0)} className={`side-link ${category === 0 ? "active" : ""}`}>
          <img src={home} alt="Home" />
          <p>Home</p>
        </div>
        <div onClick={() => setCategory("shorts")} className={`side-link ${category === "shorts" ? "active" : ""}`}>
          <img src={shorts} alt="Shorts" />
          <p>Shorts</p>
        </div>
        <div onClick={() => setCategory("subscriptions")} className={`side-link ${category === "subscriptions" ? "active" : ""}`}>
          <img src={subscriptions} alt="Subscriptions" />
          <p>Subscriptions</p>
        </div>
        <hr />

        {/* You Section with dynamic link to user's channel */}
        <div className="side-section-title">
          {channelId ? (
            <a href={`https://www.youtube.com/channel/${channelId}`} target="_blank" rel="noopener noreferrer" className="you-link">
              You <span>&gt;</span>
            </a>
          ) : (
            'Loading...'
          )}
        </div>
        <div onClick={() => setCategory("history")} className={`side-link ${category === "history" ? "active" : ""}`}>
          <img src={history} alt="History" />
          <p>History</p>
        </div>
        <div onClick={() => setCategory("playlists")} className={`side-link ${category === "playlists" ? "active" : ""}`}>
          <img src={playlists} alt="Playlists" />
          <p>Playlists</p>
        </div>
        <div onClick={() => setCategory("videos")} className={`side-link ${category === "videos" ? "active" : ""}`}>
          <img src={videos} alt="Your Videos" />
          <p>Your Videos</p>
        </div>
        <div onClick={() => setCategory("watch_later")} className={`side-link ${category === "watch_later" ? "active" : ""}`}>
          <img src={watchLater} alt="Watch Later" />
          <p>Watch Later</p>
        </div>
        <div onClick={() => setCategory("liked")} className={`side-link ${category === "liked" ? "active" : ""}`}>
          <img src={liked} alt="Liked Videos" />
          <p>Liked Videos</p>
        </div>
        <div onClick={() => setCategory("downloads")} className={`side-link ${category === "downloads" ? "active" : ""}`}>
          <img src={download} alt="Downloads" />
          <p>Downloads</p>
        </div>
        <hr />

        {/* Explore Section */}
        <div className="side-section-title">Explore</div>
        <div onClick={() => setCategory(20)} className={`side-link ${category === 20 ? "active" : ""}`}>
          <img src={game_icon} alt="Gaming" />
          <p>Gaming</p>
        </div>
        <div onClick={() => setCategory(2)} className={`side-link ${category === 2 ? "active" : ""}`}>
          <img src={automobiles} alt="Automobiles" />
          <p>Automobiles</p>
        </div>
        <div onClick={() => setCategory(17)} className={`side-link ${category === 17 ? "active" : ""}`}>
          <img src={sports} alt="Sports" />
          <p>Sports</p>
        </div>
        <div onClick={() => setCategory(24)} className={`side-link ${category === 24 ? "active" : ""}`}>
          <img src={entertainment} alt="Entertainment" />
          <p>Entertainment</p>
        </div>
        <div onClick={() => setCategory(28)} className={`side-link ${category === 28 ? "active" : ""}`}>
          <img src={tech} alt="Technology" />
          <p>Technology</p>
        </div>
        <div onClick={() => setCategory(10)} className={`side-link ${category === 10 ? "active" : ""}`}>
          <img src={music} alt="Music" />
          <p>Music</p>
        </div>
        <div onClick={() => setCategory(22)} className={`side-link ${category === 22 ? "active" : ""}`}>
          <img src={blogs} alt="Blogs" />
          <p>Blogs</p>
        </div>
        <div onClick={() => setCategory(25)} className={`side-link ${category === 25 ? "active" : ""}`}>
          <img src={news} alt="News" />
          <p>News</p>
        </div>
      </div>

      <hr />

      {/* Subscriptions */}
      <div className="subscribed-list">
        <h3>SUBSCRIPTIONS</h3>
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
