import React, { useEffect, useState } from 'react';
import './Feed.css';
import { Link } from 'react-router-dom';
import { value_converter } from '../../data';
import moment from 'moment';

const Feed = ({ category }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${process.env.REACT_APP_API_KEY}`;
        try {
            const response = await fetch(videoList_url);
            const result = await response.json();

            if (result && result.items) {
                setData(result.items);
                setLoading(false);
            } else {
                console.error("Failed to fetch data:", result);
                setData([]);
                setLoading(false);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            setData([]);
            setLoading(false);
        }
    };

    useEffect(() => {
        setLoading(true); 
        fetchData();
    }, [category]);

    return (
        <div className='feed'>
            {loading ? (
                <p>Loading...</p>
            ) : data.length > 0 ? (
                data.map((item, index) => (
                    <Link key={index} to={`video/${item.snippet.categoryId}/${item.id}`} className="card">
                        <img src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
                        <h2>{item.snippet.title}</h2>
                        <h3>{item.snippet.channelTitle}</h3>
                        <p>
                            {value_converter(item.statistics.viewCount)} Views &bull;
                            {' ' + moment(item.snippet.publishedAt).fromNow()}
                        </p>
                    </Link>
                ))
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
};

export default Feed;
