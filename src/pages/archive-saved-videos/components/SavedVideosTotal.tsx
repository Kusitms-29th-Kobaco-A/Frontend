/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import dotImg from '../../../assets/archive/DotDotDot.svg';
import folderImg from '../../../assets/archive/Folder.svg';
import fillFolderImg from '../../../assets/archive/FillFolder.svg';
import plusImg from '../../../assets/archive/Plus.svg';

const SavedVideosTotal = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const [directoryInfo, setDirectoryInfo] = useState<any>([]);
  const parentDirectoryId = directoryInfo.directoryId;
  // 모달 상태를 관리하기 위한 새로운 상태 추가
  const [isOpenDotModal, setIsOpenDotModal] = useState<boolean>(false);
  const [openModalId, setOpenModalId] = useState<null | number>(null);
  // 수정 모달 상태
  const [isOpenPatchModal, setIsOpenPatchModal] = useState<boolean>(false);
  // 현재 수정 중인 디렉토리id저장 부분
  const [currentEditingId, setCurrentEditingId] = useState<number | null>(null);
  // 폴더 이름을 관리할 상태
  const [folderName, setFolderName] = useState('');
  // 폴더 삭제 상태
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);
  // 새폴더 만들기 상태
  const [isOpenPlusModal, setIsOpenPlusModal] = useState<boolean>(false);

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

  // 모달 바깥 선택 시
  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsOpenDotModal(false);
    }
  };

  // 폴더 목록 받기 api
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

  // 모달 이외 부분 선택 시
  const handleOpenPatchModal =
    (fileId: number) => (event: React.MouseEvent) => {
      event.stopPropagation(); // 이벤트 버블링을 막음
      setCurrentEditingId(fileId); // 현재 수정 중인 폴더 ID 설정
      setOpenModalId(null); // 기존 dot modal 닫기
      setIsOpenPatchModal(true); // patchModal 열기
      // 필요한 경우 여기서 fileId를 사용하여 추가 로직 처리
    };

  // 모달을 닫고 input 값을 초기화하는 함수
  const handleClosePatchModal = () => {
    setIsOpenPatchModal(false);
    setFolderName(''); // input 값을 초기화
  };

  // 폴더 이름 input 변경 핸들러
  const handleFolderNameChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFolderName(event.target.value);
  };

  // 디렉토리 이름 수정 api
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
            },
          )
          .then((res) => {
            setIsOpenPatchModal(false); // 모달 닫기
            getSavedVidosFolder();
          });
      } catch (err) {
        console.log(err);
      }
    },
    [token],
  );

  // delete모달 이외부분 클릭 시
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

  // 디렉토리 삭제 api
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
            },
          )
          .then((res) => {
            setIsOpenDeleteModal(false); // 모달 닫기
            getSavedVidosFolder();
          });
      } catch (err) {
        console.log(err);
      }
    },
    [token],
  );

  const handleOpenPlusModal = (event: React.MouseEvent) => {
    event.stopPropagation(); // 이벤트 버블링을 막음
    setIsOpenPlusModal(true); // patchModal 열기
    // 필요한 경우 여기서 fileId를 사용하여 추가 로직 처리
  };

  // 모달을 닫고 input 값을 초기화하는 함수
  const handleClosePlusModal = () => {
    setIsOpenPlusModal(false);
  };

  // 새폴더 만들기 api
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
            },
          )
          .then((res) => {
            setIsOpenPlusModal(false); // 모달 닫기
            getSavedVidosFolder();
          });
      } catch (err) {
        console.log(err);
      }
    },
    [token, parentDirectoryId],
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

    document.addEventListener('click', handleClickOutside);
    if (!isOpenPatchModal) {
      setFolderName(''); // 모달이 닫힐 때 input 값을 초기화
    }
    if (!isOpenPlusModal) {
      setFolderName(''); // 모달이 닫힐 때 input 값을 초기화
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
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
      </TotalTopRowFlexComponent>
      <RootDirectoryComponent>
        {/* 디렉토리 이름 수정 */}
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
              <PatchModalBtn style={{ borderRight: '2px solid #e6e6e6' }}>
                <PatchModalBtnText onClick={handleClosePatchModal}>
                  취소
                </PatchModalBtnText>
              </PatchModalBtn>
              <PatchModalBtn>
                <PatchModalBtnText
                  style={{ color: '#D33B4D' }}
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
        {/* 디렉토리 삭제 */}
        {isOpenDeleteModal && (
          <PatchTotalModal>
            <DeleteMiddleText>해당 폴더를 삭제하시겠습니까?</DeleteMiddleText>
            <PatchModalButtonComponent>
              <PatchModalBtn style={{ borderRight: '2px solid #e6e6e6' }}>
                <PatchModalBtnText onClick={handleCloseDeleteModal}>
                  취소
                </PatchModalBtnText>
              </PatchModalBtn>
              <PatchModalBtn>
                <PatchModalBtnText
                  style={{ color: '#D33B4D' }}
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
        {/* 새 폴더 만들기 */}
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
              <PatchModalBtn style={{ borderRight: '2px solid #e6e6e6' }}>
                <PatchModalBtnText onClick={handleClosePlusModal}>
                  취소
                </PatchModalBtnText>
              </PatchModalBtn>
              <PatchModalBtn>
                <PatchModalBtnText
                  onClick={() => plusDirectoryName(folderName)}
                  style={{ color: '#D33B4D' }}
                >
                  확인
                </PatchModalBtnText>
              </PatchModalBtn>
            </PatchModalButtonComponent>
          </PatchTotalModal>
        )}

        {/* 디렉토리 리스트 화면에 보여주기 */}
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
                        menuState: 'archive',
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
                        menuState: 'archive',
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
  font-family: 'Noto Sans KR';
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.4px;
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
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
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
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-style: normal;
  font-weight: 350;
  line-height: 140%;
  letter-spacing: -0.4px;
  cursor: pointer;
`;

const PatchTotalModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
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
  font-family: 'Noto Sans KR';
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
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

  font-family: 'Noto Sans KR';
  font-size: 24px;
  font-style: normal;
  font-weight: 350;
  line-height: 140%;
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
  font-family: 'Noto Sans KR';
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.4px;
  cursor: pointer;
`;
