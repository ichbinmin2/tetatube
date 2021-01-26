import React from "react";
import styles from "../video_item/video_item.module.css";

const VideoItem = ({ videoitem: { snippet } }) => {
  return (
    <li className={styles.itemBox}>
      <div className={styles.item}>
        <img
          className={styles.image}
          src={snippet.thumbnails.medium.url}
          alt="thumnails"
        />
        <div>
          <p className={styles.title}>{snippet.title}</p>
          <p className={styles.channelTitle}>{snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
