import React, { useEffect, useState } from "react";
import "./SuggestedVideo.css";
import { API_KEY } from "../../data/";
import { numconverter } from "../../data/";
import { Link } from "react-router-dom";
const SuggestedVideos = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);
  const fetchData = async () => {
    const suggestedVideos_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`;
    await fetch(suggestedVideos_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="suggestedVideo">
      {apiData.map((item, index) => {
        return (
          <Link style={{textDecoration:"none", color: "black"}}
            to={`/video/${index.categoryId}/${item.id}`}
            key={index}
            className="suggested-video-list"
          >
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="video-details">
              <h4>{item.snippet.title}</h4>
              <p>{item.snippet.channelTitle}</p>
              <p>{numconverter(item.statistics.viewCount)}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SuggestedVideos;
