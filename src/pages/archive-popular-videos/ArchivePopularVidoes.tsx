import styled from "styled-components";
import Header from "../../components/Header";

// 랜딩페이지
const ArchivePopularVideos = () => {
  return (
    <ArchivePopularVideosComponent>
      <Header />
    </ArchivePopularVideosComponent>
  );
};

export default ArchivePopularVideos;

const ArchivePopularVideosComponent = styled.div`
  width: 100vw;
`;
