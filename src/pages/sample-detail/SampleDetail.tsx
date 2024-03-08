/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useCallback, useEffect, useState } from "react";
import TotalVideosComponent from "./components/TotalVideosComponent";
import TotalCommentComponent from "./components/TotalCommentComponent";
import SampleVideo from "../../assets/archive/cocacola.mp4";

// 랜딩페이지
const SampleDetail = () => {
  const [videoInfo, setVideoInfo] = useState<Record<string, any>>({});

  const checkIfNotEmpty = (obj: Record<string, any>): boolean => {
    return Object.keys(obj).length !== 0;
  };

  const getVideoInfo = useCallback(async () => {
    setVideoInfo({
      videoUrl: SampleVideo,
      videoTime: "00:00:18",
      title: "맛도 좋은 코카콜라 콜라입니다",
      uploadDate: "2024-03-05",
      copy: "카피저장",
      copyDetail:
        "맛있는 코카콜라와 사이다 코카콜라도 맛있지만 사이다도 맛있으니 먹어봐요",
      peopleList: ["뉴진스"],
      objectList: ["코카콜라", "스프라이트"],
      owner: "코카콜라",
      ownerCompany: "Coke",
      makerCompany: "코카",
      keywordList: ["콜라", "탄산", "시원함"],
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
