/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import plusImg from "../assets/archive/Plus.svg";
import folder from "../assets/archive/Folder.svg";
import fillFolder from "../assets/archive/FillFolder.svg";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

const SelectDirectory = ({
  selectedFileIds,
  state,
  closeMoveDirectoryModal,
}: any) => {
  const token = localStorage.getItem("token");
  const [rootDirectoryInfo, setRootDirectoryInfo] = useState<any>({});
  // const [currentDirectoryInfo, setCurrentDirectoryInfo] = useState<any>({});
  // const [currentDirectoryId, SetCurrentDirectoryId] = useState<number>();
  // const [currentDirectoryName, SetCurrentDirectoryName] = useState<string>("");

  console.log(selectedFileIds);

  const getRootDirectoryInfo = useCallback(async () => {
    try {
      await axios
        .get(`https://dev.simproject.kr/api/namespaces`, {
          headers: {
            Authorization: `${token}`,
          },
        })
        .then((res) => {
          console.log(res);
          setRootDirectoryInfo(res.data);
          // SetCurrentDirectoryId(res.data.directoryId);
          // SetCurrentDirectoryName(res.data.directoryName);

          console.log(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  }, [token]);

  const [selectedFolder, setSelectedFolder] = useState<number | null>(null);
  console.log(selectedFolder);
  useEffect(() => {
    getRootDirectoryInfo();
  }, [getRootDirectoryInfo]);

  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);

  const moveDirectory = async () => {
    try {
      for (const fileId of selectedFileIds) {
        await axios
          .patch(
            `https://dev.simproject.kr/api/namespaces/${fileId}/move`,
            {
              targetDirectoryId: selectedFolder,
            },
            {
              headers: {
                Authorization: `${token}`,
              },
            }
          )
          .then((res) => {
            console.log(res);
          });
      }
      setIsOpenConfirmModal(true);
      // closeMoveDirectoryModal();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SaveModalComponent>
      <OnLoginModalText marginTop="49px">
        {state === "move" ? "이동할 폴더 선택" : "찜할 폴더 선택"}
      </OnLoginModalText>
      <SaveModalMiddleComponent>
        <EachSaveFolderComponent>
          <EachFolderImg src={folder} alt="folder" />
          <PlusImg src={plusImg} alt="+" />
          <EachFolderName>새 폴더</EachFolderName>
        </EachSaveFolderComponent>
        {rootDirectoryInfo?.fileList?.map((item: any) => {
          if (selectedFolder === item.fileId) {
            return (
              <EachSaveFolderComponent
                key={item.fileId}
                onClick={() => setSelectedFolder(item.fileId)}
              >
                <EachFolderImg src={fillFolder} alt="folder" />
                <EachFolderName>{item.fileName}</EachFolderName>
              </EachSaveFolderComponent>
            );
          } else {
            return (
              <EachSaveFolderComponent
                key={item.fileId}
                onClick={() => setSelectedFolder(item.fileId)}
              >
                <EachFolderImg src={folder} alt="folder" />
                <EachFolderName>{item.fileName}</EachFolderName>
              </EachSaveFolderComponent>
            );
          }
        })}
      </SaveModalMiddleComponent>
      <PatchModalButtonComponent>
        {state === "move" ? (
          <PatchModalBtn style={{ borderRight: "2px solid #e6e6e6" }}>
            <PatchModalBtnText onClick={closeMoveDirectoryModal}>
              취소
            </PatchModalBtnText>
          </PatchModalBtn>
        ) : (
          <PatchModalBtn style={{ borderRight: "2px solid #e6e6e6" }}>
            <PatchModalBtnText onClick={closeMoveDirectoryModal}>
              취소
            </PatchModalBtnText>
          </PatchModalBtn>
        )}

        {state === "move" ? (
          <PatchModalBtn>
            <PatchModalBtnText
              onClick={moveDirectory}
              style={{ color: "#D33B4D" }}
            >
              이동하기
            </PatchModalBtnText>
          </PatchModalBtn>
        ) : (
          <PatchModalBtn>
            <PatchModalBtnText style={{ color: "#D33B4D" }}>
              이동하기
            </PatchModalBtnText>
          </PatchModalBtn>
        )}
      </PatchModalButtonComponent>
    </SaveModalComponent>
  );
};

export default SelectDirectory;

const ConfirmWindow = () => {
  return (
    <CompleteModal>
      <MiddleText>이동이 완료되었습니다.</MiddleText>
      <ConfirmDiv>확인</ConfirmDiv>
    </CompleteModal>
  );
};

const SaveModalComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  width: 560px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 2px solid var(--Gray-2, #e6e6e6);
  background: #fff;

  height: 480px;
`;

const SaveModalMiddleComponent = styled.div`
  width: 460px;
  height: 180px;
  padding: 0px 0px 30px 0px;
  overflow-y: auto;
  margin: 51px 0px 71px;
  gap: 0px 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const EachSaveFolderComponent = styled.div`
  position: relative;
  width: 120px;
  height: 142px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EachFolderImg = styled.img`
  width: 120px;
  height: 120px;
  flex-shrink: 0;
  cursor: pointer;
`;
const PlusImg = styled.img`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const EachFolderName = styled.div`
  color: var(--Gray-9, #27272e);
  text-align: center;

  /* Detail/3 */
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 350;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.4px;
  overflow: hidden;
`;

const PatchModalButtonComponent = styled.div`
  margin: 35px 0px 0px 0px;
  width: 100%;
  display: flex;
  border-top: 2px solid #e6e6e6;
`;

const PatchModalBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 281px;
  height: 93px;
`;

const PatchModalBtnText = styled.div`
  color: var(--Gray-7, #707887);

  /* Body/2 */
  font-family: "Noto Sans KR";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 33.6px */
  letter-spacing: -0.4px;
  cursor: pointer;
`;

const OnLoginModalText = styled.div<{ marginTop?: string }>`
  margin-top: 49px;
  color: var(--Gray-8, #373d49);
  text-align: center;

  /* Body/1 */
  font-family: "Noto Sans KR";
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 39.2px */
  letter-spacing: -0.4px;
  margin-top: ${(props) => props.marginTop || "0px"};
`;

const CompleteModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 560px;
  height: 330px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 2px solid var(--Gray-2, #e6e6e6);
  background: #fff;
`;

const MiddleText = styled.div`
  color: var(--Gray-8, #373d49);
  text-align: center;
  margin-top: 126px;
  /* Body/1 */
  font-family: "Noto Sans KR";
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 39.2px */
  letter-spacing: -0.4px;
`;

const ConfirmDiv = styled.div`
  width: 100%;
  height: 93px;
  color: var(--Main-1, #d33b4d);

  /* Body/1 */
  font-family: "Noto Sans KR";
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 39.2px */
  letter-spacing: -0.4px;

  border-top: 1px solid #e6e6e6;
  display: flex;
  align-items: center;
  justify-content: center;
`;
