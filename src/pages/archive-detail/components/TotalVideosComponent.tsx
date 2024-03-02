/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from "styled-components";
import SideBar from "./SideBar";
import YouTube, { YouTubeProps } from "react-youtube";
import thumbsUp from "../../../assets/archive/ThumbsUp.svg";
import heart from "../../../assets/archive/Heart.svg";
import camera from "../../../assets/archive/Camera.svg";
import fillThumbsUp from "../../../assets/archive/FillThumbsUp.svg";
import fillHeart from "../../../assets/archive/FillHeart.svg";
import fillCamera from "../../../assets/archive/FillCamera.svg";
import question from "../../../assets/archive/Question.svg";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const TotalVideosComponent = ({ advertiseId, videoInfo }: any) => {
  const token = localStorage.getItem("token");
  // console.log(token);
  const id = advertiseId.advertiseId;

  const [videoLike, setVideoLike] = useState({
    isLike: false,
    likeCount: 0,
  });

  // 비디오 고유 아이디 추출하기
  const url = videoInfo.videoUrl;
  const extractVideoId = (url: string): string | undefined => {
    const urlObj = new URL(url);
    return urlObj.pathname.substring(1);
  };
  const videoId = extractVideoId(url);

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 0,
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
  }, []);

  useEffect(() => {
    getIsLike();
  }, [getIsLike]);

  return (
    <TotalComponent>
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

          <UnderDateBtn margin="0px 0px 0px 12px">
            <UnderDateBtnIcon src={heart} alt="heart" />
            <UnderDateBtnText>찜</UnderDateBtnText>
          </UnderDateBtn>
          <UnderDateBtn margin="0px 0px 0px 12px">
            <UnderDateBtnIcon src={camera} alt="camera" />
            <UnderDateBtnText>장면 캡쳐</UnderDateBtnText>
          </UnderDateBtn>
          <UnderDateQuestionImg src={question} alt="?" />
        </UnderDateRowComponent>
        <EtcInfoComponent>
          <KeywordListRowComponent>
            {videoInfo.keywordList?.map((item: any) => {
              return <KeywordText>#{item}</KeywordText>;
            })}
          </KeywordListRowComponent>
          <AdCopyLabel>{videoInfo.copy}</AdCopyLabel>
          <AdCopyContent>{videoInfo.copyDetail}</AdCopyContent>
          <AdCopyRowComponent>
            <AdCopyBtn>카피 저장</AdCopyBtn>
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
          <OtherInfoRowComponent margin="78px 0px 0px 35px">
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
  font-size: 2.813vw; //36px
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.4px;
`;

const VideoDate = styled.div`
  margin: 16px 0px 0px 0px;
  color: var(--Gray-7, #707887);
  font-family: "Noto Sans KR";
  font-size: 1.563vw; //20px;
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
  border: 1px solid var(--Gray-6, #bfc7d1);
`;

const KeywordListRowComponent = styled.div`
  display: flex;
  margin: 0px 0px 0px 25px;
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
  margin: 28px 0px 0px 35px;
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
  margin: 0px 0px 0px 35px;
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
  margin: 15px 0px 0px 35px;
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
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.4px;
`;

const UnderCopyRowComponent = styled.div`
  margin: 78px 0px 0px 35px;
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
  margin: ${(props) => props.margin || "10px 0px 0px 35px"};
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
