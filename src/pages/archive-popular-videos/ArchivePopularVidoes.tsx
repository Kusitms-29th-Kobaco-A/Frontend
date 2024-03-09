import styled from 'styled-components';
import Header from '../../components/Header';
import RecentPopularVideosTotal from './components/RecentPopularVideosTotal';
import Footer from '../../components/Footer';

// 랜딩페이지
const ArchivePopularVideos = () => {
  return (
    <ArchivePopularVideosComponent>
      <Header />
      <TotalVideoComponent>
        <CenteredInnerComponent>
          <RecentPopularVideosTotal />
        </CenteredInnerComponent>
      </TotalVideoComponent>
      <Footer />
    </ArchivePopularVideosComponent>
  );
};

export default ArchivePopularVideos;

const ArchivePopularVideosComponent = styled.div`
  width: 100vw;
`;

const TotalVideoComponent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 199px;
  width: 100vw;
  height: 2480px;
  background-color: #fff;
`;

// 내부 일정 너비로 가운데 정렬
const CenteredInnerComponent = styled.div`
  width: 77.813vw;
  height: 100%;
`;
