/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import EachVideo from "../../../components/EachVideo";

// 실제 동영상 리스트 보여주는 부분
// 리스트를 받아서 보여준다
const SearchedTotalVideos = ({ videos }: any) => {
  return (
    <TotalComponent>
      {videos?.map((videoInfo: any) => {
        return <EachVideo videoInfo={videoInfo} />;
      })}
    </TotalComponent>
  );
};

export default SearchedTotalVideos;

const TotalComponent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  grid-template-rows: 281px 281px 281px 281px 281px 281px 251px;
  gap: 0px 1.205%;
  margin: 42px 0px 0px 0px;
  width: 100%;
`;
