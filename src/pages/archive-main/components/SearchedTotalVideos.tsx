/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import EachVideo from "../../../components/EachVideo";

const SearchedTotalVideos = ({ videos }: any) => {
  console.log(videos);
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
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: repeat(5, 281px);
  gap: 0px 1.205%;
  margin: 42px 0px 0px 0px;
  width: 100%;
  height: 100%;
`;
