import styled from "styled-components";

const RecentPopularVideo = () => {
  return (
    <TotalComponent>
      <TopLabel>최근 인기있는 영상</TopLabel>
      <VideosComponent></VideosComponent>
    </TotalComponent>
  );
};

export default RecentPopularVideo;

const TotalComponent = styled.div`
  width: 100%;
  height: 100%;
`;

const TopLabel = styled.div`
  color: var(--Gray-9, #27272e);
  height: 34px;
  /* Heading/3 */
  font-family: "Noto Sans KR";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 33.6px */
  letter-spacing: -0.4px;
`;

const VideosComponent = styled.div`
  width: 100%;
  height: 234px;
`;
