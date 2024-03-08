/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import questionImg from "../../../assets/archive/Question.svg";

import "swiper/swiper-bundle.css";
import "swiper/css";
import SwiperCore from "swiper";
import EachVideo from "../../../components/EachVideo";
import { Tooltip } from "react-tooltip";
import EachVideoSample from "../../../components/EachVideoSample";

SwiperCore.use([Navigation]);

// 슬라이드 컴포넌트(인기있는인지, 내가 찜한인지 sector로 확인)
//trend:2023트렌드 popular:인기있는, save:내가 찜한
const SwiperVideo = ({ sector, videos }: any) => {
  const navigate = useNavigate();
  const nextButtonClass = `swiper-button-next-${sector}`;
  const prevButtonClass = `swiper-button-prev-${sector}`;
  return (
    <TotalComponent>
      {/* 제일 위 sector 표시 */}
      <TopRowFlexComponent>
        <TopLabel>
          {sector === "trend"
            ? "2023 광고 트렌드"
            : sector === "popular"
            ? "최근 인기있는 영상"
            : "내가 찜한 영상"}
        </TopLabel>

        {sector === "trend" ? (
          <div style={{ zIndex: "2" }}>
            <TotalTopQuestionImgBox
              src={questionImg}
              alt="?"
              data-tooltip-id="trend-tooltip"
              data-tooltip-place="bottom"
            />
            <Tooltip style={{ zIndex: "2" }} id="trend-tooltip">
              <TooltipComponent>
                <div>'2023 광고 트렌드'는 YOUTUBE WORKS</div>
                <div>AWARDS의 수상작을 노출합니다.</div>
              </TooltipComponent>
            </Tooltip>
          </div>
        ) : sector === "popular" ? (
          <div>
            <TotalTopQuestionImgBox
              src={questionImg}
              alt="?"
              data-tooltip-id="popular-tooltip"
              data-tooltip-place="bottom"
            />
            <Tooltip style={{ zIndex: "2" }} id="popular-tooltip">
              <TooltipComponent>
                <div>최근 한 달 동안 가장 많이 시청된</div>
                <div>영상으로 정렬되었습니다.</div>
              </TooltipComponent>
            </Tooltip>
          </div>
        ) : (
          <></>
        )}

        {/* sector state로 넘겨주기 */}
        {sector === "trend" ? (
          <></>
        ) : sector === "popular" ? (
          <AdditionalVideo
            onClick={() => {
              navigate("/archive/popularVideos", {
                state: {
                  menuState: "archive",
                },
              });
            }}
          >
            전체 보기
          </AdditionalVideo>
        ) : (
          <AdditionalVideo
            onClick={() => {
              navigate("/archive/savedVideos", {
                state: {
                  menuState: "archive",
                },
              });
            }}
          >
            전체 보기
          </AdditionalVideo>
        )}
      </TopRowFlexComponent>

      {/* 비디오 슬라이드 처리 */}
      <VideosComponent>
        <Swiper
          navigation={{
            // Navigation options
            nextEl: `.${nextButtonClass}`,
            prevEl: `.${prevButtonClass}`,
          }}
          style={{ width: "100%", margin: "33px 0px 0px" }}
          spaceBetween={16}
          slidesPerView={4.5}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {sector==="popular"&&
            <SwiperSlide key="999">
              <EachVideoSample />
            </SwiperSlide>
          }
          {videos?.map((videoInfo: any) => {
            return (
              <SwiperSlide key={videoInfo.videoId}>
                {/* EachVideo는 하나의 비디오 부분 */}
                <EachVideo sector={sector} videoInfo={videoInfo} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* 화살표 부분 */}
        <PrevSlide className={`swiper-button-prev ${prevButtonClass}`} />{" "}
        {/* Next button */}
        <NextSlide className={`swiper-button-next ${nextButtonClass}`} />{" "}
        {/* Next button */}
      </VideosComponent>
    </TotalComponent>
  );
};

export default SwiperVideo;

const TotalComponent = styled.div`
  width: 100%;
  height: 100%;
`;

// 제일 위 sector
const TopRowFlexComponent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const TopLabel = styled.div`
  color: var(--Gray-9, #27272e);
  height: 34px;
  font-family: "Noto Sans KR";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.4px;
`;

const TotalTopQuestionImgBox = styled.img`
  margin: 0px 0px 0px 12px;
  width: 23px;
  height: 23px;
  flex-shrink: 0;
  fill: var(--Gray-3, #bebebe);
`;

const TooltipComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  fill: var(--Gray-8, #373d49);
  color: var(--Gray-1, #f4f6f6);
  text-align: center;

  font-family: "Noto Sans KR";
  font-size: 14px;
  font-style: normal;
  font-weight: 350;
  line-height: 140%;
  letter-spacing: -0.4px;
`;

const VideosComponent = styled.div`
  position: relative;
  width: 100%;
  height: 234px;
`;

const PrevSlide = styled.div`
  z-index: 1;

  &::after {
    z-index: 1;
    position: absolute;
    top: -92%;
    right: 72px; // 오른쪽 여백 조정
    color: #fff;
    background-color: #d33b4d;
    width: 30px; // 화살표 크기 조정
    height: 30px; // 화살표 크기 조정
    font-size: 14px; // 화살표 표시에 사용되는 텍스트나 아이콘의 크기 조정
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%; // 화살표 버튼을 원형으로 디자인
  }
`;

const NextSlide = styled.div`
  z-index: 1;

  &::after {
    z-index: 1;
    position: absolute;
    top: -92%;
    right: 72px; // 오른쪽 여백 조정
    color: #fff;
    background-color: #d33b4d;
    width: 30px; // 화살표 크기 조정
    height: 30px; // 화살표 크기 조정
    font-size: 14px; // 화살표 표시에 사용되는 텍스트나 아이콘의 크기 조정
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%; // 화살표 버튼을 원형으로 디자인
  }
`;

// 전체보기 버튼
const AdditionalVideo = styled.div`
  position: absolute;
  right: 11.875vw;
  color: var(--Gray-9, #27272e);
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.4px;
  cursor: pointer;
`;
