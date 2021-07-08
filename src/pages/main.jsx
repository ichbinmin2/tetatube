import React, { useEffect, useState } from "react";
import Nav from "../components/nav/nav";
import VideoList from "../components/videoList/videoList";
import VideoDetail from "../components/videoDetail/videoetail";
import styles from "../pages/main.module.css";
import "../styles/reset.css";

function Main({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [open, setOpen] = useState(false);

  const handlerModal = (event) => {
    setOpen(!open);
  };

  const selectVideo = (video) => {
    setSelectedVideo(video);
    handlerModal();
  };

  const resetVideo = () => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  };

  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <div className={styles.app}>
      <Nav onSearch={search} resetVideo={resetVideo} />
      {open && selectedVideo ? (
        <div className={styles.detail}>
          <VideoDetail video={selectedVideo} modal={handlerModal} />
        </div>
      ) : null}
      <div className={styles.flex}>
        <section className={styles.content}>
          <div className={styles.videoBox}>
            <VideoList videos={videos} onVideoClick={selectVideo} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Main;
