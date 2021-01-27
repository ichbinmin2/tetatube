import React from "react";
import ReactDOM from "react-dom";
import Main from "./pages/main";
import Youtube from "./service/youtube";
import "./index.css";
import "./styles/reset.css";

const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);
ReactDOM.render(
  <React.StrictMode>
    <Main youtube={youtube} />
  </React.StrictMode>,
  document.getElementById("root")
);
