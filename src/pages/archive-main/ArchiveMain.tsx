/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SwiperVideo from "./components/SwiperVideo";
import NotLoginComponent from "./components/NotLoginComponent";
import TotalVideo from "./components/TotalVideo";

// 아카이브 메인페이지
const ArchiveMain = () => {
  // 로그인 여부에 따라 찜하기 부분 다르게 구현
  const token = localStorage.getItem("token");
  console.log(token);
  // 비디오리스트 저장하는 곳
  const [trendVideos, setTrendVideos] = useState<any>([]);
  const [recentPopularVideos, setRecentPopularVideos] = useState<any>([]);
  const [savedVideos, setSavedVideos] = useState<any>([]);

  // 트렌드 영상 받기 api
  const getTrendVideos = useCallback(async () => {
    try {
      await axios
        .get(`https://dev.simproject.kr/api/advertises/trends?page=0&size=20`, {
          headers: {
            Authorization: `${token}`,
          },
        })
        .then((res) => {
          setTrendVideos(res.data.content);
          console.log(res);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  // 최근 인기있는 영상 받기 api
  const getRecentPopularVideos = useCallback(async () => {
    try {
      await axios
        .get(`https://dev.simproject.kr/api/advertises/likes?page=0&size=20`, {
          headers: {
            Authorization: `${token}`,
          },
        })
        .then((res) => {
          setRecentPopularVideos(res.data.content);
          console.log(res);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  // 내가 찜한 영상 받기 api
  const getSavedVideos = useCallback(async () => {
    try {
      await axios
        .get(`https://dev.simproject.kr/api/advertises/saves?page=0&size=20`, {
          headers: {
            Authorization: `${token}`,
          },
        })
        .then((res) => {
          setSavedVideos(res.data.content);
          console.log(res);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getTrendVideos();
    getRecentPopularVideos();
    getSavedVideos();
  }, [getTrendVideos, getRecentPopularVideos, getSavedVideos]);

  return (
    <ArchiveComponent>
      <Header />
      {/* 트렌드 영상 컴포넌트 */}
      <AdTrendVideoComponent>
        {trendVideos.length > 0 && (
          <SwiperVideo sector="trend" videos={trendVideos} />
        )}
      </AdTrendVideoComponent>

      {/* 최근 인기있는 영상 컴포넌트 */}
      <OnLoginRecentPopularVideoComponent style={{ marginTop: "130px" }}>
        {recentPopularVideos.length > 0 && (
          <SwiperVideo sector="popular" videos={recentPopularVideos} />
        )}
      </OnLoginRecentPopularVideoComponent>

      {/* 내가 찜한 영상 컴포넌트 */}
      {token ? (
        // 로그인 시 찜한 영상 보이게 하기
        <OnLoginSavedVideoComponent>
          {savedVideos.length > 0 && (
            <SwiperVideo sector="save" videos={savedVideos} />
          )}
        </OnLoginSavedVideoComponent>
      ) : (
        // 비로그인 시 볼 수 없다고 보이게 하기
        <SavedVideoComponent>
          <CenteredInnerComponent>
            <NotLoginComponent />
          </CenteredInnerComponent>
        </SavedVideoComponent>
      )}

      {/* 전체 비디오 영상 컴포넌트 */}
      <TotalVideoComponent>
        <CenteredInnerComponent>
          <TotalVideo />
        </CenteredInnerComponent>
      </TotalVideoComponent>
      <Footer />
    </ArchiveComponent>
  );
};

export default ArchiveMain;

const ArchiveComponent = styled.div`
  width: 100vw;
`;

const AdTrendVideoComponent = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 11.094vw;
  width: 88.906vw;
  height: 268px;
  margin-top: 254px;
  background-color: #fff;
`;

const RecentPopularVideoComponent = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 268px;
  margin-top: 150px;

  background-color: #fff;
`;

const OnLoginRecentPopularVideoComponent = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 11.094vw;
  width: 88.906vw;
  height: 268px;
  margin-top: 254px;
  background-color: #fff;
`;

const SavedVideoComponent = styled(RecentPopularVideoComponent)`
  margin-top: 80px;
`;

const OnLoginSavedVideoComponent = styled(OnLoginRecentPopularVideoComponent)`
  margin-top: 80px;
`;

const TotalVideoComponent = styled(RecentPopularVideoComponent)`
  margin-top: 146px;
  height: 1929px;
`;

// 내부 일정 너비로 가운데 정렬
const CenteredInnerComponent = styled.div`
  width: 77.813vw;
  height: 100%;
`;
