/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { useCallback, useEffect, useState } from "react";
import SwiperVideo from "./components/SwiperVideo";
import NotLoginComponent from "./components/NotLoginComponent";
import TotalVideo from "./components/TotalVideo";

const ArchiveMain = () => {
  const token = localStorage.getItem("token");
  const [recentPopularVideos, setRecentPopularVideos] = useState<any>([]);
  const [savedVideos, setSavedVideos] = useState<any>([]);
  const [totalVideos, setTotalVideos] = useState<any>([]);

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

      <OnLoginRecentPopularVideoComponent>
        {recentPopularVideos.length > 0 && (
          <SwiperVideo sector="popular" videos={recentPopularVideos} />
        )}
      </OnLoginRecentPopularVideoComponent>

      {token ? (
        <OnLoginSavedVideoComponrnt>
          {savedVideos.length > 0 && (
            <SwiperVideo sector="save" videos={savedVideos} />
          )}
        </OnLoginSavedVideoComponrnt>
      ) : (
        <SavedVideoComponent>
          <CenteredInnerComponent>
            <NotLoginComponent />
          </CenteredInnerComponent>
        </SavedVideoComponent>
      )}

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

const CenteredInnerComponent = styled.div`
  width: 77.813vw;
  height: 100%;
`;
