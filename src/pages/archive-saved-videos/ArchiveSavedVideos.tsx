import styled from "styled-components";
import Header from "../../components/Header";
import SavedVideosTotal from "./components/SavedVideosTotal";
import Footer from "../../components/Footer";

// 랜딩페이지
const ArchiveSavedVideos = () => {
  return (
    <ArchiveSavedVideosComponent>
      <Header />
      <TotalVideoComponent>
        <CenteredInnerComponent>
          <SavedVideosTotal />
        </CenteredInnerComponent>
      </TotalVideoComponent>
      <Footer />
    </ArchiveSavedVideosComponent>
  );
};

export default ArchiveSavedVideos;

const ArchiveSavedVideosComponent = styled.div`
  width: 100vw;
`;

const TotalVideoComponent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 162px;
  width: 100vw;
  min-height: 340px;
  padding: 37px 0px 59px;
  background-color: #fff;
`;

// 내부 일정 너비로 가운데 정렬
const CenteredInnerComponent = styled.div`
  width: 77.813vw;
  height: 100%;
`;
