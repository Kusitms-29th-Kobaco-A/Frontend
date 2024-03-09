/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components';
import SideBar from './SideBar';
import thumbsUp from '../../../assets/archive/ThumbsUp.svg';
import heart from '../../../assets/archive/Heart.svg';
import camera from '../../../assets/archive/Camera.svg';
import fillThumbsUp from '../../../assets/archive/FillThumbsUp.svg';
import question from '../../../assets/archive/Question.svg';
import axios from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';
import chartFirst from '../../../assets/archive/ChartFirst.svg';
import chartSecond from '../../../assets/archive/ChartSecond.svg';

import html2canvas from 'html2canvas';
import newYoutubeUrl from '../../../assets//archive/cocacola.mp4';

const TotalVideosComponent = ({ videoInfo }: any) => {
  const token = localStorage.getItem('token');
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
    likeCount: 16,
  });

  const [selectedSector, setSelectedSector] = useState('기본정보');

  const handleClickSector = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.value;
    setSelectedSector(value);
  };

  useEffect(() => {
    getRootDirectoryInfo();
  }, [getRootDirectoryInfo]);

  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isCaptureClicked, setIsCaptureClicked] = useState(false);

  const handleCapture = async () => {
    setIsCaptureClicked(true); // 클릭 상태를 true로 설정
    setTimeout(() => {
      setIsCaptureClicked(false); // 0.5초 후 클릭 상태를 false로 재설정
    }, 400); // 400 밀리초 설정

    if (videoRef.current) {
      const videoElement = videoRef.current;

      // 동영상 요소를 캡쳐합니다.
      html2canvas(videoElement).then(async (canvas) => {
        // 캡쳐된 이미지를 base64 형태로 가져옵니다.
        const capturedImageUrl = canvas.toDataURL('image/png');
        setCapturedImage(capturedImageUrl);
        console.log(capturedImageUrl);

        // Base64 문자열에서 데이터 URL 접두어를 제거합니다.
        const base64Data = capturedImageUrl.split(',')[1];

        // base64 문자열을 바이너리 형태로 변환합니다.
        const byteCharacters = atob(base64Data);
        const byteArrays = [];

        for (let offset = 0; offset < byteCharacters.length; offset += 512) {
          const slice = byteCharacters.slice(offset, offset + 512);
          const byteNumbers = new Array(slice.length);
          for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
          }
          const byteArray = new Uint8Array(byteNumbers);
          byteArrays.push(byteArray);
        }

        // Blob 객체를 생성합니다.
        const blob = new Blob(byteArrays, { type: 'image/png' });

        // FormData 객체를 생성하고 Blob을 추가합니다.
        const formData = new FormData();
        formData.append('imageFile', blob, 'capture.png');

        // FormData를 사용하여 백엔드로 파일을 전송합니다.
        try {
          const response = await axios.post(
            `https://dev.simproject.kr/api/saves/advertises/8/capture`,
            formData,
            {
              headers: {
                Authorization: token,
                'Content-Type': 'multipart/form-data',
              },
            },
          );
          console.log('캡쳐 및 전송 성공', response.data);
        } catch (error) {
          console.error('캡쳐 및 전송 실패', error);
        }
      });
    }
  };

  return (
    <TotalComponent>
      {/* {isConfirmSaveModal && (
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
      )} */}

      {/* 왼쪽 영상정보 보여주는 부분 */}
      <LeftInfoComponent>
        {/* 유튜브 영상 띄워주는 부분 */}
        <YoutubeFrameBox>
          <video
            width="100%"
            ref={videoRef}
            src={newYoutubeUrl}
            controls
            loop
          />
        </YoutubeFrameBox>

        {/* {capturedImage && (
          <img
            style={{ width: "400px", height: "300px" }}
            src={capturedImage}
            alt="캡쳐된 이미지"
          />
        )} */}

        {/* 제목 */}
        <VideoTitle>{videoInfo.title}</VideoTitle>
        {/* 영상 날짜 */}
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
            <UnderDateBtn style={{ borderColor: '#d33b4d' }}>
              <UnderDateBtnIcon src={fillThumbsUp} alt="thumbsUp" />
              <UnderDateBtnText style={{ color: '#D33B4D' }}>
                {videoLike.likeCount}
              </UnderDateBtnText>
            </UnderDateBtn>
          ) : (
            <UnderDateBtn>
              <UnderDateBtnIcon src={thumbsUp} alt="thumbsUp" />
              <UnderDateBtnText>{videoLike.likeCount}</UnderDateBtnText>
            </UnderDateBtn>
          )}

          <UnderDateBtn margin="0px 0px 0px 12px">
            <UnderDateBtnIcon src={heart} alt="heart" />
            <UnderDateBtnText>찜</UnderDateBtnText>
          </UnderDateBtn>
          {/* <UnderDateBtn onClick={handleCapture} margin="0px 0px 0px 12px">
            <UnderDateBtnIcon src={camera} alt="camera" />
            <UnderDateBtnText>장면 캡쳐</UnderDateBtnText>
          </UnderDateBtn> */}
          <UnderDateBtn
            onClick={handleCapture}
            margin="0px 0px 0px 12px"
            style={{ borderColor: isCaptureClicked ? '#d33b4d' : '#bfc7d1' }}
          >
            <UnderDateBtnIcon
              src={camera}
              alt="camera"
              style={{
                filter: isCaptureClicked
                  ? 'invert(23%) sepia(100%) saturate(7500%) hue-rotate(346deg) brightness(95%) contrast(89%)'
                  : 'initial',
              }}
            />
            <UnderDateBtnText
              style={{ color: isCaptureClicked ? '#D33B4D' : '#707887' }}
            >
              장면 캡쳐
            </UnderDateBtnText>
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
      <SideBar />
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
  font-family: 'Noto Sans KR';
  font-size: 24px; //2.813vw; //36px
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.4px;
`;

const UnderTitleRowDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

const VideoView = styled.div`
  color: var(--Gray-7, #707887);

  /* Body/3 */
  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 28px */
  letter-spacing: -0.4px;
`;

const VideoDate = styled.div`
  margin: 0px 0px 0px 30.38px;
  color: var(--Gray-7, #707887);
  font-family: 'Noto Sans KR';
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
  display: inline-flex;
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
  line-height: 140%; /* 28px */
  letter-spacing: -0.4px;
  cursor: pointer;
`;

const TextBox = styled.div<{ margin?: any }>`
  margin: ${(props) => props.margin || '33px 0px 0px 30px'};
  display: flex;
  align-items: center;
`;

const GraphText = styled.div`
  color: #000;
  margin-left: 8px;
  /* Subtitle/1 */
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
