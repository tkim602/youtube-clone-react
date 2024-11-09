import React, { useEffect, useState } from 'react';
import './Videoplayer.css';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import { value_converter } from '../../data';
import moment from 'moment';

const Videoplayer = ({ videoId }) => {

    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentData, setCommentData] = useState([]);

    const fetchVideoData = async () => {
        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${process.env.REACT_APP_API_KEY}&id=${videoId}`;
        await fetch(videoDetails_url).then(res => res.json()).then(data => setApiData(data.items[0]));
    };

    const fetchOtherData = async () => {
        const channelLogo_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${process.env.REACT_APP_API_KEY}`;
        await fetch(channelLogo_url).then(res => res.json()).then(data => setChannelData(data.items[0]));

        const videoComment_url = `https://www.googleapis.com/youtube/v3/commentThreads?textFormat=plainText&part=snippet&maxResults=50&key=${process.env.REACT_APP_API_KEY}&videoId=${videoId}`;
        await fetch(videoComment_url).then(res => res.json()).then(data => setCommentData(data.items));
    };

    useEffect(() => {
        fetchVideoData();
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (apiData) fetchOtherData();
    }, [apiData]);

    return (
        <div className="play-video">
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
            <h3>{apiData ? apiData.snippet.title : "Title Here"}</h3>
            <div className="play-video-info">
                <p>{apiData ? value_converter(apiData.statistics.viewCount) : 1525} Views  &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : "2 days ago"}</p>
                <div>
                    <span><img src={like} alt="" />{apiData ? value_converter(apiData.statistics.likeCount) : 125}</span>
                    <span><img src={dislike} alt="" />2</span>
                    <span><img src={share} alt="" />Share</span>
                    <span><img src={save} alt="" />Save</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={channelData ? channelData.snippet.thumbnails.default.url : ""} alt="" />
                <div>
                    <p>{apiData ? apiData.snippet.channelTitle : ""}</p>
                    <span>{channelData ? value_converter(channelData.statistics.subscriberCount) : "1M"} Subscribers</span>
                </div>
                <button type="button">Subscribe</button>
            </div>
            <div className="vid-description">
                <p>{apiData ? apiData.snippet.description.slice(0, 250) : "Description Here"}</p>
                <hr />
                <h4>{apiData ? value_converter(apiData.statistics.commentCount) : 130} Comments</h4>

                {commentData.map((item, index) => (
                    <div key={index} className="comment">
                        <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                        <div>
                            <h3>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></h3>
                            <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                            <div className="comment-action">
                                <img src={like} alt="" />
                                <span>{item.snippet.topLevelComment.snippet.likeCount}</span>
                                <img src={dislike} alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Videoplayer;
