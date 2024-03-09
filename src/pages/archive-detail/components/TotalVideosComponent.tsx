/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components';

import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import YouTube, { YouTubeProps } from 'react-youtube';

import thumbsUp from '../../../assets/archive/ThumbsUp.svg';
import heart from '../../../assets/archive/Heart.svg';
import folder from '../../../assets/archive/Folder.svg';
import camera from '../../../assets/archive/Camera.svg';
import fillThumbsUp from '../../../assets/archive/FillThumbsUp.svg';
import plusImg from '../../../assets/archive/Plus.svg';
import question from '../../../assets/archive/Question.svg';
import warning from '../../../assets/archive/Warning.svg';
import xIcon from '../../../assets/archive/XIcon.svg';
import chartFirst from '../../../assets/archive/ChartFirst.svg';
import chartSecond from '../../../assets/archive/ChartSecond.svg';
import fillFolder from '../../../assets/archive/FillFolder.svg';

import SideBar from './SideBar';

const TotalVideosComponent = ({ advertiseId, videoInfo }: any) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const id = advertiseId.advertiseId;
  // 최상단 폴더 정보
  const [rootDirectoryInfo, setRootDirectoryInfo] = useState<any>({});
  // 비디오 좋아요 정보
  const [videoLike, setVideoLike] = useState({
    isLike: false,
    likeCount: 0,
  });
  // 모달창 관련 상태 정보
  const [isOpenLoginWarning, setIsOpenLoginWarning] = useState<any>(false);
  const [isOpenSaveModal, setIsOpenSaveModal] = useState<any>(false);
  const [isOpenCopyModal, setIsOpenCopyModal] = useState<any>(false);
  //아래 Etc 영상관련 정보에서 어느 부분을 보여줄 지 상태 정보
  const [selectedSector, setSelectedSector] = useState('기본정보');
  // 찜하기 시 선택된 폴더 정보
  const [selectedFolder, setSelectedFolder] = useState<number | null>(null);
  // 찜하기에서 새 폴더 만들기 클릭 시 정보
  const [isOpenNewFolder, setIsOpenNewFolder] = useState<boolean>(false);
  // 폴더 이름을 관리할 상태
  const [folderName, setFolderName] = useState('');
  // 찜하기 완료 되었다는 모달 상태
  const [isConfirmSaveModal, setIsConfirmSaveModal] = useState<boolean>(false);

  //  최상단 폴더 정보 받기 api
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

  // 비디오 고유 아이디 추출하기
  const url = videoInfo.videoUrl;
  const extractVideoId = (url: string): string | undefined => {
    const urlObj = new URL(url);
    const videoID = urlObj.searchParams.get('v');
    return videoID || undefined;
  };
  const videoId = extractVideoId(url);

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.pauseVideo();
  };

  const opts = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 0,
      // cc_load_policy: 1,

      rel: 0,
      modestbranding: 1,
    },
  };

  // 좋아요 정보 받기 api
  const getIsLike = useCallback(async () => {
    try {
      await axios
        .get(`https://dev.simproject.kr/api/advertises/${id}/like`, {
          headers: { Authorization: `${token}` },
        })
        .then((res) => {
          setVideoLike(res.data);
          console.log(res);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  // 좋아요 버튼 누르기 api
  const modifyVideoLike = useCallback(async () => {
    if (token) {
      try {
        const token = localStorage.getItem('token');
        console.log(token);
        await axios
          .patch(
            `https://dev.simproject.kr/api/advertises/${id}/like`,
            {},
            {
              headers: { Authorization: `${token}` },
            },
          )
          .then((res) => {
            getIsLike();
            console.log(res);
          });
      } catch (err) {
        console.log(err);
      }
    } else {
      handleLoginWarningModal();
    }
  }, []);

  // 로그인 경고 모달 지우기
  const handleCloseLoginWarninghModal = () => {
    setIsOpenLoginWarning(false);
  };

  // 로그인 경고 모달 띄우기
  const handleLoginWarningModal = () => {
    setIsOpenLoginWarning(true);
  };

  // 찜하기 버튼 클릭 시
  const handleClickSaveBtn = () => {
    if (token) {
      setIsOpenSaveModal(true);
    } else {
      handleLoginWarningModal();
    }
  };

  // 카피 저장 부분 클릭 시
  const handleClickCopyBtn = () => {
    if (token) {
      setIsOpenCopyModal(true);
    } else {
      handleLoginWarningModal();
    }
  };

  // 섹터 선택 부분
  const handleClickSector = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.value;
    setSelectedSector(value);
  };

  // 찜하기 선택 시
  const handleOpenNewFolder = () => {
    setIsOpenNewFolder(true);
    setIsOpenSaveModal(false);
  };

  // 찜하기 선택 후 취소 버튼
  const closeSaveModal = () => {
    setIsOpenSaveModal(false);
  };

  // 폴더 이름 input 변경 핸들러
  const handleFolderNameChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFolderName(event.target.value);
  };

  // 찜하기에서 폴더 선택 후 찜하기 누를 시 api
  const saveDirectory = async () => {
    try {
      await axios
        .post(
          `https://dev.simproject.kr/api/saves/advertises`,
          {
            advertiseId: id,
            directoryId: selectedFolder,
          },
          {
            headers: {
              Authorization: `${token}`,
            },
          },
        )
        .then((res) => {
          console.log(res);
          setIsOpenSaveModal(false);
          setIsConfirmSaveModal(true);
        });
    } catch (err) {
      console.log(err);
    }
  };

  // 새 폴더 만들기 시 폴더 만드는 api
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
            },
          )
          .then((res) => {
            console.log(res);
            getRootDirectoryInfo();
            setIsOpenNewFolder(false);
            setFolderName('');
            setIsOpenSaveModal(true);
          });
      } catch (err) {
        console.log(err);
      }
    },
    [token, getRootDirectoryInfo, rootDirectoryInfo.directoryId],
  );

  // 새 폴더 만들기 취소 시
  const handleCloseNewFolder = () => {
    setIsOpenNewFolder(false);
    setIsOpenSaveModal(true);
    setFolderName('');
  };

  useEffect(() => {
    getRootDirectoryInfo();
    getIsLike();
  }, [getRootDirectoryInfo, getIsLike]);

  return (
    <TotalComponent>
      {/* 찜하기 완료 모달 */}
      {isConfirmSaveModal && (
        <PatchTotalModal>
          <ConfirmSaveModalText>찜하기가 완료되었습니다.</ConfirmSaveModalText>
          <ConfirmSaveModalConfirm
            onClick={() => {
              setIsConfirmSaveModal(false);
            }}
          >
            확인
          </ConfirmSaveModalConfirm>
        </PatchTotalModal>
      )}

      {/* 로그인 경고 창 모달 */}
      {isOpenLoginWarning && (
        <PatchTotalModal>
          <WarningIcon src={warning} alt="warning" />
          <OnLoginModalText marginTop="17px">해당 서비스는</OnLoginModalText>
          <OnLoginModalText>로그인 후 사용할 수 있습니다.</OnLoginModalText>
          <PatchModalButtonComponent>
            <PatchModalBtn style={{ borderRight: '2px solid #e6e6e6' }}>
              <PatchModalBtnText onClick={handleCloseLoginWarninghModal}>
                취소
              </PatchModalBtnText>
            </PatchModalBtn>
            <PatchModalBtn>
              <PatchModalBtnText
                onClick={() => {
                  navigate('/login');
                }}
                style={{ color: '#D33B4D' }}
              >
                로그인
              </PatchModalBtnText>
            </PatchModalBtn>
          </PatchModalButtonComponent>
        </PatchTotalModal>
      )}
      {/* 찜하기 누를시 나오는 모달 */}
      {isOpenSaveModal && (
        <SaveModalComponent>
          <OnLoginModalText marginTop="49px">찜할 폴더 선택</OnLoginModalText>
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
            <PatchModalBtn style={{ borderRight: '2px solid #e6e6e6' }}>
              <PatchModalBtnText onClick={closeSaveModal}>
                취소
              </PatchModalBtnText>
            </PatchModalBtn>

            <PatchModalBtn>
              <PatchModalBtnText
                onClick={saveDirectory}
                style={{ color: '#D33B4D' }}
              >
                확인
              </PatchModalBtnText>
            </PatchModalBtn>
          </PatchModalButtonComponent>
        </SaveModalComponent>
      )}
      {/* 새폴더 만들기 누를 시 나오는 모달 */}
      {isOpenNewFolder && (
        <CompleteModal>
          <NewFolderTopText>새 폴더 만들기</NewFolderTopText>
          <NewFolderInputDiv
            onChange={handleFolderNameChange}
            value={folderName}
            type="text"
            placeholder="폴더명"
          />
          <NewModalButtonComponent>
            <NewFolderModalBtn style={{ borderRight: '2px solid #e6e6e6' }}>
              <PatchModalBtnText onClick={handleCloseNewFolder}>
                취소
              </PatchModalBtnText>
            </NewFolderModalBtn>
            <NewFolderModalBtn>
              <PatchModalBtnText
                onClick={() => plusDirectoryName(folderName)}
                style={{ color: '#D33B4D' }}
              >
                확인
              </PatchModalBtnText>
            </NewFolderModalBtn>
          </NewModalButtonComponent>
        </CompleteModal>
      )}

      {/* 카피 저장  모달 */}
      {isOpenCopyModal && (
        <CopyModalComponent>
          <XImg onClick={() => setIsOpenCopyModal(false)} src={xIcon} alt="X" />
          <OnLoginModalText marginTop="63px">
            카피 문구가 저장되었습니다.
          </OnLoginModalText>
          <CopyContent>
            저장한 카피 문구는 '스토리보드 제작'에서 확인할 수 있어요!
          </CopyContent>
          <CopyModalBottom>보러가기</CopyModalBottom>
        </CopyModalComponent>
      )}

      {/* 왼쪽 영상정보 보여주는 부분 */}
      <LeftInfoComponent>
        {/* 유튜브 영상 띄워주는 부분 */}
        <YoutubeFrameBox>
          <YouTube
            style={{ width: '55.78vw', height: '31.377vw' }}
            // https://youtu.be/NFcp_8np3e8 //마지막 슬래쉬 뒤에 있는 것이 id이다.
            videoId={videoId}
            //opts(옵션들): 플레이어의 크기나 다양한 플레이어 매개 변수를 사용할 수 있음.
            opts={opts}
            //이벤트 리스너
            onReady={onPlayerReady}
          />
        </YoutubeFrameBox>
        {/* 제목 */}
        <VideoTitle>{videoInfo.title}</VideoTitle>
        {/* 조회수 및 영상날짜 */}
        <UnderTitleRowDiv>
          <VideoView>조회수</VideoView>
          <VideoView style={{ marginLeft: '6px' }}>
            {videoInfo.viewCount}회
          </VideoView>
          <VideoDate>{videoInfo.uploadDate}</VideoDate>
        </UnderTitleRowDiv>

        {/* 추천,찜,캡처 */}
        <UnderDateRowComponent>
          {videoLike.isLike ? (
            <UnderDateBtn
              onClick={modifyVideoLike}
              style={{ borderColor: '#d33b4d' }}
            >
              <UnderDateBtnIcon src={fillThumbsUp} alt="thumbsUp" />
              <UnderDateBtnText style={{ color: '#D33B4D' }}>
                {videoLike.likeCount}
              </UnderDateBtnText>
            </UnderDateBtn>
          ) : (
            <UnderDateBtn onClick={modifyVideoLike}>
              <UnderDateBtnIcon src={thumbsUp} alt="thumbsUp" />
              <UnderDateBtnText>{videoLike.likeCount}</UnderDateBtnText>
            </UnderDateBtn>
          )}

          <UnderDateBtn onClick={handleClickSaveBtn} margin="0px 0px 0px 12px">
            <UnderDateBtnIcon src={heart} alt="heart" />
            <UnderDateBtnText>찜</UnderDateBtnText>
          </UnderDateBtn>
          <UnderDateBtn margin="0px 0px 0px 12px">
            <UnderDateBtnIcon src={camera} alt="camera" />
            <UnderDateBtnText>장면 캡쳐</UnderDateBtnText>
          </UnderDateBtn>
        </UnderDateRowComponent>

        <EtcInfoComponent>
          <SelectSectorComponent>
            {selectedSector === '기본정보' ? (
              <SelectedSector value="기본정보">기본 정보</SelectedSector>
            ) : (
              <UnSelectedSector onClick={handleClickSector} value="기본정보">
                기본 정보
              </UnSelectedSector>
            )}
            {selectedSector === '광고효과' ? (
              <SelectedSector value="광고효과" style={{ marginLeft: '39px' }}>
                광고 효과
              </SelectedSector>
            ) : (
              <UnSelectedSector
                onClick={handleClickSector}
                value="광고효과"
                style={{ marginLeft: '39px' }}
              >
                광고 효과
              </UnSelectedSector>
            )}
          </SelectSectorComponent>
          {selectedSector === '기본정보' ? (
            <>
              <KeywordLabel>키워드</KeywordLabel>
              <KeywordListRowComponent>
                {videoInfo.keywordList?.map((item: any) => {
                  return <KeywordText>#{item}</KeywordText>;
                })}
              </KeywordListRowComponent>
              <AdCopyLabel>광고 카피</AdCopyLabel>
              <AdCopyContent>{videoInfo.copyDetail}</AdCopyContent>
              <AdCopyRowComponent>
                <AdCopyBtn>카피 저장</AdCopyBtn>
              </AdCopyRowComponent>
              <UnderCopyRowComponent>
                <UnderCopyEachBox>
                  <UnderCopyLabelText>인물</UnderCopyLabelText>
                  <UnderCopyAnswerRowComponent>
                    {videoInfo.peopleList?.map((item: any) => {
                      return <UnderCopyAnswerText>{item}</UnderCopyAnswerText>;
                    })}
                  </UnderCopyAnswerRowComponent>
                </UnderCopyEachBox>
                <UnderCopyEachBox margin="0px 0px 0px 10px">
                  <UnderCopyLabelText>사물</UnderCopyLabelText>
                  <UnderCopyAnswerRowComponent>
                    {videoInfo.objectList?.map((item: any) => {
                      return <UnderCopyAnswerText>{item}</UnderCopyAnswerText>;
                    })}
                  </UnderCopyAnswerRowComponent>
                </UnderCopyEachBox>
              </UnderCopyRowComponent>
              <OtherInfoRowComponent margin="30px 0px 0px 30px">
                <OtherInfoLabel>광고주</OtherInfoLabel>
                <OtherInfoAnswer>{videoInfo.owner}</OtherInfoAnswer>
              </OtherInfoRowComponent>
              <OtherInfoRowComponent>
                <OtherInfoLabel>광고회사</OtherInfoLabel>
                <OtherInfoAnswer>{videoInfo.ownerCompany}</OtherInfoAnswer>
              </OtherInfoRowComponent>
              <OtherInfoRowComponent>
                <OtherInfoLabel>제작사</OtherInfoLabel>
                <OtherInfoAnswer>{videoInfo.makerCompany}</OtherInfoAnswer>
              </OtherInfoRowComponent>
            </>
          ) : (
            <>
              <TextBox>
                <GraphTextRed>외식업</GraphTextRed>
                <GraphText>광고 소재 키워드 검색량 추이</GraphText>
              </TextBox>
              <GraphFirstBox src={chartFirst} alt="graph" />
              <TextBox margin="65px 0px 0px 30px">
                <GraphTextRed>치킨</GraphTextRed>
                <GraphText>소비자 구매 트렌드</GraphText>
              </TextBox>
              <GraphSecondBox src={chartSecond} alt="graph" />
            </>
          )}
        </EtcInfoComponent>
      </LeftInfoComponent>
      {/* 오른쪽 추가 영상 보여주는 부분 */}
      <SideBar advertiseId={id} />
    </TotalComponent>
  );
};

export default TotalVideosComponent;

const TotalComponent = styled.div`
  display: flex;
  width: 100%;
  min-height: 1228px;
`;

// 왼쪽 영상 정보 보여주기 컴포넌트
const LeftInfoComponent = styled.div`
  width: 71.68675%;
  height: 100%;
`;

// 영상 부분
const YoutubeFrameBox = styled.div`
  width: 55.78vw;
  height: 31.377vw;
  overflow: hidden;
  border-radius: 10px;
  background: #d9d9d9;
`;

//제목
const VideoTitle = styled.div`
  display: inline-flex;
  margin: 16px 0px 0px 0px;
  color: var(--Gray-9, #27272e);
  font-family: 'Noto Sans KR';
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.4px;
`;

// 제목 아래 조회수와 년도 보여주는 컴포넌트
const UnderTitleRowDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 16px;
`;
const VideoView = styled.div`
  color: var(--Gray-7, #707887);
  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.4px;
`;
const VideoDate = styled.div`
  margin: 0px 0px 0px 30.38px;
  color: var(--Gray-7, #707887);
  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-style: normal;
  font-weight: 350;
  line-height: 140%;
  letter-spacing: -0.4px;
`;

// 좋아요, 찜하기, 장면 캡쳐 부분 컴포넌트
const UnderDateRowComponent = styled.div`
  height: 42px;
  margin: 30px 0px 0px 0px;
  display: flex;
  align-items: center;
`;
const UnderDateBtn = styled.div<{ margin?: any }>`
  height: 42px;
  margin: ${(props) => props.margin || '0px'};
  display: inline-flex;
  padding: 0px 16px;
  align-items: center;
  gap: 4px;
  border-radius: 21.5px;
  border: 1px solid var(--Gray-6, #bfc7d1);
  cursor: pointer;
`;
const UnderDateBtnIcon = styled.img`
  width: 24px;
  height: 24px;
`;
const UnderDateBtnText = styled.div`
  color: var(--Gray-7, #707887);
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-style: normal;
  font-weight: 350;
  line-height: 140%;
  letter-spacing: -0.4px;
`;
const UnderDateQuestionImg = styled.img`
  width: 23px;
  height: 23px;
  margin: 0px 0px 0px 8px;
`;

// 광고카피, 인물, 사물 등 이외 정보부분
const EtcInfoComponent = styled.div`
  padding: 26px 0px 40px 0px;
  margin: 22px 0px 0px 0px;
  width: 100%;
  border: 1px solid #a0a0a0;
  flex-shrink: 0;
  border-radius: 20px;
`;

const KeywordLabel = styled.div`
  margin: 25px 0px 0px 30px;
  color: var(--Gray-9, #27272e);
  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.4px;
`;

const KeywordListRowComponent = styled.div`
  display: flex;
  margin: 8px 0px 0px 15px;
`;

const KeywordText = styled.div<{ margin?: any }>`
  margin: ${(props) => props.margin || '0px 0px 0px 15px'};
  color: var(--Main-1, #d33b4d);
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.4px;
`;

const AdCopyLabel = styled.div`
  margin: 30px 0px 0px 30px;
  color: var(--Gray-9, #27272e);
  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.4px;
`;

const AdCopyContent = styled.div`
  margin: 8px 0px 0px 30px;
  width: 379px;
  display: inline-flex;
  color: var(--Gray-8, #373d49);
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-style: normal;
  font-weight: 350;
  line-height: 177%; /* 28.32px */
  letter-spacing: -0.4px;
`;

const AdCopyRowComponent = styled.div`
  margin: 14px 0px 0px 30px;
  display: flex;
  align-items: center;
`;

const AdCopyBtn = styled.button`
  display: inline-flex;
  padding: 4px 9px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 17px;
  border: 1px solid var(--Main-1, #d33b4d);
  color: var(--Main-1, #d33b4d);
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.4px;
`;

const UnderCopyRowComponent = styled.div`
  margin: 30px 0px 0px 30px;
  display: flex;
`;

const UnderCopyEachBox = styled.div<{ margin?: any }>`
  /* margin 10값 더둠 */
  min-width: 280px;
  margin: ${(props) => props.margin || '0px'};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const UnderCopyLabelText = styled.div`
  color: var(--Gray-9, #27272e);
  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.4px;
`;

const UnderCopyAnswerRowComponent = styled.div`
  margin: 20px 0px 0px 0px;
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: 1fr 1fr;
  gap: 8px 10px;
`;

const UnderCopyAnswerText = styled.div`
  width: max-content;
  display: inline-flex;
  padding: 4px 13px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background: var(--Sub-2, #ffecee);
  color: var(--Main-1, #d33b4d);
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  line-height: 140%;
  letter-spacing: -0.4px;
`;

// 광고주, 제작사 등 이외 정보
const OtherInfoRowComponent = styled.div<{ margin?: any }>`
  display: flex;
  height: 22px;
  margin: ${(props) => props.margin || '10px 0px 0px 30px'};
`;

const OtherInfoLabel = styled.div`
  color: var(--Gray-9, #27272e);
  width: 58px;
  /* Body/4 */
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.4px;
`;

const OtherInfoAnswer = styled.div`
  color: var(--Gray-9, #27272e);
  /* Body/4 */
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-style: normal;
  font-weight: 350;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.4px;
  margin: 0px 0px 0px 22px;
`;

// 모달창
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
const WarningIcon = styled.img`
  margin: 27px 0px 0px 0px;
  width: 80px;
  height: 80px;
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

const OnLoginModalText = styled(PatchTopText)<{ marginTop?: string }>`
  margin-top: ${(props) => props.marginTop || '0px'};
`;

const PatchModalButtonComponent = styled.div`
  margin: 35px 0px 0px 0px;
  width: 100%;
  display: flex;
  border-top: 2px solid #e6e6e6;
`;
const NewModalButtonComponent = styled(PatchModalButtonComponent)`
  margin: 65px 0px 0px 0px;
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

const SaveModalComponent = styled(PatchTotalModal)`
  height: 500px;
`;
const SaveModalMiddleComponent = styled.div`
  width: 460px;
  height: 175px;
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
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-style: normal;
  font-weight: 350;
  line-height: 140%;
  letter-spacing: -0.4px;
  overflow: hidden;
`;

const CopyModalComponent = styled(PatchTotalModal)``;
const CopyContent = styled.div`
  margin-top: 28px;
  color: var(--Gray-8, #373d49);
  text-align: center;
  width: 401px;
  font-family: 'Noto Sans KR';
  font-size: 24px;
  font-style: normal;
  font-weight: 350;
  line-height: 140%;
  letter-spacing: -0.4px;
`;
const CopyModalBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #e6e6e6;
  color: var(--Main-1, #d33b4d);
  text-align: center;
  margin: 39px 0px 0px 0px;
  width: 100%;
  height: 93px;
  font-family: 'Noto Sans KR';
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.4px;
  cursor: pointer;
`;
const XImg = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 28px;
  right: 28px;
  cursor: pointer;
`;

// 섹터 선택 부분
const SelectSectorComponent = styled.div`
  margin-left: 30px;
  display: flex;
  align-items: center;
`;

const SelectedSector = styled.button`
  display: flex;
  width: 77px;
  height: 27.99px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: var(--Gray-8, #373d49);
  text-align: center;
  padding-bottom: 2px;
  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.4px;
  border: none;
  border-bottom: 2px solid var(--Main-1, #d33b4d);
  background-color: #fff;
  cursor: pointer;
`;
const UnSelectedSector = styled.button`
  display: flex;
  width: 77px;
  height: 27.99px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: var(--Gray-7, #707887);
  text-align: center;
  border: none;
  background-color: #fff;
  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.4px;
  cursor: pointer;
`;

// 광고효과 섹터 부분
const TextBox = styled.div<{ margin?: any }>`
  margin: ${(props) => props.margin || '33px 0px 0px 30px'};
  display: flex;
  align-items: center;
`;

const GraphText = styled.div`
  color: #000;
  margin-left: 8px;
  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.4px;
`;
const GraphTextRed = styled(GraphText)`
  color: #d33b4d;
  margin-left: 0px;
`;
const GraphFirstBox = styled.img`
  margin: 28px 0px 0px 30px;
  display: block;
  width: 642px;
  height: 287px;
`;

const GraphSecondBox = styled.img`
  display: block;
  margin: 21px 0px 0px 54px;
  width: 612px;
  height: 229px;
`;

const CompleteModal = styled.div`
  position: fixed;
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

const NewFolderTopText = styled.div`
  color: var(--Gray-8, #373d49);
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
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
  font-family: 'Noto Sans KR';
  font-size: 24px;
  font-style: normal;
  font-weight: 350;
  line-height: 140%;
  letter-spacing: -0.4px;
`;
const NewFolderModalBtn = styled(PatchModalBtn)`
  height: 86px;
`;
const ConfirmSaveModalText = styled.div`
  margin-top: 126px;
  color: var(--Gray-8, #373d49);
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.4px;
`;
const ConfirmSaveModalConfirm = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 93px;
  color: var(--Main-1, #d33b4d);
  margin-top: 72px;
  border-top: 1px solid #e6e6e6;
  font-family: 'Noto Sans KR';
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.4px;
  cursor: pointer;
`;
