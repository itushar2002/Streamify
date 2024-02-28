import React, { useEffect, useState } from "react";
import "./playvideo.css";
import like from "../../Assets/like.png";
import dislike from "../../Assets/dislike.png";
import save from "../../Assets/save.png";
import share from "../../Assets/share.png";
import user_profile from "../../Assets/user_profile.jpg";
import { API_KEY } from "../../data/";
import { numconverter } from "../../data/";
import { useParams } from "react-router-dom";
const PlayVideo = () => {
  const { videoId } = useParams();
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
 /*  const [commentData, setCommentData] = useState(null); */
  const fetchVideoData = async () => {
    // video ka data fetch karne ke liye video page ke liye
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;

    await fetch(videoDetails_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items[0]));
  };

  const fetchchannelData = async () => {
    // to fetch channel data
    const channelDetails_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY} 
    `;
    await fetch(channelDetails_url)
      .then((res) => res.json())
      .then((data) => setChannelData(data.items[0]));
  };

 /*  const fetchcommentData = async () => {
    // to fetch channel data
    const commentData_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`;
    await fetch(commentData_url)
      .then((res) => res.json())
      .then((data) => setCommentData(data.items));
  }; */
  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    fetchchannelData();
  }, [apiData]);

/*   useEffect(() => {
    fetchcommentData();
  }, [commentData]); */
  return (
    <div className="play-video">
      {/* <video src={video1} controls autoPlay muted></video> */}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <h3>{apiData ? apiData.snippet.title : "title here"}</h3>
      <div className="play-video-info">
        <p>
          {apiData ? numconverter(apiData.statistics.viewCount) : "15k views"}
        </p>
        <div>
          <span>
            <img src={like} alt="" />
            {apiData ? numconverter(apiData.statistics.likeCount) : "15k likes"}
          </span>
          <span>
            <img src={dislike} alt="" />
            {apiData
              ? numconverter(apiData.statistics.dislikeCount)
              : "15k likes"}
          </span>
          <span>
            <img src={share} alt="" />
            share
          </span>
          <span>
            <img src={save} alt="" />
            save
          </span>
        </div>
      </div>
      <hr />
      <div className="owner">
        <img
          src={channelData ? channelData.snippet.thumbnails.default.url : ""}
          alt=""
        />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : "Channel title here"}</p>
          <span>
            {channelData
              ? numconverter(channelData.statistics.subscriberCount)
              : "1M"}
            Subscribers
          </span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="video-dets">
        <p>
          {apiData
            ? apiData.snippet.description.slice(0, 400)
            : "description here"}
        </p>
        <hr />
        <h4>
          {apiData
            ? numconverter(apiData.statistics.commentCount)
            : "2k comments"}{" "}
          Comments
        </h4>

            <div  className="comment-section">
              <img src={user_profile} alt="" />
              <div>
                <h3>
                  username<span>a day ago</span>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium explicabo repudiandae culpa ullam in, neque natus velit eligendi quam consequatur.</p>
                </h3>
              </div>
        </div>
        <div  className="comment-section">
              <img src={user_profile} alt="" />
              <div>
                <h3>
                  username<span>a day ago</span>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium explicabo repudiandae culpa ullam in, neque natus velit eligendi quam consequatur.</p>
                </h3>
              </div>
        </div>
        <div  className="comment-section">
              <img src={user_profile} alt="" />
              <div>
                <h3>
                  username<span>a day ago</span>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium explicabo repudiandae culpa ullam in, neque natus velit eligendi quam consequatur.</p>
                </h3>
              </div>
        </div>
        <div  className="comment-section">
              <img src={user_profile} alt="" />
              <div>
                <h3>
                  username<span>a day ago</span>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium explicabo repudiandae culpa ullam in, neque natus velit eligendi quam consequatur.</p>
                </h3>
              </div>
        </div>
        <div  className="comment-section">
              <img src={user_profile} alt="" />
              <div>
                <h3>
                  username<span>a day ago</span>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium explicabo repudiandae culpa ullam in, neque natus velit eligendi quam consequatur.</p>
                </h3>
              </div>
        </div>
        <div  className="comment-section">
              <img src={user_profile} alt="" />
              <div>
                <h3>
                  username<span>a day ago</span>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium explicabo repudiandae culpa ullam in, neque natus velit eligendi quam consequatur.</p>
                </h3>
              </div>
            </div>
      </div>
    </div>
  );
};
export default PlayVideo;
