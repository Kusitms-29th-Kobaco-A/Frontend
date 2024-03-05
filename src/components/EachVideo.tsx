/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from "styled-components";
import YouTube, { YouTubeProps } from "react-youtube";
import YouTubeThumbnail from "./YoutubeThumnail";
import { useNavigate } from "react-router-dom";
import brandingImg from "../assets/archive/Branding.svg";

// 비디오 정보 받기
const EachVideo = ({ sector, videoInfo }: any) => {
  const navigate = useNavigate();

  // 비디오 고유 아이디 추출하기
  const url = videoInfo.videoUrl;
  const extractVideoId = (url: string): string | undefined => {
    const urlObj = new URL(url);
    return urlObj.pathname.substring(1);
  };
  const videoId = extractVideoId(url);

  // const onPlayerReady: YouTubeProps["onReady"] = (event) => {
  //   event.target.pauseVideo();
  // };

  // const opts: YouTubeProps["opts"] = {
  //   height: "135",
  //   width: "100%",
  //   playerVars: {
  //     autoplay: 0,
  //     rel: 0,
  //     modestbranding: 1,
  //   },
  // };

  return (
    <TotalComponent>
      <VideoFrame
        onClick={() => {
          navigate(`/archive/detail/${videoInfo.advertiseId}`, {
            state: {
              menuState: "archive",
              videoInfo: videoInfo,
            },
          });
        }}
      >
        <YouTubeThumbnail videoId={videoId} />
        {/* <YouTube
          // https://youtu.be/NFcp_8np3e8 //마지막 슬래쉬 뒤에 있는 것이 id이다.
          videoId={videoId}
          //opts(옵션들): 플레이어의 크기나 다양한 플레이어 매개 변수를 사용할 수 있음.
          opts={opts}
          //이벤트 리스너
          onReady={onPlayerReady}
        /> */}
        <VideoTime>{videoInfo.videoTime}</VideoTime>
      </VideoFrame>
      <KeywordComponent>
        {videoInfo.keywordList?.map((item: any) => {
          return <EachKeyword>#{item}</EachKeyword>;
        })}
      </KeywordComponent>
      {sector === "trend" && (
        <BrandingRowComponent>
          <BrandingImgBox src={brandingImg} alt="brand" />
          <VideoTrendType>{videoInfo.trendTitle}</VideoTrendType>
        </BrandingRowComponent>
      )}
      {sector === "trend" ? (
        <VideoTitle style={{ margin: "4px 0px 0px 10px" }}>
          {videoInfo.title}
        </VideoTitle>
      ) : (
        <VideoTitle>{videoInfo.title}</VideoTitle>
      )}
    </TotalComponent>
  );
};

export default EachVideo;

const TotalComponent = styled.div`
  width: 100%;
  height: 277px;
`;

// 비디오 부분
const VideoFrame = styled.div`
  position: relative;
  width: 100%;
  height: 10.546875vw;
  min-height: 135px;
  border-radius: 10px;
  background: #d9d9d9;
  overflow: hidden;
`;

const VideoTime = styled.div`
  text-align: center;
  position: absolute;
  bottom: 7px;
  right: 10px;
  width: 50px;
  height: 15px;
  flex-shrink: 0;
  border-radius: 4px;
  background: var(--Black-1, #171719);
  color: var(--White-1, #fff);
  font-family: "Noto Sans KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 350;
  letter-spacing: -0.4px;
`;

// 아래 비디오 설명 부분
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
  line-height: 140%;
  letter-spacing: -0.4px;
  margin-left: 6px;
`;

const BrandingRowComponent = styled.div`
  margin: 11px 0px 0px 10px;
  display: flex;
  align-items: center;
`;

const BrandingImgBox = styled.img`
  width: 27px;
  height: 27px;
  flex-shrink: 0;
`;

const VideoTrendType = styled.div`
  color: #27272e;
  margin: 0px 0px 0px 9px;
  /* Body/5 */
  font-family: "Noto Sans KR";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.4px;
`;

// 영상 제목 이름 두줄로 표시하고 넘을 때 ...으러 표시
const VideoTitle = styled.div`
  margin: 8px 0px 0px 10px;
  color: var(--Gray-9, #27272e);
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.4px;
  overflow: hidden;
  text-overflow: ellipsis;
  /* nowrap을 normal로 변경하여 텍스트가 래핑될 수 있도록 함 */
  white-space: normal;

  /* 두줄로 표시 시 아래와 같은 -webkit-box가 있어야함 */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  width: 17vw;
`;
