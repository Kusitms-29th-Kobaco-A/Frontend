/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import dotImg from "../../../assets/archive/DotDotDot.svg";
import folderImg from "../../../assets/archive/Folder.svg";
import fillFolderImg from "../../../assets/archive/FillFolder.svg";
import starImg from "../../../assets/archive/Star.svg";
import plusImg from "../../../assets/archive/Plus.svg";
import Footer from "../../../components/Footer";
import { useNavigate } from "react-router-dom";

const SavedVideosTotal = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const token = localStorage.getItem("token");
  console.log(token);
  const [directoryInfo, setDirectoryInfo] = useState<any>([]);
  const parentDirectoryId = directoryInfo.directoryId;
  console.log(directoryInfo);

  const navigate = useNavigate();

  const [isOpenDotModal, setIsOpenDotModal] = useState<boolean>(false);
  // 모달 상태를 관리하기 위한 새로운 상태 추가
  const [openModalId, setOpenModalId] = useState<null | number>(null);
  // 이벤트 전파를 막는 로직을 toggleModal과 ModalBox의 클릭 이벤트 핸들러에 추가합니다.
  // toggleModal 함수 수정
  const toggleModal = (event: React.MouseEvent, fileId: number) => {
    event.stopPropagation(); // 이벤트 버블링을 막음

    // isOpenPatchModal이 true인 경우, 즉 '폴더 이름 수정하기' 모달이 열려 있는 경우에는
    // dotModal의 상태를 변경하지 않고 함수 실행을 중단
    if (isOpenPatchModal || isOpenDeleteModal || isOpenPlusModal) {
      return;
    }

    if (openModalId === fileId) {
      setOpenModalId(null); // 이미 열린 모달을 닫음
    } else {
      setOpenModalId(fileId); // 새로운 모달을 열음
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsOpenDotModal(false);
    }
  };

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
  }, [token]);

  const [isOpenPatchModal, setIsOpenPatchModal] = useState<boolean>(false);
  const [currentEditingId, setCurrentEditingId] = useState<number | null>(null);
  const handleOpenPatchModal =
    (fileId: number) => (event: React.MouseEvent) => {
      event.stopPropagation(); // 이벤트 버블링을 막음
      setCurrentEditingId(fileId); // 현재 수정 중인 폴더 ID 설정
      setOpenModalId(null); // 기존 dot modal 닫기
      setIsOpenPatchModal(true); // patchModal 열기
      // 필요한 경우 여기서 fileId를 사용하여 추가 로직 처리
    };

  // 기존 상태들...
  const [folderName, setFolderName] = useState(""); // 폴더 이름을 관리할 상태

  // 모달을 닫고 input 값을 초기화하는 함수
  const handleClosePatchModal = () => {
    setIsOpenPatchModal(false);
    setFolderName(""); // input 값을 초기화
  };

  // 폴더 이름 input 변경 핸들러
  const handleFolderNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFolderName(event.target.value);
  };

  const patchDirectoryName = useCallback(
    async (fileId: number, directoryName: string) => {
      try {
        await axios
          .patch(
            `https://dev.simproject.kr/api/namespaces/${fileId}`,
            {
              directoryName: directoryName,
            },
            {
              headers: {
                Authorization: `${token}`,
              },
            }
          )
          .then((res) => {
            setIsOpenPatchModal(false); // 모달 닫기
            getSavedVidosFolder();
          });
      } catch (err) {
        console.log(err);
      }
    },
    [token]
  );

  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);
  const handleOpenDeleteModal =
    (fileId: number) => (event: React.MouseEvent) => {
      event.stopPropagation(); // 이벤트 버블링을 막음
      setCurrentEditingId(fileId); // 현재 수정 중인 폴더 ID 설정
      setOpenModalId(null); // 기존 dot modal 닫기
      setIsOpenDeleteModal(true); // patchModal 열기
      // 필요한 경우 여기서 fileId를 사용하여 추가 로직 처리
    };

  // 모달을 닫고 input 값을 초기화하는 함수
  const handleCloseDeleteModal = () => {
    setIsOpenDeleteModal(false);
  };

  const deleteDirectoryName = useCallback(
    async (fileId: number) => {
      try {
        await axios
          .delete(
            `https://dev.simproject.kr/api/namespaces/${fileId}`,

            {
              headers: {
                Authorization: `${token}`,
              },
            }
          )
          .then((res) => {
            setIsOpenDeleteModal(false); // 모달 닫기
            getSavedVidosFolder();
          });
      } catch (err) {
        console.log(err);
      }
    },
    [token]
  );

  const [isOpenPlusModal, setIsOpenPlusModal] = useState<boolean>(false);
  const handleOpenPlusModal = (event: React.MouseEvent) => {
    event.stopPropagation(); // 이벤트 버블링을 막음
    setIsOpenPlusModal(true); // patchModal 열기
    // 필요한 경우 여기서 fileId를 사용하여 추가 로직 처리
  };

  // 모달을 닫고 input 값을 초기화하는 함수
  const handleClosePlusModal = () => {
    setIsOpenPlusModal(false);
  };

  const plusDirectoryName = useCallback(
    async (directoryName: string) => {
      try {
        await axios
          .post(
            `https://dev.simproject.kr/api/namespaces/${parentDirectoryId}`,
            {
              directoryName: directoryName,
            },
            {
              headers: {
                Authorization: `${token}`,
              },
            }
          )
          .then((res) => {
            setIsOpenPlusModal(false); // 모달 닫기
            getSavedVidosFolder();
          });
      } catch (err) {
        console.log(err);
      }
    },
    [token, parentDirectoryId]
  );

  useEffect(() => {
    getSavedVidosFolder();
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        if (isOpenPatchModal) {
          setIsOpenPatchModal(false); // patchModal 닫기
        } else if (isOpenDeleteModal) {
          setIsOpenDeleteModal(false); // deleteModal 닫기
        } else if (isOpenPlusModal) {
          setIsOpenPlusModal(false); // plusModal 닫기
        } else {
          setOpenModalId(null); // 그 외의 경우 모든 dot modal 닫기
        }
      }
    };

    document.addEventListener("click", handleClickOutside);
    if (!isOpenPatchModal) {
      setFolderName(""); // 모달이 닫힐 때 input 값을 초기화
    }
    if (!isOpenPlusModal) {
      setFolderName(""); // 모달이 닫힐 때 input 값을 초기화
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [
    getSavedVidosFolder,
    isOpenPatchModal,
    isOpenDeleteModal,
    isOpenPlusModal,
  ]);

  return (
    <TotalComponent>
      <TotalTopRowFlexComponent>
        <TotalTopLabel>내가 찜한 영상</TotalTopLabel>
        {/* <TotalTopBtn>검색</TotalTopBtn> */}
      </TotalTopRowFlexComponent>
      <RootDirectoryComponent>
        {isOpenPatchModal && (
          <PatchTotalModal>
            <PatchTopText>폴더 이름 수정하기</PatchTopText>
            <PatchTitleInput
              type="text"
              value={folderName}
              onChange={handleFolderNameChange}
              placeholder="폴더명"
            />

            <PatchModalButtonComponent>
              <PatchModalBtn style={{ borderRight: "2px solid #e6e6e6" }}>
                <PatchModalBtnText onClick={handleClosePatchModal}>
                  취소
                </PatchModalBtnText>
              </PatchModalBtn>
              <PatchModalBtn>
                <PatchModalBtnText
                  style={{ color: "#D33B4D" }}
                  onClick={() =>
                    currentEditingId
                      ? patchDirectoryName(currentEditingId, folderName)
                      : null
                  }
                >
                  확인
                </PatchModalBtnText>
              </PatchModalBtn>
            </PatchModalButtonComponent>
          </PatchTotalModal>
        )}
        {isOpenDeleteModal && (
          <PatchTotalModal>
            <DeleteMiddleText>해당 폴더를 삭제하시겠습니까?</DeleteMiddleText>
            <PatchModalButtonComponent>
              <PatchModalBtn style={{ borderRight: "2px solid #e6e6e6" }}>
                <PatchModalBtnText onClick={handleCloseDeleteModal}>
                  취소
                </PatchModalBtnText>
              </PatchModalBtn>
              <PatchModalBtn>
                <PatchModalBtnText
                  style={{ color: "#D33B4D" }}
                  onClick={() =>
                    currentEditingId
                      ? deleteDirectoryName(currentEditingId)
                      : null
                  }
                >
                  확인
                </PatchModalBtnText>
              </PatchModalBtn>
            </PatchModalButtonComponent>
          </PatchTotalModal>
        )}
        {isOpenPlusModal && (
          <PatchTotalModal>
            <PatchTopText>새 폴더명을 입력해주세요</PatchTopText>
            <PatchTitleInput
              type="text"
              value={folderName}
              onChange={handleFolderNameChange}
              placeholder="폴더명"
            />

            <PatchModalButtonComponent>
              <PatchModalBtn style={{ borderRight: "2px solid #e6e6e6" }}>
                <PatchModalBtnText onClick={handleClosePlusModal}>
                  취소
                </PatchModalBtnText>
              </PatchModalBtn>
              <PatchModalBtn>
                <PatchModalBtnText
                  onClick={() => plusDirectoryName(folderName)}
                  style={{ color: "#D33B4D" }}
                >
                  확인
                </PatchModalBtnText>
              </PatchModalBtn>
            </PatchModalButtonComponent>
          </PatchTotalModal>
        )}

        {directoryInfo.fileList?.map((item: any) => {
          return (
            <DirectoryBox key={item.fileId}>
              <DotImgBox
                onClick={(event) => toggleModal(event, item.fileId)}
                src={dotImg}
                alt="..."
              />
              {openModalId === item.fileId && (
                <ModalBox
                  ref={modalRef}
                  onClick={(event) => event.stopPropagation()}
                >
                  <ModalInTextBox>
                    <ModalInText onClick={handleOpenDeleteModal(item.fileId)}>
                      삭제하기
                    </ModalInText>
                  </ModalInTextBox>
                  <ModalInTextBox>
                    <ModalInText onClick={handleOpenPatchModal(item.fileId)}>
                      이름 바꾸기
                    </ModalInText>
                  </ModalInTextBox>
                </ModalBox>
              )}
              {currentEditingId === item.fileId &&
              (isOpenPatchModal || isOpenDeleteModal) ? (
                <DirectoryImgBox
                  onClick={() =>
                    navigate(`/archive/savedVideos/inFolder/${item.fileId}`, {
                      state: {
                        menuState: "archive",
                        prarentDirectoryId: parentDirectoryId,
                      },
                    })
                  }
                  src={fillFolderImg}
                  alt="folder"
                />
              ) : (
                <DirectoryImgBox
                  onClick={() =>
                    navigate(`/archive/savedVideos/inFolder/${item.fileId}`, {
                      state: {
                        menuState: "archive",
                        parentDirectoryId: parentDirectoryId,
                      },
                    })
                  }
                  src={folderImg}
                  alt="folder"
                />
              )}

              <DirectoryName>{item.fileName}</DirectoryName>
              {/* <StarIcon src={starImg} alt="star" /> */}
            </DirectoryBox>
          );
        })}
        <DirectoryBox>
          <div onClick={handleOpenPlusModal}>
            {isOpenPlusModal ? (
              <DirectoryImgBox src={fillFolderImg} alt="folder" />
            ) : (
              <DirectoryImgBox src={folderImg} alt="folder" />
            )}
            <PlusImgBox src={plusImg} alt="+" />
          </div>

          <DirectoryName>새 폴더</DirectoryName>
        </DirectoryBox>
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
  cursor: pointer;
`;

const RootDirectoryComponent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 37px;
  margin: 84px 0px 0px 0px;
  width: 1000px;
  height: inline-flex;
  min-height: 220px;
`;

const DirectoryBox = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 17.188vw; //220px;
  height: 17.188vw; //220px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid var(--Gray-2, #e6e6e6);
  background: var(--White-1, #fff);
`;

const DirectoryImgBox = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  height: 40%;
  flex-shrink: 0;
  cursor: pointer;
`;

const PlusImgBox = styled.img`
  position: absolute;
  left: 50%;
  top: 52%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  cursor: pointer;
`;

const DotImgBox = styled.img`
  position: absolute;
  right: 17px;
  top: 9px;
  width: 24px;
  cursor: pointer;
`;

const DirectoryName = styled.div`
  width: 160px;
  text-align: center;
  position: absolute;
  bottom: 25px;
  color: var(--Gray-8, #373d49);
  /* Body/4 */
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.4px;
`;

const ModalBox = styled.div`
  position: absolute;
  z-index: 2;
  top: 33px;
  right: -39px;
  width: 119px;
  height: 85px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #f4f6f6;
`;

const ModalInTextBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 42.5px;
`;

const ModalInText = styled.div`
  color: var(--Gray-8, #373d49);
  margin: 0px 0px 0px 20px;
  /* Detail/3 */
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 350;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.4px;
  cursor: pointer;
`;

const PatchTotalModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 560px;
  height: 330px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 2px solid var(--Gray-2, #e6e6e6);
  background: #fff;
`;

const PatchTopText = styled.div`
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
`;

const DeleteMiddleText = styled(PatchTopText)`
  margin-top: 126px;
`;

const PatchTitleInput = styled.input`
  margin-top: 30px;
  padding-left: 14px;
  width: 452px;
  height: 56px;
  flex-shrink: 0;
  border-radius: 8px;
  background: var(--Gray-2, #e6e6e6);
  color: var(--Gray-9, #27272e);

  /* Detail/1 */
  font-family: "Noto Sans KR";
  font-size: 24px;
  font-style: normal;
  font-weight: 350;
  line-height: 140%; /* 33.6px */
  letter-spacing: -0.4px;
  outline: none;
  border: none;
`;

const PatchModalButtonComponent = styled.div`
  margin: 63px;
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

const StarIcon = styled.img`
  position: absolute;
  bottom: 23px;
  left: 18px;
  width: 30px;
  height: 30px;
`;
