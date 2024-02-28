/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";

const ArchiveMain = () => {
  const [recentPopularVideos, setRecentPopularVideos] = useState<any>([]);
  const [savedVideos, setSavedVideos] = useState<any>([]);
  const [totalVideos, setTotalVideos] = useState<any>([]);
  //   const [page, setPage] = useState<number>(1);

  const getArchiveMainVideos = async () => {
    try {
      setRecentPopularVideos([
        {
          videoId: 1,
          videoUrl:
            "https://www.youtube.com/embed/3Hj7VwdYy4A?si=8hkAkfWZnuZ5Wy9m",
          videoTitle: "빵빵이의 옥지 사용법 ~!",
          videoTime: "02:49",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 2,
          videoUrl:
            "https://www.youtube.com/embed/ArVNxIctIqY?si=ksHVoN7dG1LUN5uV",
          videoTitle:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          videoTime: "40:32",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 3,
          videoUrl:
            "https://www.youtube.com/embed/3Hj7VwdYy4A?si=8hkAkfWZnuZ5Wy9m",
          videoTitle: "빵빵이의 옥지 사용법 ~!",
          videoTime: "02:49",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 4,
          videoUrl:
            "https://www.youtube.com/embed/ArVNxIctIqY?si=ksHVoN7dG1LUN5uV",
          videoTitle:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          videoTime: "40:32",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 5,
          videoUrl:
            "https://www.youtube.com/embed/3Hj7VwdYy4A?si=8hkAkfWZnuZ5Wy9m",
          videoTitle: "빵빵이의 옥지 사용법 ~!",
          videoTime: "02:49",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 6,
          videoUrl:
            "https://www.youtube.com/embed/ArVNxIctIqY?si=ksHVoN7dG1LUN5uV",
          videoTitle:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          videoTime: "40:32",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 7,
          videoUrl:
            "https://www.youtube.com/embed/3Hj7VwdYy4A?si=8hkAkfWZnuZ5Wy9m",
          videoTitle: "빵빵이의 옥지 사용법 ~!",
          videoTime: "02:49",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 8,
          videoUrl:
            "https://www.youtube.com/embed/ArVNxIctIqY?si=ksHVoN7dG1LUN5uV",
          videoTitle:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          videoTime: "40:32",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 9,
          videoUrl:
            "https://www.youtube.com/embed/3Hj7VwdYy4A?si=8hkAkfWZnuZ5Wy9m",
          videoTitle: "빵빵이의 옥지 사용법 ~!",
          videoTime: "02:49",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 10,
          videoUrl:
            "https://www.youtube.com/embed/ArVNxIctIqY?si=ksHVoN7dG1LUN5uV",
          videoTitle:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          videoTime: "40:32",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 11,
          videoUrl:
            "https://www.youtube.com/embed/3Hj7VwdYy4A?si=8hkAkfWZnuZ5Wy9m",
          videoTitle: "빵빵이의 옥지 사용법 ~!",
          videoTime: "02:49",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 12,
          videoUrl:
            "https://www.youtube.com/embed/ArVNxIctIqY?si=ksHVoN7dG1LUN5uV",
          videoTitle:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          videoTime: "40:32",
          keyword: ["커피", "유머있는"],
        },
      ]);
      setSavedVideos([
        {
          videoId: 1,
          videoUrl:
            "https://www.youtube.com/embed/3Hj7VwdYy4A?si=8hkAkfWZnuZ5Wy9m",
          videoTitle: "빵빵이의 옥지 사용법 ~!",
          videoTime: "02:49",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 2,
          videoUrl:
            "https://www.youtube.com/embed/ArVNxIctIqY?si=ksHVoN7dG1LUN5uV",
          videoTitle:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          videoTime: "40:32",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 3,
          videoUrl:
            "https://www.youtube.com/embed/3Hj7VwdYy4A?si=8hkAkfWZnuZ5Wy9m",
          videoTitle: "빵빵이의 옥지 사용법 ~!",
          videoTime: "02:49",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 4,
          videoUrl:
            "https://www.youtube.com/embed/ArVNxIctIqY?si=ksHVoN7dG1LUN5uV",
          videoTitle:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          videoTime: "40:32",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 5,
          videoUrl:
            "https://www.youtube.com/embed/3Hj7VwdYy4A?si=8hkAkfWZnuZ5Wy9m",
          videoTitle: "빵빵이의 옥지 사용법 ~!",
          videoTime: "02:49",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 6,
          videoUrl:
            "https://www.youtube.com/embed/ArVNxIctIqY?si=ksHVoN7dG1LUN5uV",
          videoTitle:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          videoTime: "40:32",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 7,
          videoUrl:
            "https://www.youtube.com/embed/3Hj7VwdYy4A?si=8hkAkfWZnuZ5Wy9m",
          videoTitle: "빵빵이의 옥지 사용법 ~!",
          videoTime: "02:49",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 8,
          videoUrl:
            "https://www.youtube.com/embed/ArVNxIctIqY?si=ksHVoN7dG1LUN5uV",
          videoTitle:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          videoTime: "40:32",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 9,
          videoUrl:
            "https://www.youtube.com/embed/3Hj7VwdYy4A?si=8hkAkfWZnuZ5Wy9m",
          videoTitle: "빵빵이의 옥지 사용법 ~!",
          videoTime: "02:49",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 10,
          videoUrl:
            "https://www.youtube.com/embed/ArVNxIctIqY?si=ksHVoN7dG1LUN5uV",
          videoTitle:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          videoTime: "40:32",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 11,
          videoUrl:
            "https://www.youtube.com/embed/3Hj7VwdYy4A?si=8hkAkfWZnuZ5Wy9m",
          videoTitle: "빵빵이의 옥지 사용법 ~!",
          videoTime: "02:49",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 12,
          videoUrl:
            "https://www.youtube.com/embed/ArVNxIctIqY?si=ksHVoN7dG1LUN5uV",
          videoTitle:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          videoTime: "40:32",
          keyword: ["커피", "유머있는"],
        },
      ]);
      setTotalVideos([
        {
          videoId: 1,
          videoUrl:
            "https://www.youtube.com/embed/3Hj7VwdYy4A?si=8hkAkfWZnuZ5Wy9m",
          videoTitle: "빵빵이의 옥지 사용법 ~!",
          videoTime: "02:49",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 2,
          videoUrl:
            "https://www.youtube.com/embed/ArVNxIctIqY?si=ksHVoN7dG1LUN5uV",
          videoTitle:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          videoTime: "40:32",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 3,
          videoUrl:
            "https://www.youtube.com/embed/3Hj7VwdYy4A?si=8hkAkfWZnuZ5Wy9m",
          videoTitle: "빵빵이의 옥지 사용법 ~!",
          videoTime: "02:49",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 4,
          videoUrl:
            "https://www.youtube.com/embed/ArVNxIctIqY?si=ksHVoN7dG1LUN5uV",
          videoTitle:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          videoTime: "40:32",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 5,
          videoUrl:
            "https://www.youtube.com/embed/3Hj7VwdYy4A?si=8hkAkfWZnuZ5Wy9m",
          videoTitle: "빵빵이의 옥지 사용법 ~!",
          videoTime: "02:49",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 6,
          videoUrl:
            "https://www.youtube.com/embed/ArVNxIctIqY?si=ksHVoN7dG1LUN5uV",
          videoTitle:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          videoTime: "40:32",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 7,
          videoUrl:
            "https://www.youtube.com/embed/3Hj7VwdYy4A?si=8hkAkfWZnuZ5Wy9m",
          videoTitle: "빵빵이의 옥지 사용법 ~!",
          videoTime: "02:49",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 8,
          videoUrl:
            "https://www.youtube.com/embed/ArVNxIctIqY?si=ksHVoN7dG1LUN5uV",
          videoTitle:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          videoTime: "40:32",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 9,
          videoUrl:
            "https://www.youtube.com/embed/3Hj7VwdYy4A?si=8hkAkfWZnuZ5Wy9m",
          videoTitle: "빵빵이의 옥지 사용법 ~!",
          videoTime: "02:49",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 10,
          videoUrl:
            "https://www.youtube.com/embed/ArVNxIctIqY?si=ksHVoN7dG1LUN5uV",
          videoTitle:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          videoTime: "40:32",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 11,
          videoUrl:
            "https://www.youtube.com/embed/3Hj7VwdYy4A?si=8hkAkfWZnuZ5Wy9m",
          videoTitle: "빵빵이의 옥지 사용법 ~!",
          videoTime: "02:49",
          keyword: ["커피", "유머있는"],
        },
        {
          videoId: 12,
          videoUrl:
            "https://www.youtube.com/embed/ArVNxIctIqY?si=ksHVoN7dG1LUN5uV",
          videoTitle:
            "[sub] 이건와글와글이아니라우르릉쾅카ㅇ왕 | 👅나영석의 우르르쾅쾅",
          videoTime: "40:32",
          keyword: ["커피", "유머있는"],
        },
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ArchiveComponent>
      <Header />
      <RecentPopularVideoComponent>
        <CenteredInnerComponent></CenteredInnerComponent>
      </RecentPopularVideoComponent>
      <SavedVideoComponent>
        <CenteredInnerComponent></CenteredInnerComponent>
      </SavedVideoComponent>
      <TotalVideoComponent>
        <CenteredInnerComponent></CenteredInnerComponent>
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

const SavedVideoComponent = styled(RecentPopularVideoComponent)`
  margin-top: 80px;
`;

const TotalVideoComponent = styled(RecentPopularVideoComponent)`
  margin-top: 103px;
  height: 1749px;
`;

const CenteredInnerComponent = styled.div`
  width: 77.813vw;
  height: 100%;
  border: 1px solid black;
`;
