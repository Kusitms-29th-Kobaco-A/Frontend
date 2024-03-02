/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useLocation, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import TotalVideosComponent from "./components/TotalVideosComponent";
import axios from "axios";
import TotalCommentComponent from "./components/TotalCommentComponent";

// 랜딩페이지
const ArchiveDetail = () => {
  // menuState추출하기
  const location = useLocation();
  const state = location.state;

  const advertiseId = useParams();

  const [videoInfo, setVideoInfo] = useState<Record<string, any>>({});

  const checkIfNotEmpty = (obj: Record<string, any>): boolean => {
    return Object.keys(obj).length !== 0;
  };

  const getVideoInfo = useCallback(async () => {
    try {
      await axios
        .get(
          `https://dev.simproject.kr/api/advertises/${advertiseId.advertiseId}`
        )
        .then((res) => {
          if (res.status === 200) {
            setVideoInfo(res.data);
            console.log(res.data);
          }
        });
      // setVideoInfo({
      //   advertiseId: 1,
      //   videoUrl: "https://youtu.be/NFcp_8np3e8?si=boqQB_OgrBpP_ru5",
      //   title:
      //     "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
      //   uploadDate: "2024.02.29",

      //   copy: "광고 카피 제목부분이에요",
      //   copyDetail:
      //     "광고에 나오는 자막이에요 이거는 자막이에요 안녕하세요 이거는 자막이에요 하하하하 이건 자막이구나 자막을 얼마나 길게 해야할까요 저도 잘 모르겠네요 네네 광고에 나오는 자막이에요 이거는 자막이에요 안녕하세요 이거는 자막이에요 하하하하 이건 자막이구나 자막을 얼마나 길게 해야할까요 저도 잘 모르겠네요",
      //   peopleList: ["김태희", "10대 여아", "하이"],
      //   objectList: ["침대", "화분"],
      //   owner: "광고주 이름이 뭘까요",
      //   ownerCompany: "광고회사 이름이 뭘까",
      //   makerCompany: "제작사는?",
      //   keywordList: ["커피", "유머있는", "신뢰감있는"],
      // });
    } catch (err) {
      console.log(err);
    }
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
            <TotalVideosComponent
              advertiseId={advertiseId}
              videoInfo={videoInfo}
            />
          )}
        </CenteredInnerComponent>
      </TotalComponent>
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
