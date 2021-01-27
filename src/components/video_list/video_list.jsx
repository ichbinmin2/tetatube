import React from "react";
import VideoItem from "../video_item/video_item";
import styles from "../video_list/video_list.module.css";

const VideoList = ({ videos, onVideoClick }) => (
  <ul className={styles.box}>
    {videos.map((video) => (
      <VideoItem key={video.id} video={video} onVideoClick={onVideoClick} />
    ))}
  </ul>
);

export default VideoList;
