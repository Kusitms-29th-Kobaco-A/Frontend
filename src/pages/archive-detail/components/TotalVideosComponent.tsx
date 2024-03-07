/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from "styled-components";
import SideBar from "./SideBar";
import YouTube, { YouTubeProps } from "react-youtube";
import thumbsUp from "../../../assets/archive/ThumbsUp.svg";
import heart from "../../../assets/archive/Heart.svg";
import folder from "../../../assets/archive/Folder.svg";
import camera from "../../../assets/archive/Camera.svg";
import fillThumbsUp from "../../../assets/archive/FillThumbsUp.svg";
import fillHeart from "../../../assets/archive/FillHeart.svg";
import plusImg from "../../../assets/archive/Plus.svg";
import fillCamera from "../../../assets/archive/FillCamera.svg";
import question from "../../../assets/archive/Question.svg";
import warning from "../../../assets/archive/Warning.svg";
import xIcon from "../../../assets/archive/XIcon.svg";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectDirectory from "../../../components/SelectDirectory";
import chartFirst from "../../../assets/archive/ChartFirst.svg";
import chartSecond from "../../../assets/archive/ChartSecond.svg";
import fillFolder from "../../../assets/archive/FillFolder.svg";

const TotalVideosComponent = ({ advertiseId, videoInfo }: any) => {
  const token = localStorage.getItem("token");
  // console.log(token);
  const id = advertiseId.advertiseId;
  const navigate = useNavigate();

  const [rootDirectoryInfo, setRootDirectoryInfo] = useState<any>({});

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

  const [videoLike, setVideoLike] = useState({
    isLike: false,
    likeCount: 0,
  });

  // 비디오 고유 아이디 추출하기
  const url = videoInfo.videoUrl;
  const extractVideoId = (url: string): string | undefined => {
    const urlObj = new URL(url);
    const videoID = urlObj.searchParams.get("v");
    return videoID || undefined;
  };
  const videoId = extractVideoId(url);

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };

  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 0,
      // cc_load_policy: 1,

      rel: 0,
      modestbranding: 1,
    },
  };

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

  const modifyVideoLike = useCallback(async () => {
    if (token) {
      try {
        const token = localStorage.getItem("token");
        console.log(token);
        await axios
          .patch(
            `https://dev.simproject.kr/api/advertises/${id}/like`,
            {},
            {
              headers: { Authorization: `${token}` },
            }
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

  useEffect(() => {
    getRootDirectoryInfo();
    getIsLike();
  }, [getRootDirectoryInfo, getIsLike]);

  const [isOpenLoginWarning, setIsOpenLoginWarning] = useState<any>(false);
  const [isOpenSaveModal, setIsOpenSaveModal] = useState<any>(false);
  const [isOpenCopyModal, setIsOpenCopyModal] = useState<any>(false);

  // 모달을 닫고 input 값을 초기화하는 함수
  const handleCloseLoginWarninghModal = () => {
    setIsOpenLoginWarning(false);
  };

  const handleLoginWarningModal = () => {
    setIsOpenLoginWarning(true);
  };

  const handleClickSaveBtn = () => {
    if (token) {
      setIsOpenSaveModal(true);
    } else {
      handleLoginWarningModal();
    }
  };

  const handleClickCopyBtn = () => {
    if (token) {
      setIsOpenCopyModal(true);
    } else {
      handleLoginWarningModal();
    }
  };

  const [selectedSector, setSelectedSector] = useState("기본정보");

  const handleClickSector = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.value;
    setSelectedSector(value);
  };

  const [selectedFolder, setSelectedFolder] = useState<number | null>(null);

  const [isOpenNewFolder, setIsOpenNewFolder] = useState<boolean>(false);

  const handleOpenNewFolder = () => {
    setIsOpenNewFolder(true);
    setIsOpenSaveModal(false);
  };

  const closeSaveModal = () => {
    setIsOpenSaveModal(false);
  };

  const [folderName, setFolderName] = useState(""); // 폴더 이름을 관리할 상태

  // 폴더 이름 input 변경 핸들러
  const handleFolderNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFolderName(event.target.value);
  };

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
          }
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
            setFolderName("");
            setIsOpenSaveModal(true);
          });
      } catch (err) {
        console.log(err);
      }
    },
    [token, getRootDirectoryInfo]
  );

  const handleCloseNewFolder = () => {
    setIsOpenNewFolder(false);
    setIsOpenSaveModal(true);
    setFolderName("");
  };

  const [isConfirmSaveModal, setIsConfirmSaveModal] = useState<boolean>(false);

  return (
    <TotalComponent>
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

      {isOpenLoginWarning && (
        <PatchTotalModal>
          <WarningIcon src={warning} alt="warning" />
          <OnLoginModalText marginTop="17px">해당 서비스는</OnLoginModalText>
          <OnLoginModalText>로그인 후 사용할 수 있습니다.</OnLoginModalText>
          <PatchModalButtonComponent>
            <PatchModalBtn style={{ borderRight: "2px solid #e6e6e6" }}>
              <PatchModalBtnText onClick={handleCloseLoginWarninghModal}>
                취소
              </PatchModalBtnText>
            </PatchModalBtn>
            <PatchModalBtn>
              <PatchModalBtnText
                onClick={() => {
                  navigate("/login");
                }}
                style={{ color: "#D33B4D" }}
              >
                로그인
              </PatchModalBtnText>
            </PatchModalBtn>
          </PatchModalButtonComponent>
        </PatchTotalModal>
      )}
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
            <PatchModalBtn style={{ borderRight: "2px solid #e6e6e6" }}>
              <PatchModalBtnText onClick={closeSaveModal}>
                취소
              </PatchModalBtnText>
            </PatchModalBtn>

            <PatchModalBtn>
              <PatchModalBtnText
                onClick={saveDirectory}
                style={{ color: "#D33B4D" }}
              >
                확인
              </PatchModalBtnText>
            </PatchModalBtn>
          </PatchModalButtonComponent>
        </SaveModalComponent>
      )}
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
          </NewModalButtonComponent>
        </CompleteModal>
      )}

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
            style={{ width: "55.78vw", height: "31.377vw" }}
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
        {/* 영상 날짜 */}
        <VideoDate>{videoInfo.uploadDate}</VideoDate>
        {/* 추천,찜,캡처 */}
        <UnderDateRowComponent>
          {videoLike.isLike ? (
            <UnderDateBtn
              onClick={modifyVideoLike}
              style={{ borderColor: "#d33b4d" }}
            >
              <UnderDateBtnIcon src={fillThumbsUp} alt="thumbsUp" />
              <UnderDateBtnText style={{ color: "#D33B4D" }}>
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
          <UnderDateQuestionImg src={question} alt="?" />
        </UnderDateRowComponent>

        <SelectSectorComponent>
          {selectedSector === "기본정보" ? (
            <SelectedSector value="기본정보">기본 정보</SelectedSector>
          ) : (
            <UnSelectedSector onClick={handleClickSector} value="기본정보">
              기본 정보
            </UnSelectedSector>
          )}
          {selectedSector === "광고효과" ? (
            <SelectedSector value="광고효과" style={{ marginLeft: "39px" }}>
              광고 효과
            </SelectedSector>
          ) : (
            <UnSelectedSector
              onClick={handleClickSector}
              value="광고효과"
              style={{ marginLeft: "39px" }}
            >
              광고 효과
            </UnSelectedSector>
          )}
        </SelectSectorComponent>

        {selectedSector === "기본정보" ? (
          <EtcInfoComponent>
            <KeywordListRowComponent>
              {videoInfo.keywordList?.map((item: any) => {
                return <KeywordText>#{item}</KeywordText>;
              })}
            </KeywordListRowComponent>
            <AdCopyLabel>카피 저장</AdCopyLabel>
            <AdCopyContent>{videoInfo.copyDetail}</AdCopyContent>
            <AdCopyRowComponent>
              <AdCopyBtn onClick={handleClickCopyBtn}>카피 저장</AdCopyBtn>
              <UnderDateQuestionImg src={question} alt="?" />
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
              <UnderCopyEachBox>
                <UnderCopyLabelText>사물</UnderCopyLabelText>
                <UnderCopyAnswerRowComponent>
                  {videoInfo.objectList?.map((item: any) => {
                    return <UnderCopyAnswerText>{item}</UnderCopyAnswerText>;
                  })}
                </UnderCopyAnswerRowComponent>
              </UnderCopyEachBox>
            </UnderCopyRowComponent>
            <OtherInfoRowComponent margin="78px 0px 0px 10px">
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
          </EtcInfoComponent>
        ) : (
          <EtcInfoComponent>
            <TextBox>
              <GraphTextRed>외식업</GraphTextRed>
              <GraphText>광고 소재 키워드 검색량 추이</GraphText>
            </TextBox>
            <GraphFirstBox src={chartFirst} alt="graph" />
            <TextBox style={{ marginTop: "44px" }}>
              <GraphTextRed>치킨</GraphTextRed>
              <GraphText>소비자 구매 트렌드</GraphText>
            </TextBox>
            <GraphSecondBox src={chartSecond} alt="graph" />
          </EtcInfoComponent>
        )}
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

const LeftInfoComponent = styled.div`
  width: 71.68675%; //55.78vw;
  height: 100%;
`;

const YoutubeFrameBox = styled.div`
  width: 55.78vw;
  height: 31.377vw;
  overflow: hidden;
  border-radius: 10px;
  background: #d9d9d9;
`;

const VideoTitle = styled.div`
  display: inline-flex;
  margin: 16px 0px 0px 0px;
  color: var(--Gray-9, #27272e);
  font-family: "Noto Sans KR";
  font-size: 24px; //2.813vw; //36px
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.4px;
`;

const VideoDate = styled.div`
  margin: 16px 0px 0px 0px;
  color: var(--Gray-7, #707887);
  font-family: "Noto Sans KR";
  font-size: 20px; //20px;
  font-style: normal;
  font-weight: 350;
  line-height: 140%;
  letter-spacing: -0.4px;
`;

// 날짜 밑 row 컴포넌트
const UnderDateRowComponent = styled.div`
  height: 42px;
  margin: 30px 0px 0px 0px;
  display: flex;
  align-items: center;
`;

// 버튼 내부요소
const UnderDateBtn = styled.div<{ margin?: any }>`
  height: 42px;
  margin: ${(props) => props.margin || "0px"};
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
  font-family: "Noto Sans KR";
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
  padding: 34px 0px 33px 0px;
  margin: 30px 0px 0px 0px;
  width: 100%;
  flex-shrink: 0;
  border-radius: 16px;
`;

const KeywordListRowComponent = styled.div`
  display: flex;
  margin: 0px 0px 0px 0px;
`;

const KeywordText = styled.div`
  margin: 0px 0px 0px 10px;
  color: var(--Main-1, #d33b4d);
  text-align: center;

  /* Body/3 */
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 28px */
  letter-spacing: -0.4px;
`;

const AdCopyLabel = styled.div`
  margin: 28px 0px 0px 10px;
  color: var(--Gray-9, #27272e);

  /* Subtitle/1 */
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 28px */
  letter-spacing: -0.4px;
`;

const AdCopyContent = styled.div`
  margin: 0px 0px 0px 10px;
  width: 479px;
  display: inline-flex;
  color: var(--Gray-8, #373d49);
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 350;
  line-height: 177%; /* 28.32px */
  letter-spacing: -0.4px;
`;

const AdCopyRowComponent = styled.div`
  margin: 15px 0px 0px 10px;
  display: flex;
  align-items: center;
`;
const AdCopyBtn = styled.button`
  display: inline-flex;
  padding: 8px 12px;
  align-items: center;
  gap: 4px;
  border-radius: 21.5px;
  border: 1px solid var(--Main-1, #d33b4d);
  color: var(--Main-1, #d33b4d);
  text-align: center;
  background-color: #fff;
  /* Body/4 */
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  /* line-height: 140%; 22.4px */
  letter-spacing: -0.4px;
  cursor: pointer;
`;

const UnderCopyRowComponent = styled.div`
  margin: 78px 0px 0px 10px;
  display: inline-flex;
`;

const UnderCopyEachBox = styled.div`
  width: 211px;
`;

const UnderCopyLabelText = styled.div`
  color: var(--Gray-9, #27272e);

  /* Subtitle/1 */
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 28px */
  letter-spacing: -0.4px;
`;

const UnderCopyAnswerRowComponent = styled.div`
  margin: 20px 0px 0px 0px;
  display: grid;
  grid-template-columns: max-content max-content;
  gap: 4px;
`;

const UnderCopyAnswerText = styled.div`
  display: inline-flex;
  padding: 3px 10px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 20px;
  background: var(--Sub-2, #ffecee);
  color: var(--Main-1, #d33b4d);
  text-align: center;

  /* Body/5 */
  font-family: "Noto Sans KR";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.4px;
`;

const OtherInfoRowComponent = styled.div<{ margin?: any }>`
  display: flex;
  height: 22px;
  margin: ${(props) => props.margin || "10px 0px 0px 10px"};
`;

const OtherInfoLabel = styled.div`
  color: var(--Gray-9, #27272e);
  width: 58px;
  /* Body/4 */
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.4px;
`;

const OtherInfoAnswer = styled.div`
  color: var(--Gray-9, #27272e);
  /* Body/4 */
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 350;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.4px;
  margin: 0px 0px 0px 22px;
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
const WarningIcon = styled.img`
  margin: 27px 0px 0px 0px;
  width: 80px;
  height: 80px;
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

const OnLoginModalText = styled(PatchTopText)<{ marginTop?: string }>`
  margin-top: ${(props) => props.marginTop || "0px"};
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

  /* Body/2 */
  font-family: "Noto Sans KR";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 33.6px */
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

  /* Detail/3 */
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 350;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.4px;
  overflow: hidden;
`;

const CopyModalComponent = styled(PatchTotalModal)``;

const CopyContent = styled.div`
  margin-top: 28px;
  color: var(--Gray-8, #373d49);
  text-align: center;
  width: 401px;
  /* Detail/1 */
  font-family: "Noto Sans KR";
  font-size: 24px;
  font-style: normal;
  font-weight: 350;
  line-height: 140%; /* 33.6px */
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
  /* Body/1 */
  font-family: "Noto Sans KR";
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 39.2px */
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

const SelectSectorComponent = styled.div`
  margin-top: 41px;
  display: flex;
  align-items: center;
`;

const SelectedSector = styled.button`
  display: flex;
  width: 85px;
  height: 27.99px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: var(--Gray-8, #373d49);
  text-align: center;
  padding-bottom: 2px;

  /* Body/3 */
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 28px */
  letter-spacing: -0.4px;
  border: none;
  border-bottom: 2px solid var(--Main-1, #d33b4d);
  background-color: #fff;
  cursor: pointer;
`;

const UnSelectedSector = styled.button`
  display: flex;
  width: 85px;
  height: 27.99px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: var(--Gray-7, #707887);
  text-align: center;
  border: none;
  background-color: #fff;
  /* Body/3 */
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 28px */
  letter-spacing: -0.4px;
  cursor: pointer;
`;

const TextBox = styled.div`
  display: flex;
  align-items: center;
`;

const GraphText = styled.div`
  color: #000;
  margin-left: 8px;
  /* Subtitle/1 */
  font-family: "Noto Sans KR";
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
  margin-top: 38px;
  display: block;
  width: 667px;
  height: 298px;
`;

const GraphSecondBox = styled.img`
  display: block;
  margin-top: 46px;
  width: 637px;
  height: 238px;
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

  /* Body/1 */
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
  /* Detail/1 */
  font-family: "Noto Sans KR";
  font-size: 24px;
  font-style: normal;
  font-weight: 350;
  line-height: 140%; /* 33.6px */
  letter-spacing: -0.4px;
`;

const NewFolderModalBtn = styled(PatchModalBtn)`
  height: 86px;
`;

const ConfirmSaveModalText = styled.div`
  margin-top: 126px;
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

const ConfirmSaveModalConfirm = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 93px;
  color: var(--Main-1, #d33b4d);
  margin-top: 72px;
  border-top: 1px solid #e6e6e6;
  /* Body/1 */
  font-family: "Noto Sans KR";
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 39.2px */
  letter-spacing: -0.4px;
  cursor: pointer;
`;
