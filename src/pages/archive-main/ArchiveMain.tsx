/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ArchiveMain = () => {
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
