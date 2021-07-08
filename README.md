## 👩🏻‍💻 Toy Project : Tetatube 

### ▪️ 프로젝트 소개
> 동영상 스트리밍 서비스를 제공하는 **YouTube** 사이트를 기획과 디자인을 제외하고 주요 기능만을 구현한 clone 프로젝트입니다. youtube의 API를 활용하여 영상 스트리밍 페이지의 기능을 구현했습니다.

### ▪️ 프로젝트 개요
+ [tetatube 사이트 바로가기](https://ichbinmin2.github.io/tetatube/)
+ [velog 프로젝트 회고](https://velog.io/@ichbinmin2/Tetatube-Project)

### ▪️ 기술 스택
+ ReactJS / React-Hooks / PostCss
+ Axios 라이브러리 
+ JavaScript(ES6) / HTML

### ▪️ 프로젝트 기간
+ 2021.01.18 ~ 2021.02.01

### ▪️ 진행 도구
+ Notion (프로젝트 기능 구현 계획과 일정 관리) 
![스크린샷 2021-02-02 오후 5 06 42](https://user-images.githubusercontent.com/53133662/106570320-10121200-6579-11eb-90c7-7d79e4ba3885.png)
![스크린샷 2021-02-02 오후 5 01 30](https://user-images.githubusercontent.com/53133662/106569772-51ee8880-6578-11eb-9092-f17871035a2f.png)
+ Git + [GitHub](https://github.com/ichbinmin2/tetatube)
+ Postman (API data 관리)

### ▪️ 구현한 기능 
+ 기존의 디자인을 바탕으로 Component 설계
+ PostCSS를 이용한 효율적인 웹 디자인 구현
+ Youtube API와 Map method를 이용한 data render
+ 검색 결과에 따른 data render 기능 구현
+ Axios 라이브러리와 Dependency Injection을 통한 효율적인 API 관리
+ 각각의 component에 따른 Modal 구현
+ 반응형 웹페이지 구현


### ▪️ 구현 기능  영상 
#### 1) Main Page(YouTube Most Popular Videos API)
- Most Popular Videos API와 Map method를 이용한 자동 Data render
![ANB773](https://user-images.githubusercontent.com/53133662/124849283-6e846600-dfd9-11eb-9ef9-ca11366c09f3.gif)
- 현재 Youtube에서 스트리밍 되는 영상 중 사용자들이 가장 많이 보는 영상을 확인할 수 있는 메인 페이지입니다.
- Youtube 서비스 API 만 받아오는 `class` 를 만들어서, `mostPopular` 함수로 `mostPopular` API를 담아 관리하였고, `useEffect` 함수를 사용하여 해당 youtube API를 받아올 때마다 자동으로 렌더될 수 있도록 하였습니다.


#### 2) Search Page(YouTube Search Videos API)
- 검색 결과에 따른 Search Videos API data render 기능 구현
![K1PkkM](https://user-images.githubusercontent.com/53133662/124849294-70e6c000-dfd9-11eb-8f5a-ace582c81e6e.gif)
- 현재 Youtube에서 스트리밍 되는 영상 중 검색에 따라 해당하는 결과를 확인할 수 있는 검색 페이지입니다.
- Youtube 서비스 API 만 받아오는 `class` 를 만들어서, `search` 함수로 **search video API**를 담아 관리하였습니다.
- input 창에서 검색어를 입력한 뒤 엔터를 치면, `useRef`로 연결한 `input`에서 `value` 값을 받아온 뒤, 해당 검색 서비스인 `search` 함수에서 검색어(`value`) 값을 쿼리 인자로 받아 완성된 API로 결과 페이지를 렌더하도록 하였습니다.
- 검색 기능이 실행되면, 해당 `input`의 `value` 값은 빈 값(`""`)으로 초기화됩니다.


#### 3) Modal 구현
![스크린샷 2021-02-01 오후 9 20 30](https://user-images.githubusercontent.com/53133662/106458496-d2a77900-64d3-11eb-9f7a-107346a89caf.png)
- 영상을 클릭하면 모달로 영상의 상세 페이지를 확인할 수 있습니다.
- 조건식과 이벤트 함수를 통해서 상위 컴포넌트에서 `props`로 받아온 `video`와 `id` 값을 이용한 modal이 구현됩니다.
- 모달의 `x` 버튼을 누르거나, 배경을 클릭하면 `onClick` 이벤트 함수로 `state`가 변경되어 모달창이 사라집니다.

#### 4) 메인 페이지로 이동하기
![P70p91](https://user-images.githubusercontent.com/53133662/124848813-90c9b400-dfd8-11eb-864d-c84f147574e2.gif)


#### 5) 반응형 css 구현
![ezgif com-gif-maker_(1)](https://user-images.githubusercontent.com/53133662/124849569-f9656080-dfd9-11eb-8666-c2fbfdc4fe27.gif)

@media screen 을 이용하여 반응형 사이트를 구현했습니다.

### ◼️ 기억에 남는 코드
#### Axios 라이브러리 와 Dependency Injection을 통한 API 보안 관리
최상위에서 .env(환경파일)을 만든 뒤에 API KEY 를 담아 변수 선언 해주고 가장 최상위 파일인 index.js에 axios.create 명령어를 사용하여 params의 오브젝트 key를 process.env.REACT_APP_YOUTUBE_API_KEY 로 값을 설정해주었습니다. 

<pre><code>{

import React from "react";
import ReactDOM from "react-dom";
import Main from "./pages/main";
import Youtube from "./service/youtube";
import axios from "axios";
import "./index.css";

const httpClient = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
});

const youtube = new Youtube(httpClient);
ReactDOM.render(
  <React.StrictMode>
    <Main youtube={youtube} />
  </React.StrictMode>,
  document.getElementById("root")
);
}</code></pre>

![image](https://user-images.githubusercontent.com/53133662/124847966-e3a26c00-dfd6-11eb-85fe-7c049fb70d5c.png)

Youtube 서비스 통신 API 만 받아오는 class js 파일을 만든 후, 서비스 기능에 맞는 함수에 각각 API를 담아 관리하였고, 해당 API가 필요한 컴포넌트에서 해당 함수를 받아오는 방식으로 구현하였습니다.

<pre><code>{
class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  async mostPopular() {
    const response = await this.youtube.get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 24,
      },
    });
    return response.data.items.map((item) => ({
      ...item,
      id: item.id,
    }));
  }

  async search(query) {
    const response = await this.youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 24,
        type: "video",
        q: query,
      },
    });
    return response.data.items.map((item) => ({
      ...item,
      id: item.id.videoId,
    }));
  }
}

export default Youtube;
}</code></pre>

