import React, { Component } from "react";
import Nav from "../components/nav/nav";
import MostPopular from "../components/mostPopular";
import styles from "./main.module.css";

const MOSTAPI =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=24&key=AIzaSyBQO5uEgqO95vZKZU5lJiB2SotT7poyfA4";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      videoCard: [],
    };
  }

  // componentDidMount = () => {
  //   fetch(`${MOSTAPI}`, {
  //     method: "GET",
  //     redirect: "follow",
  //   })
  //     .then((res) => res.json())

  //     .then((res) => {
  //       const mappingArray = res.items.map((item) => {
  //         return item.snippet;
  //       });
  //       this.setState({
  //         videoCard: mappingArray,
  //       });
  //     })
  //     .then((res) => console.log("데이터 전송 완료"))
  //     .catch((error) => console.log("error", error));
  // };

  render() {
    const { videoCard } = this.state;
    return (
      <section className={styles.main}>
        <Nav />
        <div className={styles.boxList}>
          <div className={styles.box}>
            {videoCard.map((videoBox, idx) => {
              return (
                <MostPopular
                  key={idx}
                  id={videoBox.categoryId}
                  videoCard={videoBox}
                  videoTitle={videoBox.title}
                  videoInfo={videoBox.description}
                  videothumbnails={videoBox.thumbnails.medium.url}
                  videoChannel={videoBox.channelTitle}
                />
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Main;
