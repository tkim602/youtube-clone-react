import React from "react";
import Videoplayer from "../../Components/Videoplayer/Videoplayer";
import Recommend from "../../Components/Recommend/Recommend";
import './Video.css';
import { useParams } from "react-router-dom";

const Video = () => {
  const { videoId, categoryId } = useParams();

  return (
    <div className="play-container">
      <Videoplayer videoId={videoId} />
      <Recommend categoryId={categoryId} />
    </div>
  );
};

export default Video;
