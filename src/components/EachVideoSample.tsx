/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import SamepleVideo from '../assets/archive/cocacola.mp4';

// 샘플 비디오 보여주는 컴포넌트
const EachVideoSample = () => {
  const navigate = useNavigate();

  // 비디오 정보 설정
  const [videoInfo] = useState({
    videoUrl: SamepleVideo,
    keywordList: ['식품/외식업', '탄산음료', '유머있는'],
    advertiseId: 100,
    videoTime: '00:00:23',
    title: '[#코카콜라] 맛있는 걸 선택해! 코카-코라 제로!',
  });

  // 마지막 두개 키워드 설정
  const [lastTwoKeywords, setLastTwoKeywords] = useState<string[]>([]);

  useEffect(() => {
    // keywordList의 길이가 2 이상인 경우, 배열의 뒤에서부터 두 개의 요소를 추출합니다.
    if (videoInfo.keywordList.length >= 2) {
      const extractedKeywords = videoInfo.keywordList.slice(-2);
      setLastTwoKeywords(extractedKeywords);
    } else {
      // keywordList의 길이가 2 미만인 경우, 전체 배열을 사용합니다.
      setLastTwoKeywords(videoInfo.keywordList);
    }
  }, [videoInfo]);

  return (
    <TotalComponent>
      {/* 전체 비디오 영상 부분 */}
      <VideoFrame
        onClick={() => {
          navigate(`/archive/detail/sample`, {
            state: {
              menuState: 'archive',
              videoInfo: videoInfo,
            },
          });
        }}
      >
        <SampleVideoComponent src={SamepleVideo} preload="metadata" />
        <VideoTime>{videoInfo.videoTime}</VideoTime>
      </VideoFrame>

      {/* 키워드 부분 */}
      <KeywordComponent>
        {lastTwoKeywords?.map((item: any) => {
          return <EachKeyword key={item}>#{item}</EachKeyword>;
        })}
      </KeywordComponent>

      {/* 제목 부분 */}
      <VideoTitle>{videoInfo.title}</VideoTitle>
    </TotalComponent>
  );
};

export default EachVideoSample;

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
// 비디오 띄워주기
const SampleVideoComponent = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  font-family: 'Noto Sans KR';
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

// 각자 키워드 부분
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

  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.4px;
  margin-left: 6px;
`;

// 영상 제목 이름 두줄로 표시하고 넘을 때 ...으러 표시
const VideoTitle = styled.div`
  margin: 8px 0px 0px 10px;
  color: var(--Gray-9, #27272e);
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  /* 두줄로 표시 시 아래와 같은 -webkit-box가 있어야함 */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  width: 17vw;
`;
