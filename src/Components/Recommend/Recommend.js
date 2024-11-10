import React, { useEffect, useState } from 'react';
import './Recommend.css';
import { value_converter } from '../../data';
import { Link } from 'react-router-dom';

const Recommend = ({ categoryId }) => {
    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const relatedVideo_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=46&regionCode=US&videoCategoryId=${categoryId}&key=${process.env.REACT_APP_API_KEY}`;

        fetch(relatedVideo_API)
            .then(res => res.json())
            .then(data => {
                if (data.items) {
                    setApiData(data.items);
                } else {
                    console.error("No data found:", data);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, [categoryId]);

    if (loading) {
        return <p>Loading...</p>;
    }
/* Before rendering the recommendations, check if apiData has any items. And I have added error handling and fetch, which resolves the issue that videos on feed does not load  */
    return (
        <div className="recommend">
            {apiData.length > 0 ? (
                apiData.map((item, index) => (
                    <div key={index} className="side-video-list">
                        <Link to={`/video/${item.snippet.categoryId}/${item.id}`} onClick={() => window.scrollTo(0, 0)} className="small-thumbnail">
                            <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
                        </Link>
                        <div className="vid-info">
                            <h4>{item.snippet.title}</h4>
                            <p>{item.snippet.channelTitle}</p>
                            <p className="recommend-views">{value_converter(item.statistics.viewCount)} Views</p>
                        </div>
                    </div>
                ))
            ) : (
                <p>No recommendations available</p>
            )}
        </div>
    );
};

export default Recommend;
