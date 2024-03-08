/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from "styled-components";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Pagination from "react-js-pagination";
import "../archive-main/components/paging.css";

import bottomArrow from "../../assets/archive/BottomArrow.svg";
import dotImg from "../../assets/archive/DotDotDot.svg";
import folder from "../../assets/archive/Folder.svg";
import fillFolder from "../../assets/archive/FillFolder.svg";
import rightArrow from "../../assets/archive/PlayBtn.svg";
import trash from "../../assets/archive/Trash.svg";
import move from "../../assets/archive/Move.svg";
import xCircle from "../../assets/archive/XCircle.svg";
import plusImg from "../../assets/archive/Plus.svg";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ArchiveSavedVideosDetail = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const { state } = useLocation();
  const parentDirectoryId = state.parentDirectoryId;
  const id = useParams();
  console.log(id);

  //   여기서는 string형이므로 나중에 꼭 number로 바꿔주기
  const directoryIdString = id.directoryId;
  const directoryId = directoryIdString
    ? parseInt(directoryIdString, 10)
    : null;
  // 최상단 디렉토리 정보
  const [rootDirectoryInfo, setRootDirectoryInfo] = useState<any>({});
  // 현재 작업중인 디렉토리 정보
  const [currentDirectoryInfo, setCurrentDirectoryInfo] = useState<any>({});
  // 최상단 디렉토리 내부 폴더들 열린 상태
  const [isOpenRootDirectory, setIsOpenRootDirectory] =
    useState<boolean>(false);
  // 세팅 (삭제,이동) 등 모달 오픈 상태
  const [isOpenSettingDirectory, setIsOpenSettingDirectory] =
    useState<boolean>(false);
  // 어떤 파일인지 파일타입 지정
  type SelectedType = "전체" | "폴더" | "영상" | "캡쳐화면";
  // 선택된 타입
  const [selectedType, setSelectedType] = useState<SelectedType>("전체");
  //페이징을 위한 page 변수선언
  const [page, setPage] = useState<number>(1);
  // 파일 삭제 및 이동 선택할 수 있는 상태
  const [isSelectState, setIsSelectState] = useState<boolean>(false);
  const [selectedFileIds, setSelectedFileIds] = useState<any>([]);
  // 폴더 이동 시 선택된 폴더 정보
  const [selectedFolder, setSelectedFolder] = useState<number | null>(null);
  // 파일 이동 완료 시 상태
  const [isOpenMoveConfirmModal, setIsOpenMoveConfirmModal] = useState(false);
  // 디렉토리 이동 모달 상태
  const [isOpenMoveDirectoryModal, setIsOpenMoveDirectoryModal] =
    useState<boolean>(false);
  // 파일 삭제 완료 시 상태
  const [isOpenConfirmDeleteModal, setIsOpenConfirmDeleteModal] =
    useState<boolean>(false);
  // 새 폴더 만들기 선택 시
  const [isOpenNewFolder, setIsOpenNewFolder] = useState<boolean>(false);
  // 폴더 이름을 관리할 상태
  const [folderName, setFolderName] = useState("");

  // 현재 정보 받기 api
  const getCurrentDirectoryInfo = useCallback(async () => {
    try {
      await axios
        .get(`https://dev.simproject.kr/api/namespaces/${directoryId}`, {
          headers: {
            Authorization: `${token}`,
          },
        })
        .then((res) => {
          setCurrentDirectoryInfo(res.data);
          console.log(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  }, [directoryId, token]);

  // 최상단 정보 받기 api
  const getRootDirectoryInfo = useCallback(async () => {
    try {
      await axios
        .get(`https://dev.simproject.kr/api/namespaces`, {
          headers: {
            Authorization: `${token}`,
          },
        })
        .then((res) => {
          setRootDirectoryInfo(res.data);
          console.log(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  }, [token]);

  // 하나만 열리도록
  const handleRootDirectory = () => {
    if (!isOpenRootDirectory) {
      setIsOpenSettingDirectory(false);
    }
    setIsOpenRootDirectory(!isOpenRootDirectory);
  };
  const handleSettingDirectory = () => {
    if (!isOpenSettingDirectory) {
      setIsOpenRootDirectory(false);
    }
    setIsOpenSettingDirectory(!isOpenSettingDirectory);
  };

  useEffect(() => {
    getCurrentDirectoryInfo();
    getRootDirectoryInfo();
  }, [getCurrentDirectoryInfo, getRootDirectoryInfo, directoryId]);

  // 타입 선택
  const handleSelectType = (type: SelectedType) => {
    setSelectedType(type);
  };

  // 페이지 이동함수
  const handlePageChange = (page: number) => {
    setPage(page);
    console.log(page);
  };

  // 파일을 선택할 수 있는 모드 open, close
  const selectModeOpen = () => {
    setIsSelectState(true);
    setIsOpenSettingDirectory(false);
  };
  const selectModeClose = () => {
    setIsSelectState(false);
    setSelectedFileIds([]);
  };

  // 파일 선택 부분
  const handleFileClick = (fileId: number) => {
    if (isSelectState) {
      setSelectedFileIds((prev: any) => {
        if (prev.includes(fileId)) {
          // 이미 선택된 경우, 선택 해제
          return prev.filter((id: any) => id !== fileId);
        } else {
          // 선택되지 않은 경우, 선택
          return [...prev, fileId];
        }
      });
    }
  };

  // 파일 삭제 시 api
  const deleteSelectedFiles = useCallback(async () => {
    try {
      if (selectedFileIds.length === 0) {
        alert("파일을 선택해주세요.");
        return;
      }

      for (const fileId of selectedFileIds) {
        await axios.delete(
          `https://dev.simproject.kr/api/namespaces/${fileId}`,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );
      }
      getCurrentDirectoryInfo();
      setSelectedFileIds([]); // 선택된 파일 목록 초기화
      setIsSelectState(false);
      setIsOpenConfirmDeleteModal(true);
    } catch (err) {
      console.error(err);
    }
  }, [selectedFileIds, token, getCurrentDirectoryInfo]);

  // 파일 이동 모달창
  const openMoveDirectoryModal = () => {
    if (selectedFileIds.length === 0) {
      alert("파일을 선택해주세요.");
      return;
    } else {
      setIsOpenMoveDirectoryModal(true);
    }
  };

  // 파일 이동 api
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
      closeMoveDirectoryModal();
      setIsOpenMoveConfirmModal(true);
      getCurrentDirectoryInfo();
      setIsSelectState(false);
    } catch (err) {
      console.log(err);
    }
  };

  // 디렉 토리 이동 창 취소
  const closeMoveDirectoryModal = () => {
    setIsOpenMoveDirectoryModal(false);
  };

  // 새 폴더 만들기 누를 시
  const handleOpenNewFolder = () => {
    setIsOpenNewFolder(true);
    setIsOpenMoveDirectoryModal(false);
  };

  // 모달을 닫고 input 값을 초기화하는 함수
  const handleClosePatchModal = () => {
    setFolderName(""); // input 값을 초기화
  };

  // 폴더 이름 input 변경 핸들러
  const handleFolderNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFolderName(event.target.value);
  };

  // 새 폴더 만드는 api
  const plusDirectoryName = useCallback(
    async (directoryName: string) => {
      try {
        await axios
          .post(
            `https://dev.simproject.kr/api/namespaces/${rootDirectoryInfo.directoryId}`,
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
            console.log(res);
            getRootDirectoryInfo();
            setIsOpenNewFolder(false);
            setIsOpenMoveDirectoryModal(true);
          });
      } catch (err) {
        console.log(err);
      }
    },
    [token, parentDirectoryId]
  );

  // 새폴더 만들기 취소
  const handleCloseNewFolder = () => {
    setIsOpenNewFolder(false);
    setIsOpenMoveDirectoryModal(true);
    setFolderName("");
  };

  return (
    <ArchivePopularVideosComponent>
      <Header />
      {/* 파일 이동 모달 */}
      {isOpenMoveConfirmModal && (
        <CompleteModal>
          <MiddleText>이동이 완료되었습니다.</MiddleText>
          <ConfirmDiv
            onClick={() => {
              setIsOpenMoveConfirmModal(false);
            }}
          >
            확인
          </ConfirmDiv>
        </CompleteModal>
      )}
      {/* 파일 삭제 완료 시 모달 */}
      {isOpenConfirmDeleteModal && (
        <CompleteModal>
          <MiddleText>삭제가 완료되었습니다.</MiddleText>
          <ConfirmDiv
            onClick={() => {
              setIsOpenConfirmDeleteModal(false);
            }}
          >
            확인
          </ConfirmDiv>
        </CompleteModal>
      )}

      {/* 파일 이동 모달 */}
      {isOpenMoveDirectoryModal && (
        <SaveModalComponent>
          <OnLoginModalText marginTop="49px">이동할 폴더 선택</OnLoginModalText>
          <SaveModalMiddleComponent>
            <EachSaveFolderComponent onClick={handleOpenNewFolder}>
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
            <PatchModalBtn style={{ borderRight: "2px solid #e6e6e6" }}>
              <PatchModalBtnText onClick={closeMoveDirectoryModal}>
                취소
              </PatchModalBtnText>
            </PatchModalBtn>

            <PatchModalBtn>
              <PatchModalBtnText
                onClick={moveDirectory}
                style={{ color: "#D33B4D" }}
              >
                이동하기
              </PatchModalBtnText>
            </PatchModalBtn>
          </PatchModalButtonComponent>
        </SaveModalComponent>
      )}
      {/* 새폴더 만들기 모달 */}
      {isOpenNewFolder && (
        <CompleteModal>
          <NewFolderTopText>새 폴더 만들기</NewFolderTopText>
          <NewFolderInputDiv
            onChange={handleFolderNameChange}
            value={folderName}
            type="text"
            placeholder="폴더명"
          />
          <PatchModalButtonComponent>
            <NewFolderModalBtn style={{ borderRight: "2px solid #e6e6e6" }}>
              <PatchModalBtnText onClick={handleCloseNewFolder}>
                취소
              </PatchModalBtnText>
            </NewFolderModalBtn>
            <NewFolderModalBtn>
              <PatchModalBtnText
                onClick={() => plusDirectoryName(folderName)}
                style={{ color: "#D33B4D" }}
              >
                확인
              </PatchModalBtnText>
            </NewFolderModalBtn>
          </PatchModalButtonComponent>
        </CompleteModal>
      )}
      <TotalVideoComponent>
        <CenteredInnerComponent>
          {/* 최상단 */}
          <RowComponent>
            <FolderName>{currentDirectoryInfo.directoryName}</FolderName>
            <TopFolderArrow
              src={bottomArrow}
              alt="arrow"
              onClick={handleRootDirectory}
            />
            {/* 오른쪽 화살표 클릭 시 */}
            {isOpenRootDirectory && (
              <RootDirectoryModal>
                {rootDirectoryInfo.fileList?.map((item: any) => {
                  return (
                    <ModalRowComponent key={item.fileId}>
                      {directoryId === item.fileId ? (
                        <>
                          <FolderImg
                            onClick={() => {
                              setIsOpenRootDirectory(false);

                              navigate(
                                `/archive/savedVideos/inFolder/${item.fileId}`,
                                {
                                  state: {
                                    menuState: "archive",
                                    prarentDirectoryId: directoryId,
                                  },
                                }
                              );
                            }}
                            src={fillFolder}
                            alt="folder"
                          />
                          <RootOtherFolderName
                            onClick={() => {
                              setIsOpenRootDirectory(false);

                              navigate(
                                `/archive/savedVideos/inFolder/${item.fileId}`,
                                {
                                  state: {
                                    menuState: "archive",
                                    prarentDirectoryId: directoryId,
                                  },
                                }
                              );
                            }}
                            style={{ color: "#373D49" }}
                          >
                            {item.fileName}
                          </RootOtherFolderName>
                        </>
                      ) : (
                        <>
                          <FolderImg
                            onClick={() => {
                              setIsOpenRootDirectory(false);

                              navigate(
                                `/archive/savedVideos/inFolder/${item.fileId}`,
                                {
                                  state: {
                                    menuState: "archive",
                                    prarentDirectoryId: directoryId,
                                  },
                                }
                              );
                            }}
                            src={folder}
                            alt="folder"
                          />
                          <RootOtherFolderName
                            onClick={() => {
                              setIsOpenRootDirectory(false);

                              navigate(
                                `/archive/savedVideos/inFolder/${item.fileId}`,
                                {
                                  state: {
                                    menuState: "archive",
                                    prarentDirectoryId: directoryId,
                                  },
                                }
                              );
                            }}
                          >
                            {item.fileName}
                          </RootOtherFolderName>
                        </>
                      )}
                    </ModalRowComponent>
                  );
                })}
              </RootDirectoryModal>
            )}
            <TopFolderDot
              src={dotImg}
              alt="..."
              onClick={handleSettingDirectory}
            />
            {/* 세팅 점세개 클릭 시 */}
            {isOpenSettingDirectory && (
              <SettingModal>
                <SettingRowComponent>
                  <SettingText onClick={selectModeOpen}>삭제하기</SettingText>
                </SettingRowComponent>
                <SettingRowComponent>
                  <SettingText onClick={selectModeOpen}>
                    다른 폴더로 이동
                  </SettingText>
                </SettingRowComponent>
              </SettingModal>
            )}
          </RowComponent>
          <RowComponent style={{ marginTop: "20px" }}>
            {selectedType === "전체" ? (
              <FillFileType
                style={{ marginLeft: "0px" }}
                onClick={() => handleSelectType("전체")}
              >
                전체
              </FillFileType>
            ) : (
              <BlankFileType
                style={{ marginLeft: "0px" }}
                onClick={() => handleSelectType("전체")}
              >
                전체
              </BlankFileType>
            )}
            {selectedType === "폴더" ? (
              <FillFileType onClick={() => handleSelectType("폴더")}>
                폴더
              </FillFileType>
            ) : (
              <BlankFileType onClick={() => handleSelectType("폴더")}>
                폴더
              </BlankFileType>
            )}
            {selectedType === "영상" ? (
              <FillFileType onClick={() => handleSelectType("영상")}>
                영상
              </FillFileType>
            ) : (
              <BlankFileType onClick={() => handleSelectType("영상")}>
                영상
              </BlankFileType>
            )}
            {selectedType === "캡쳐화면" ? (
              <FillFileType onClick={() => handleSelectType("캡쳐화면")}>
                캡쳐 화면
              </FillFileType>
            ) : (
              <BlankFileType onClick={() => handleSelectType("캡쳐화면")}>
                캡쳐 화면
              </BlankFileType>
            )}

            {isSelectState ? (
              <StateListBox>
                <StateIcon
                  onClick={deleteSelectedFiles}
                  style={{ marginLeft: "0px" }}
                  src={trash}
                  alt="trash"
                />
                <StateIcon
                  onClick={openMoveDirectoryModal}
                  src={move}
                  alt="move"
                />
                <StateIcon onClick={selectModeClose} src={xCircle} alt="x" />
              </StateListBox>
            ) : (
              <></>
            )}
          </RowComponent>

          {/* 파일 리스틔 띄워주기 */}
          <FileListComponent>
            {currentDirectoryInfo?.fileList?.map((item: any) => {
              console.log(item);
              if (
                item.fileType === "DIRECTORY" &&
                (selectedType === "전체" || selectedType === "폴더")
              ) {
                return (
                  <EachFileComponent>
                    {isSelectState ? (
                      <EachFrame
                        onClick={() => handleFileClick(item.fileId)}
                        style={{
                          border: selectedFileIds.includes(item.fileId)
                            ? "2px solid var(--Main-1, #D33B4D)"
                            : "none",
                        }}
                      >
                        <FolderImgSecond src={folder} alt="folder" />
                      </EachFrame>
                    ) : (
                      <EachFrame
                        onClick={() =>
                          navigate(
                            `/archive/savedVideos/inFolder/${item.fileId}`,
                            {
                              state: {
                                menuState: "archive",
                                prarentDirectoryId: directoryId,
                              },
                            }
                          )
                        }
                        style={{
                          border: selectedFileIds.includes(item.fileId)
                            ? "2px solid var(--Main-1, #D33B4D)"
                            : "none",
                        }}
                      >
                        <FolderImgSecond src={folder} alt="folder" />
                      </EachFrame>
                    )}

                    <InLineFlex>폴더</InLineFlex>
                    <FileTitle>{item.fileName}</FileTitle>
                  </EachFileComponent>
                );
              }
              if (
                item.fileType === "ADVERTISE" &&
                (selectedType === "전체" || selectedType === "영상")
              ) {
                // 비디오 고유 아이디 추출하기
                const url = item.videoUrl;
                const extractVideoId = (url: string): string | undefined => {
                  const urlObj = new URL(url);
                  const videoID = urlObj.searchParams.get("v");
                  return videoID || undefined;
                };
                const videoId = extractVideoId(url);
                const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;

                return (
                  <EachFileComponent>
                    {isSelectState ? (
                      <EachFrame
                        style={{
                          border: selectedFileIds.includes(item.fileId)
                            ? "2px solid var(--Main-1, #D33B4D)"
                            : "none",
                        }}
                        onClick={() => handleFileClick(item.fileId)}
                      >
                        <ThumnailImg
                          src={thumbnailUrl}
                          alt="YouTube Thumbnail"
                        />
                        <PlayBtn src={rightArrow} alt=">" />
                      </EachFrame>
                    ) : (
                      <EachFrame
                        onClick={() => {
                          navigate(`/archive/detail/${item.domainId}`, {
                            state: {
                              menuState: "archive",
                              videoInfo: { advertiseId: item.domainId },
                            },
                          });
                        }}
                      >
                        <ThumnailImg
                          src={thumbnailUrl}
                          alt="YouTube Thumbnail"
                        />
                        <PlayBtn src={rightArrow} alt=">" />
                      </EachFrame>
                    )}

                    <InLineFlex>영상</InLineFlex>
                    <FileTitle>{item.fileName}</FileTitle>
                  </EachFileComponent>
                );
              }

              if (
                item.fileType === "IMAGE" &&
                (selectedType === "전체" || selectedType === "캡쳐화면")
              ) {
                return (
                  <EachFileComponent>
                    {isSelectState ? (
                      <EachFrame
                        style={{
                          border: selectedFileIds.includes(item.fileId)
                            ? "2px solid var(--Main-1, #D33B4D)"
                            : "none",
                        }}
                        onClick={() => handleFileClick(item.fileId)}
                      >
                        <ThumnailImg
                          src={item.imageUrl}
                          alt="YouTube Thumbnail"
                        />
                      </EachFrame>
                    ) : (
                      <EachFrame
                        onClick={() => {
                          navigate(`/archive/detail/${item.domainId}`, {
                            state: {
                              menuState: "archive",
                              videoInfo: { advertiseId: item.domainId },
                            },
                          });
                        }}
                      >
                        <ThumnailImg
                          src={item.imageUrl}
                          alt="YouTube Thumbnail"
                        />
                      </EachFrame>
                    )}

                    <InLineFlex>캡쳐 장면</InLineFlex>
                    <FileTitle>{item.fileName}</FileTitle>
                  </EachFileComponent>
                );
              }
            })}
          </FileListComponent>
        </CenteredInnerComponent>
      </TotalVideoComponent>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "30px 0px 128px 0px",
        }}
      >
        <Pagination
          activePage={page}
          itemsCountPerPage={28}
          totalItemsCount={139}
          pageRangeDisplayed={3}
          prevPageText={"‹"}
          nextPageText={"›"}
          onChange={handlePageChange}
        />
      </div>
      <Footer />
    </ArchivePopularVideosComponent>
  );
};

export default ArchiveSavedVideosDetail;

const ArchivePopularVideosComponent = styled.div`
  width: 100vw;
`;

const TotalVideoComponent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 199px;
  width: 100vw;
  height: 2630px;
  background-color: #fff;
`;

// 내부 일정 너비로 가운데 정렬
const CenteredInnerComponent = styled.div`
  width: 77.813vw;
  height: 100%;
`;

const RowComponent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const FolderName = styled.div`
  color: var(--Gray-9, #27272e);
  font-family: "Noto Sans KR";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 33.6px */
  letter-spacing: -0.4px;
`;

const TopFolderArrow = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
const TopFolderDot = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const RootDirectoryModal = styled.div`
  position: absolute;
  top: 45px;
  left: -60px;
  padding: 14px 26px 26px 26px;
  min-width: 207px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #f4f6f6;
  z-index: 1;
`;

const ModalRowComponent = styled.div`
  display: flex;
  align-items: center;
  margin: 12px 0px 0px 0px;
`;

const FolderImg = styled.img`
  width: 44px;
  height: 44px;
  cursor: pointer;
`;

const FolderImgSecond = styled.img`
  width: 66px;
  height: 66px;
  cursor: pointer;
`;

const RootOtherFolderName = styled.div`
  color: var(--Gray-7, #707887);
  margin-left: 10px;
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 28px */
  letter-spacing: -0.4px;
  cursor: pointer;
`;

const SettingModal = styled.div`
  position: absolute;
  top: 45px;
  left: 78px;
  width: 145px;
  height: 88px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #f4f6f6;
  z-index: 1;
`;

const SettingRowComponent = styled.div`
  display: flex;
  align-items: center;
  height: 44px;
  width: 100%;
`;

const SettingText = styled.div`
  color: var(--Gray-8, #373d49);
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 350;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.4px;
  margin-left: 20px;
  cursor: pointer;
`;

const BlankFileType = styled.button`
  display: inline-flex;
  padding: 5px 18px;
  margin: 0px 0px 0px 11px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 19px;
  border: 2px solid var(--Main-1, #d33b4d);
  background: var(--White-1, #fff);
  color: var(--Main-1, #d33b4d);
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 28px */
  letter-spacing: -0.4px;
  cursor: pointer;
`;

const FillFileType = styled(BlankFileType)`
  background: var(--Main-1, #d33b4d);
  color: var(--White-1, #fff);
  border: 2px solid var(--Main-1, #d33b4d);
`;

const FileListComponent = styled.div`
  margin-top: 36px;
  width: 100%;
  height: 2500px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 281px 281px 281px 281px 281px 281px 251px;
  gap: 44px 1.205%;
  margin: 36px 0px 0px 0px;
`;

const EachFileComponent = styled.div`
  height: 223px;
  width: 18.75vw;
`;

const EachFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 10.546875vw;
  min-height: 135px;
  border-radius: 10px;
  background: #d9d9d9;
  overflow: hidden;
`;

const PlayBtn = styled.img`
  width: 56px;
  height: 56px;
  position: absolute;
`;

const InLineFlex = styled.div`
  margin: 10px 0px 0px 10px;
  display: inline-flex;
  padding: 3px 10px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 20px;
  background: var(--Sub-2, #ffecee);
  color: var(--Main-1, #d33b4d);
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.4px;
`;

const FileTitle = styled.div`
  margin: 8px 0px 0px 10px;
  color: var(--Gray-9, #27272e);
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.4px;
  height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const ThumnailImg = styled.img`
  width: 100%;
  min-height: 135px;
  height: 10.546875vw;
`;

const StateListBox = styled.div`
  position: absolute;
  right: 0;
  margin-top: 16px;
  display: flex;
  height: 46px;
  width: 170px;
`;

const StateIcon = styled.img`
  margin-left: 18px;
  width: 46px;
  height: 46px;
  cursor: pointer;
`;

const CompleteModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 560px;
  height: 330px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 2px solid var(--Gray-2, #e6e6e6);
  background: #fff;
  z-index: 3;
`;

const MiddleText = styled.div`
  color: var(--Gray-8, #373d49);
  text-align: center;
  margin-top: 126px;
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
  font-family: "Noto Sans KR";
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 39.2px */
  letter-spacing: -0.4px;
  margin-top: 72px;
  border-top: 1px solid #e6e6e6;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

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
  margin: 51px 0px 30px;
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
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 350;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.4px;
  overflow: hidden;
`;

const OnLoginModalText = styled.div<{ marginTop?: string }>`
  margin-top: 49px;
  color: var(--Gray-8, #373d49);
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 39.2px */
  letter-spacing: -0.4px;
  margin-top: ${(props) => props.marginTop || "0px"};
`;

const NewFolderTopText = styled.div`
  color: var(--Gray-8, #373d49);
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 39.2px */
  letter-spacing: -0.4px;
  margin-top: 49px;
`;

const NewFolderInputDiv = styled.input`
  padding-left: 14px;
  margin-top: 30px;
  width: 452px;
  height: 56px;
  flex-shrink: 0;
  border-radius: 8px;
  background: var(--Gray-2, #e6e6e6);
  color: var(--Gray-9, #27272e);
  border: none;
  outline: none;
  font-family: "Noto Sans KR";
  font-size: 24px;
  font-style: normal;
  font-weight: 350;
  line-height: 140%; /* 33.6px */
  letter-spacing: -0.4px;
`;

const PatchModalButtonComponent = styled.div`
  margin: 63px;
  width: 100%;
  height: 30px;
  display: flex;
  border-top: 2px solid #e6e6e6;
`;

const PatchModalBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 281px;
  height: 92px;
`;

const NewFolderModalBtn = styled(PatchModalBtn)`
  height: 86px;
`;

const PatchModalBtnText = styled.div`
  color: var(--Gray-7, #707887);
  font-family: "Noto Sans KR";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 33.6px */
  letter-spacing: -0.4px;
  cursor: pointer;
`;
