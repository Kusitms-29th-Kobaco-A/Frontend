/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from "styled-components";
import YouTube, { YouTubeProps } from "react-youtube";

const EachVideo = ({ videoInfo }: any) => {
  const url = videoInfo.videoUrl;
  const extractVideoId = (url: string): string | undefined => {
    const urlObj = new URL(url);
    return urlObj.pathname.substring(1);
  };

  const videoId = extractVideoId(url);

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "135",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      rel: 0,
      modestbranding: 1,
    },
  };

  return (
    <TotalComponent>
      <VideoFrame>
        <YouTube
          // https://youtu.be/NFcp_8np3e8
          //videoId : https://www.youtube.com/watch?v={videoId} 유튜브 링크의 끝부분에 있는 고유한 아이디
          videoId={videoId}
          //opts(옵션들): 플레이어의 크기나 다양한 플레이어 매개 변수를 사용할 수 있음.
          //밑에서 더 설명하겠습니다.
          opts={opts}
          //이벤트 리스너
          onReady={onPlayerReady}
        />
        <VideoTime>{videoInfo.videoTime}</VideoTime>
      </VideoFrame>
      <KeywordComponent>
        {videoInfo.keyword?.map((item: any) => {
          return <EachKeyword>#{item}</EachKeyword>;
        })}
      </KeywordComponent>
      <VideoTitle>{videoInfo.videoTitle}</VideoTitle>
    </TotalComponent>
  );
};

export default EachVideo;

const TotalComponent = styled.div`
  width: 100%;
  height: 241px;
`;

const VideoFrame = styled.div`
  position: relative;
  width: 100%;
  height: 135px;
  border-radius: 10px;
  background: #d9d9d9;
  overflow: hidden;
`;

const VideoTime = styled.div`
  text-align: center;
  position: absolute;
  bottom: 7px;
  right: 10px;
  width: 34px;
  height: 15px;
  flex-shrink: 0;
  border-radius: 4px;
  background: var(--Black-1, #171719);
  color: var(--White-1, #fff);
  font-family: "Noto Sans KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 350;
  /* line-height: 140%; 16.8px */
  letter-spacing: -0.4px;
`;

const KeywordComponent = styled.div`
  margin: 10px 0px 0px 4px;
  display: flex;
`;

const EachKeyword = styled.div`
  display: inline-flex;
  padding: 3px 10px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 20px;
  background: var(--Sub-2, #ffecee);
  color: var(--Main-1, #d33b4d);
  text-align: center;

  font-family: "Noto Sans KR";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.4px;
  margin-left: 6px;
`;

const VideoTitle = styled.div`
  margin: 8px 0px 0px 10px;
  color: var(--Gray-9, #27272e);
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal; /* nowrap을 normal로 변경하여 텍스트가 래핑될 수 있도록 함 */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* 2줄로 제한 */
  width: 17vw;
`;
