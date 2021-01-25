import React, { Component } from "react";
import Detail from "../pages/detail";
import styles from "./mostPopular.module.css";

class MostPopular extends Component {
  constructor() {
    super();
    this.state = { open: false };
  }

  handlerOpen = () => {
    this.setState({
      open: !this.state.open,
    });
    console.log(this.state.open);
    //
  };

  goToDetail = () => {
    this.props.history.push("/detail");
  };
  render() {
    return (
      <ul className={styles.videoCard}>
        <button className={styles.btn} onClick={this.handlerOpen}>
          {this.state.open && <Detail onClick={this.goToDetail} />}
          <img
            className={styles.image}
            src={this.props.videothumbnails}
            alt="thumnails"
          />
          <span className={styles.channel}>{this.props.videoChannel}</span>
          <span className={styles.Title}> {this.props.videoTitle}</span>
        </button>
      </ul>
    );
  }
}

export default MostPopular;
