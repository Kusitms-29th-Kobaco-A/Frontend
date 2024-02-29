/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";

// 슬라이드 처리 위한 Swiper 임포트
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import EachVideo from "../../../components/EachVideo";
SwiperCore.use([Navigation]);

// 슬라이드 컴포넌트(인기있는인지, 내가 찜한인지 sector로 확인)
//popular:인기있는, save:내가 찜한
const SwiperVideo = ({ sector, videos }: any) => {
  return (
    <TotalComponent>
      {/* 제일 위 sector 표시 */}
      <TopRowFlexComponent>
        <TopLabel>
          {sector === "popular" ? "최근 인기있는 영상" : "내가 찜한 영상"}
        </TopLabel>

        {/* sector state로 넘겨주기 */}
        <AdditionalVideo>전체 보기</AdditionalVideo>
      </TopRowFlexComponent>

      {/* 비디오 슬라이드 처리 */}
      <VideosComponent>
        <Swiper
          navigation={{
            // Navigation options
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          style={{ width: "100%", margin: "33px 0px 0px" }}
          spaceBetween={16}
          slidesPerView={4.4}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {videos?.map((videoInfo: any) => {
            return (
              <SwiperSlide key={videoInfo.videoId}>
                {/* EachVideo는 하나의 비디오 부분 */}
                <EachVideo videoInfo={videoInfo} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* 화살표 부분 */}
        <NextSlide className="swiper-button-next" /> {/* Next button */}
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

const VideosComponent = styled.div`
  position: relative;
  width: 100%;
  height: 234px;
`;

const NextSlide = styled.div`
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
