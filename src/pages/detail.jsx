import React, { useEffect, useState } from "react";
import Nav from "../components/nav/nav";
import VideoList from "../components/video_list/video_list";
import styles from "../pages/detail.module.css";

function Detail({ youtube }) {
  const [videos, setVideos] = useState([]);
  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);

  return (
    <>
      <Nav onSearch={search} />
      <section className={styles.videoBox}>
        <VideoList videos={videos} />
      </section>
    </>
  );
}

export default Detail;
