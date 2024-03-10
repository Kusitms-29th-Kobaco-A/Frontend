/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components';
import bottomVideo from '../../../assets/home/Bottom.mp4';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomeBottom = () => {
  const navigate = useNavigate();

  const videoRef = useRef<HTMLVideoElement | null>(null);
  // 비디오가 뷰포트에 다시 들어올 때마다 처음부터 재생하려면 playedOnce 상태를 저장할 필요가 없습니다.

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play();
          } else {
            // 비디오가 화면에서 사라지면 재생 위치를 초기화
            videoRef.current.currentTime = 0;
            videoRef.current.pause();
          }
        }
      },
      {
        root: null, // 뷰포트를 기준으로 설정
        rootMargin: '0px',
        threshold: 0.1, // 비디오가 조금이라도 보이기 시작하면 재생
      },
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <TotalComponent>
      <MiddleTextDiv>
        <MiddleTextRed>
          신개념 Ai 광고 제작 서비스
          <br />
          AiSAC
        </MiddleTextRed>
        <MiddleText>을 이용해보세요.</MiddleText>
      </MiddleTextDiv>
      <MoveBtn
        onClick={() => {
          navigate('/archive');
        }}
      >
        AiSAC 시작하기
      </MoveBtn>
      <BottomVideo
        ref={videoRef}
        width="100%"
        muted
        src={bottomVideo}
        preload="metadata"
      />
      <Overlay />
    </TotalComponent>
  );
};

export default HomeBottom;

const TotalComponent = styled.div`
  position: relative;
  width: 100%;
  height: 41.875vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BottomVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(55, 61, 73, 0.45);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MiddleTextDiv = styled.div`
  margin: 11.094vw 0px 0px 0px;
  z-index: 2;
  text-align: center;
`;

const MiddleText = styled.span`
  color: var(--Gray-1, #f4f6f6);
  font-family: 'Noto Sans KR';
  font-size: 56px;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.4px;
`;

const MiddleTextRed = styled(MiddleText)`
  color: var(--Main-1, #d33b4d);
`;

const MoveBtn = styled.button`
  margin: 5.078vw 0px 0px 0px;
  display: inline-flex;
  padding: 9px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 24.283px;
  background: var(--Main-1, #d33b4d);
  color: var(--White-1, #fff);
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-weight: 700;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.4px;
  z-index: 2;
  cursor: pointer;
`;
