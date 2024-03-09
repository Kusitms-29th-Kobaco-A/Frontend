/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useCallback, useEffect, useState } from 'react';
import TotalVideosComponent from './components/TotalVideosComponent';
import TotalCommentComponent from './components/TotalCommentComponent';
import SampleVideo from '../../assets/archive/cocacola.mp4';

// 랜딩페이지
const SampleDetail = () => {
  const [videoInfo, setVideoInfo] = useState<Record<string, any>>({});

  const checkIfNotEmpty = (obj: Record<string, any>): boolean => {
    return Object.keys(obj).length !== 0;
  };

  const getVideoInfo = useCallback(async () => {
    setVideoInfo({
      videoUrl: SampleVideo,
      videoTime: '00:00:34',
      title: '[#코카콜라] 맛있는 걸 선택해! 코카-콜라 제로!',
      uploadDate: '2024-02-01',
      copy: '카피저장',
      copyDetail: '코카콜라 제로',
      peopleList: [],
      objectList: ['콜라'],
      owner: '(주)코카콜라코리아',
      ownerCompany: '(주)코카콜라코리아',
      makerCompany: '(주)코카콜라코리아',
      keywordList: ['식품/외식업', '탄산음료', '유머있는'],
      viewCount: 17674680,
    });
  }, []);

  useEffect(() => {
    getVideoInfo();
  }, [getVideoInfo]);

  return (
    <ArchiveDetailComponent>
      <Header />

      <TotalComponent>
        <CenteredInnerComponent>
          {checkIfNotEmpty(videoInfo) && (
            <TotalVideosComponent videoInfo={videoInfo} />
          )}
        </CenteredInnerComponent>
      </TotalComponent>
      <TotalCommentComponent />
      <Footer />
    </ArchiveDetailComponent>
  );
};

export default SampleDetail;

const ArchiveDetailComponent = styled.div`
  width: 100vw;
`;

const TotalComponent = styled.div`
  min-height: 2396px;
  display: flex;
  justify-content: center;
  margin-top: 162px;
  width: 100vw;
  min-height: 340px;
  padding: 45px 0px 59px;
  background-color: #fff;
`;

// 내부 일정 너비로 가운데 정렬
const CenteredInnerComponent = styled.div`
  width: 77.813vw; //996px;
  height: 100%;
`;
