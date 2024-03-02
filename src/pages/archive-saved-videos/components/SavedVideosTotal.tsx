/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

const SavedVideosTotal = () => {
  const token = localStorage.getItem("token");
  console.log(token);

  const [directoryInfo, setDirectoryInfo] = useState<any>([]);

  const getSavedVidosFolder = useCallback(async () => {
    try {
      await axios
        .get(`https://dev.simproject.kr/api/namespaces`, {
          headers: {
            Authorization: `${token}`,
          },
        })
        .then((res) => {
          setDirectoryInfo(res.data);
          console.log(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getSavedVidosFolder();
  }, [getSavedVidosFolder]);

  return (
    <TotalComponent>
      <TotalTopRowFlexComponent>
        <TotalTopLabel>내가 찜한 영상</TotalTopLabel>
        <TotalTopBtn>검색</TotalTopBtn>
      </TotalTopRowFlexComponent>
      <RootDirectoryComponent>
        {/* {directoryInfo.fileList?.map((item) => {
          return <DirectoryBox></DirectoryBox>;
        })} */}
      </RootDirectoryComponent>
    </TotalComponent>
  );
};

export default SavedVideosTotal;

const TotalComponent = styled.div`
  width: 100%;
`;

// 상단 sector
const TotalTopRowFlexComponent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const TotalTopLabel = styled.div`
  color: var(--Gray-9, #27272e);
  font-family: "Noto Sans KR";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.4px;
`;

const TotalTopBtn = styled.button`
  position: absolute;
  right: 0;
  display: inline-flex;
  padding: 8px 21px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background: var(--Main-1, #d33b4d);
  color: var(--White-1, #fff);
  border: none;
  /* Body/3 */
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 28px */
  letter-spacing: -0.4px;
`;

const RootDirectoryComponent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3.125vw;
  margin: 84px 0px 0px 0px;
  width: 78.125vw;
  height: inline-flex;
  min-height: 220px;
  border: 1px solid black;
`;

const DirectoryBox = styled.div`
  width: 17vw;
  height: 17vw;
  border: 1px solid red;
`;

const DirectoryImg = styled.img`
  width: 88px;
  height: 88px;
  flex-shrink: 0;
`;
