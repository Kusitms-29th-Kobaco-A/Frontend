/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// 오른쪽 추천영상 컴포넌트
const SideBar = ({ advertiseId }: any) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // 추천 영상 받는 변수
  const [otherVideos, setOtherVideos] = useState<any>([]);
  // 추천영상리스트 받기 api
  const getOtherVideos = useCallback(async () => {
    try {
      await axios
        .get(
          `https://dev.simproject.kr/api/advertises/${advertiseId}/recommend?page=0&size=14`,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
          setOtherVideos(res.data.content);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getOtherVideos();
  }, [getOtherVideos]);

  return (
    <OtherInfoComponent>
      <RecommendVideosText>추천 영상</RecommendVideosText>

      {otherVideos?.map((item: any) => {
        // 비디오 고유 아이디 추출하기
        const url = item.videoUrl;
        const extractVideoId = (url: string): string | undefined => {
          const urlObj = new URL(url);
          const videoID = urlObj.searchParams.get("v");
          return videoID || undefined; // 'null' 대신 'undefined' 반환
        };
        const videoId = extractVideoId(url);
        // YouTube 썸네일 URL 생성
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;
        return (
          <TotalVideoComponent>
            {/* 해당 영상 비디오 부분 */}
            <VideoFrame
              onClick={() => {
                navigate(`/archive/detail/${item.advertiseId}`, {
                  state: {
                    menuState: "archive",
                    videoInfo: item,
                  },
                });
              }}
            >
              <ThumnailImg src={thumbnailUrl} alt="thumnail" />
              <VideoTime>{item.videoTime}</VideoTime>
            </VideoFrame>

            {/* 제목 부분 */}
            <VideoTitle>{item.title}</VideoTitle>
          </TotalVideoComponent>
        );
      })}
    </OtherInfoComponent>
  );
};

export default SideBar;

const OtherInfoComponent = styled.div`
  margin-left: 2.008vw;
  width: 26.305vw;
  height: 100%;
`;

// 최상단 텍스트
const RecommendVideosText = styled.div`
  color: var(--Gray-9, #27272e);
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.4px;
`;

// 하나의 비디오 전체 부분
const TotalVideoComponent = styled.div`
  margin: 10px 0px 0px 0px;
  display: flex;
  width: 262px;
  height: 82px;
`;

// 비디오의 영상 부분
const VideoFrame = styled.div`
  position: relative;
  width: 136px;
  height: 82px;
  border-radius: 6px;
  background: #d9d9d9;
  overflow: hidden;
`;
const VideoTime = styled.div`
  color: var(--White-1, #fff);
  font-family: "Noto Sans KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 350;
  line-height: 140%;
  letter-spacing: -0.4px;
  text-align: center;
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 51px;
  height: 15px;
  flex-shrink: 0;
  border-radius: 3px;
  background: var(--Black-1, #171719);
  color: var(--White-1, #fff);
  font-family: "Noto Sans KR";
  font-size: 12px;
  font-style: normal;
  font-weight: 350;
  letter-spacing: -0.4px;
`;
const ThumnailImg = styled.img`
  width: 100%;
  height: 100%;
`;

//제목 부분
const VideoTitle = styled.div`
  margin: 0px 0px 0px 8px;
  width: 118px;
  color: var(--Gray-9, #27272e);
  font-family: "Noto Sans KR";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.4px;
`;
