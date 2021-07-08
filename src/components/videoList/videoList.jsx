import React from "react";
import VideoItem from "../videoItem/videoItem";
import styles from "../videoList/videoList.module.css";

const VideoList = ({ videos, onVideoClick }) => (
  <ul className={styles.box}>
    {videos.map((video) => (
      <VideoItem key={video.id} video={video} onVideoClick={onVideoClick} />
    ))}
  </ul>
);

export default VideoList;
