/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useEffect, useState } from "react";

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

  // 비디오리스트 저장하는 곳
  const [recentPopularVideos, setRecentPopularVideos] = useState<any>([]);
  const [savedVideos, setSavedVideos] = useState<any>([]);
  const [totalVideos, setTotalVideos] = useState<any>([]);

  // 여기서 한번에 모든 비디오 정보들 받음
  const getArchiveMainVideos = useCallback(async () => {
    try {
      setRecentPopularVideos([
        {
          videoId: 1,

          videoUrl: "https://youtu.be/3Hj7VwdYy4A?si=CFY4XDE_UYlkScWx",
          videoTitle: "빵빵이의 옥지 사용법 ~!",
          videoTime: "02:49",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 2,
          videoUrl: "https://youtu.be/NFcp_8np3e8?si=boqQB_OgrBpP_ru5",
          videoTitle:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          videoTime: "40:32",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 3,
          videoUrl: "https://youtu.be/3Hj7VwdYy4A?si=CFY4XDE_UYlkScWx",
          videoTitle: "빵빵이의 옥지 사용법 ~!",
          videoTime: "02:49",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 4,
          videoUrl: "https://youtu.be/NFcp_8np3e8?si=boqQB_OgrBpP_ru5",
          videoTitle:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          videoTime: "40:32",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 5,
          videoUrl: "https://youtu.be/3Hj7VwdYy4A?si=CFY4XDE_UYlkScWx",
          videoTitle: "빵빵이의 옥지 사용법 ~!",
          videoTime: "02:49",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 6,
          videoUrl: "https://youtu.be/NFcp_8np3e8?si=boqQB_OgrBpP_ru5",
          videoTitle:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          videoTime: "40:32",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 7,
          videoUrl: "https://youtu.be/3Hj7VwdYy4A?si=CFY4XDE_UYlkScWx",
          videoTitle: "빵빵이의 옥지 사용법 ~!",
          videoTime: "02:49",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 8,
          videoUrl: "https://youtu.be/NFcp_8np3e8?si=boqQB_OgrBpP_ru5",
          videoTitle:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          videoTime: "40:32",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 9,
          videoUrl: "https://youtu.be/3Hj7VwdYy4A?si=CFY4XDE_UYlkScWx",
          videoTitle: "빵빵이의 옥지 사용법 ~!",
          videoTime: "02:49",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 10,
          videoUrl: "https://youtu.be/NFcp_8np3e8?si=boqQB_OgrBpP_ru5",
          videoTitle:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          videoTime: "40:32",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 11,
          videoUrl: "https://youtu.be/3Hj7VwdYy4A?si=CFY4XDE_UYlkScWx",
          videoTitle: "빵빵이의 옥지 사용법 ~!",
          videoTime: "02:49",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 12,
          videoUrl: "https://youtu.be/NFcp_8np3e8?si=boqQB_OgrBpP_ru5",
          videoTitle:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          videoTime: "40:32",
          keyword: ["커피", "유머있는"],
        },
      ]);
      setSavedVideos([
        {
          videoId: 12,
          videoUrl: "https://youtu.be/NFcp_8np3e8?si=boqQB_OgrBpP_ru5",
          videoTitle:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          videoTime: "40:32",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 1,
          videoUrl: "https://youtu.be/3Hj7VwdYy4A?si=CFY4XDE_UYlkScWx",
          videoTitle: "빵빵이의 옥지 사용법 ~!",
          videoTime: "02:49",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 2,
          videoUrl: "https://youtu.be/NFcp_8np3e8?si=boqQB_OgrBpP_ru5",
          videoTitle:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          videoTime: "40:32",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 3,
          videoUrl: "https://youtu.be/3Hj7VwdYy4A?si=CFY4XDE_UYlkScWx",
          videoTitle: "빵빵이의 옥지 사용법 ~!",
          videoTime: "02:49",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 4,
          videoUrl: "https://youtu.be/NFcp_8np3e8?si=boqQB_OgrBpP_ru5",
          videoTitle:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          videoTime: "40:32",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 5,
          videoUrl: "https://youtu.be/3Hj7VwdYy4A?si=CFY4XDE_UYlkScWx",
          videoTitle: "빵빵이의 옥지 사용법 ~!",
          videoTime: "02:49",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 6,
          videoUrl: "https://youtu.be/NFcp_8np3e8?si=boqQB_OgrBpP_ru5",
          videoTitle:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          videoTime: "40:32",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 7,
          videoUrl: "https://youtu.be/3Hj7VwdYy4A?si=CFY4XDE_UYlkScWx",
          videoTitle: "빵빵이의 옥지 사용법 ~!",
          videoTime: "02:49",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 8,
          videoUrl: "https://youtu.be/NFcp_8np3e8?si=boqQB_OgrBpP_ru5",
          videoTitle:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          videoTime: "40:32",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 9,
          videoUrl: "https://youtu.be/3Hj7VwdYy4A?si=CFY4XDE_UYlkScWx",
          videoTitle: "빵빵이의 옥지 사용법 ~!",
          videoTime: "02:49",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 10,
          videoUrl: "https://youtu.be/NFcp_8np3e8?si=boqQB_OgrBpP_ru5",
          videoTitle:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          videoTime: "40:32",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 11,
          videoUrl: "https://youtu.be/3Hj7VwdYy4A?si=CFY4XDE_UYlkScWx",
          videoTitle: "빵빵이의 옥지 사용법 ~!",
          videoTime: "02:49",
          keyword: ["커피", "유머있는"],
        },
      ]);
      setTotalVideos([
        {
          videoId: 1,
          videoUrl: "https://youtu.be/3Hj7VwdYy4A?si=CFY4XDE_UYlkScWx",
          videoTitle: "빵빵이의 옥지 사용법 ~!",
          videoTime: "02:49",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 2,
          videoUrl: "https://youtu.be/NFcp_8np3e8?si=boqQB_OgrBpP_ru5",
          videoTitle:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          videoTime: "40:32",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 3,
          videoUrl: "https://youtu.be/3Hj7VwdYy4A?si=CFY4XDE_UYlkScWx",
          videoTitle: "빵빵이의 옥지 사용법 ~!",
          videoTime: "02:49",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 4,
          videoUrl: "https://youtu.be/NFcp_8np3e8?si=boqQB_OgrBpP_ru5",
          videoTitle:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          videoTime: "40:32",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 5,
          videoUrl: "https://youtu.be/3Hj7VwdYy4A?si=CFY4XDE_UYlkScWx",
          videoTitle: "빵빵이의 옥지 사용법 ~!",
          videoTime: "02:49",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 6,
          videoUrl: "https://youtu.be/NFcp_8np3e8?si=boqQB_OgrBpP_ru5",
          videoTitle:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          videoTime: "40:32",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 7,
          videoUrl: "https://youtu.be/3Hj7VwdYy4A?si=CFY4XDE_UYlkScWx",
          videoTitle: "빵빵이의 옥지 사용법 ~!",
          videoTime: "02:49",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 8,
          videoUrl: "https://youtu.be/NFcp_8np3e8?si=boqQB_OgrBpP_ru5",
          videoTitle:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          videoTime: "40:32",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 9,
          videoUrl: "https://youtu.be/3Hj7VwdYy4A?si=CFY4XDE_UYlkScWx",
          videoTitle: "빵빵이의 옥지 사용법 ~!",
          videoTime: "02:49",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 10,
          videoUrl: "https://youtu.be/NFcp_8np3e8?si=boqQB_OgrBpP_ru5",
          videoTitle:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          videoTime: "40:32",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 11,
          videoUrl: "https://youtu.be/3Hj7VwdYy4A?si=CFY4XDE_UYlkScWx",
          videoTitle: "빵빵이의 옥지 사용법 ~!",
          videoTime: "02:49",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 12,
          videoUrl: "https://youtu.be/NFcp_8np3e8?si=boqQB_OgrBpP_ru5",
          videoTitle:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          videoTime: "40:32",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 13,
          videoUrl: "https://youtu.be/3Hj7VwdYy4A?si=CFY4XDE_UYlkScWx",
          videoTitle: "빵빵이의 옥지 사용법 ~!",
          videoTime: "02:49",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 14,
          videoUrl: "https://youtu.be/NFcp_8np3e8?si=boqQB_OgrBpP_ru5",
          videoTitle:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          videoTime: "40:32",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 15,
          videoUrl: "https://youtu.be/3Hj7VwdYy4A?si=CFY4XDE_UYlkScWx",
          videoTitle: "빵빵이의 옥지 사용법 ~!",
          videoTime: "02:49",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 16,
          videoUrl: "https://youtu.be/NFcp_8np3e8?si=boqQB_OgrBpP_ru5",
          videoTitle:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          videoTime: "40:32",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 17,
          videoUrl: "https://youtu.be/3Hj7VwdYy4A?si=CFY4XDE_UYlkScWx",
          videoTitle: "빵빵이의 옥지 사용법 ~!",
          videoTime: "02:49",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 18,
          videoUrl: "https://youtu.be/NFcp_8np3e8?si=boqQB_OgrBpP_ru5",
          videoTitle:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          videoTime: "40:32",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 19,
          videoUrl: "https://youtu.be/3Hj7VwdYy4A?si=CFY4XDE_UYlkScWx",
          videoTitle: "빵빵이의 옥지 사용법 ~!",
          videoTime: "02:49",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 20,
          videoUrl: "https://youtu.be/NFcp_8np3e8?si=boqQB_OgrBpP_ru5",
          videoTitle:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          videoTime: "40:32",
          keyword: ["커피", "유머있는"],
        },
      ]);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getArchiveMainVideos();
  }, [getArchiveMainVideos]);

  return (
    <ArchiveComponent>
      <Header />

      {/* 최근 인기있는 영상 컴포넌트 */}
      <OnLoginRecentPopularVideoComponent>
        {recentPopularVideos.length > 0 && (
          <SwiperVideo sector="popular" videos={recentPopularVideos} />
        )}
      </OnLoginRecentPopularVideoComponent>

      {/* 내가 찜한 영상 컴포넌트 */}
      {token ? (
        // 로그인 시 찜한 영상 보이게 하기
        <OnLoginSavedVideoComponrnt>
          {savedVideos.length > 0 && (
            <SwiperVideo sector="save" videos={savedVideos} />
          )}
        </OnLoginSavedVideoComponrnt>
      ) : (
        // 비로그인 시 볼 수 없다고 보이게 하기
        <SavedVideoComponent>
          <CenteredInnerComponent>
            <NotLoginComponent />
          </CenteredInnerComponent>
        </SavedVideoComponent>
      )}

      {/* 전체 비디오 영상 컴포넌트 */}
      {/* videos 보내주고 페이지 바뀌거나 검색어 입력시 TotalVideo 내부에서 다시 받아 렌더링 */}
      <TotalVideoComponent>
        <CenteredInnerComponent>
          {totalVideos.length > 0 && <TotalVideo videos={totalVideos} />}
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

const RecentPopularVideoComponent = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 268px;
  margin-top: 254px;
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

const OnLoginSavedVideoComponrnt = styled(OnLoginRecentPopularVideoComponent)`
  margin-top: 80px;
`;

const TotalVideoComponent = styled(RecentPopularVideoComponent)`
  margin-top: 103px;
  height: 1749px;
`;

// 내부 일정 너비로 가운데 정렬
const CenteredInnerComponent = styled.div`
  width: 77.813vw;
  height: 100%;
`;
