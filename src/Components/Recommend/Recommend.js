import React, { useEffect, useState } from 'react';
import './Recommend.css';
import { value_converter } from '../../data';
import { Link } from 'react-router-dom';

const Recommend = ({ categoryId }) => {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        console.log("API Key:", process.env.REACT_APP_API_KEY);

        const relatedVideo_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=46&regionCode=US&videoCategoryId=${categoryId}&key=${process.env.REACT_APP_API_KEY}`;

        fetch(relatedVideo_API)
            .then(res => res.json())
            .then(data => setApiData(data.items));
    }, [categoryId]);

    return (
        <div className="recommend">
            {apiData.map((item, index) => (
                <div key={index} className="side-video-list">
                    <Link to={`/video/${item.snippet.categoryId}/${item.id}`} onClick={() => window.scrollTo(0, 0)} className="small-thumbnail">
                        <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
                    </Link>
                    <div className="vid-info">
                        <h4>{item.snippet.title}</h4>
                        <p>{item.snippet.channelTitle}</p>
                        <p className='recommend-views'>{value_converter(item.statistics.viewCount)} Views</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Recommend;
