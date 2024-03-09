import styled from 'styled-components';
import Header from '../../components/Header';
import TotalVideos from './components/TotalVideos';
import Footer from '../../components/Footer';

// 랜딩페이지
const ArchiveTotalVideos = () => {
  return (
    <ArchivePopularVideosComponent>
      <Header />
      <TotalVideoComponent>
        <CenteredInnerComponent>
          <TotalVideos />
        </CenteredInnerComponent>
      </TotalVideoComponent>
      <Footer />
    </ArchivePopularVideosComponent>
  );
};

export default ArchiveTotalVideos;

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
