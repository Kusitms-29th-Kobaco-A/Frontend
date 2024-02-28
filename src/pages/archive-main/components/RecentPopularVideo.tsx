/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import EachVideo from "../../../components/EachVideo";
SwiperCore.use([Navigation]);

const RecentPopularVideo = ({ videos }: any) => {
  return (
    <TotalComponent>
      <TopLabel>최근 인기있는 영상</TopLabel>
      <VideosComponent>
        <Swiper
          navigation={{
            // Navigation options
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          style={{ width: "100%", margin: "33px 0px 0px" }}
          spaceBetween={16}
          slidesPerView={4.5}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {videos?.map((videoInfo: any) => {
            return (
              <SwiperSlide key={videoInfo.videoId}>
                <EachVideo videoInfo={videoInfo} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* <PrevSlide className="swiper-button-prev" /> Previous button */}
        <NextSlide className="swiper-button-next" /> {/* Next button */}
      </VideosComponent>
    </TotalComponent>
  );
};

export default RecentPopularVideo;

const TotalComponent = styled.div`
  width: 100%;
  height: 100%;
`;

const TopLabel = styled.div`
  color: var(--Gray-9, #27272e);
  height: 34px;
  font-family: "Noto Sans KR";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 33.6px */
  letter-spacing: -0.4px;
`;

const VideosComponent = styled.div`
  position: relative;
  width: 100%;
  height: 234px;
`;

// const PrevSlide = styled.div`
//   position: absolute;
//   top: 30%;
//   left: 75px;

//   border: 1px solid black;
//   color: #373d49;
//   background-color: #fff;
//   width: 30px;
//   height: 30px;
//   cursor: pointer;
// `;

const NextSlide = styled.div`
  position: absolute;
  top: 30%;
  right: 75px;
  border: 1px solid black;
  color: #373d49;
  background-color: #fff;
  width: 30px;
  height: 30px;
  font-size: 3px;
  cursor: pointer;
`;
