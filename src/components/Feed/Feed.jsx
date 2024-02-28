import React, { useEffect, useState } from "react";
import "./feed.css";
import { Link } from "react-router-dom";
import { API_KEY } from "../../data/";
import { numconverter } from "../../data/";
import moment from "moment";
const Feed = ({ category }) => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const videolist_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`;
    await fetch(videolist_url)
      .then((response) => response.json())
      .then((data) => setData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, [category]);
  return (
    <div className="feed">
      {data.map((item, index) => {
        return (
          <Link
            to={`video/${item.snippet.categoryId}/${item.id}`}
            key={index}
            className="card"
          >
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>{numconverter(item.statistics.viewCount)}views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>     
          </Link>
        );
      })}
    </div>
  );
};

export default Feed;
