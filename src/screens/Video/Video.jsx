import React from "react";
import "./video.css";
import PlayVideo from "../../components/PlayVideo/PlayVideo";
import SuggestedVideos from "../../components/SuggestedVideos/SuggestedVideos";
import { useParams } from "react-router-dom";
const Video = () => {
  const { videoId, categoryId } = useParams();
  return (
    <div className="play-video-container">
      <PlayVideo videoId={videoId} />
      <SuggestedVideos categoryId={categoryId}/>
    </div>
  );
};

export default Video;
