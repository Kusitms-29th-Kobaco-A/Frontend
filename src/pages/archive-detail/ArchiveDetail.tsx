/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import TotalVideosComponent from './components/TotalVideosComponent';
import axios from 'axios';
import TotalCommentComponent from './components/TotalCommentComponent';

//광고 상세페이지 화면
const ArchiveDetail = () => {
  const advertiseId = useParams();

  // 비디오 info  받았을 경우 넘겨주기
  const [videoInfo, setVideoInfo] = useState<Record<string, any>>({});
  const checkIfNotEmpty = (obj: Record<string, any>): boolean => {
    return Object.keys(obj).length !== 0;
  };

  // 광고 정보받기
  const getVideoInfo = useCallback(async () => {
    try {
      await axios
        .get(
          `https://dev.simproject.kr/api/advertises/${advertiseId.advertiseId}`,
        )
        .then((res) => {
          if (res.status === 200) {
            setVideoInfo(res.data);
            console.log(res.data);
          }
        });
    } catch (err) {
      console.log(err);
    }
  }, [advertiseId]);

  useEffect(() => {
    getVideoInfo();
  }, [getVideoInfo]);

  return (
    <ArchiveDetailComponent>
      <Header />

      <TotalComponent>
        <CenteredInnerComponent>
          {/* 비디오 정보 부분 */}
          {checkIfNotEmpty(videoInfo) && (
            <TotalVideosComponent
              advertiseId={advertiseId}
              videoInfo={videoInfo}
            />
          )}
        </CenteredInnerComponent>
      </TotalComponent>
      {/* 비디오 댓글 부분  */}
      <TotalCommentComponent advertiseId={advertiseId} />
      <Footer />
    </ArchiveDetailComponent>
  );
};

export default ArchiveDetail;

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
