import styled from 'styled-components';
import moveImg from '../../../assets/home/Move.svg';
import icon from '../../../assets/home/Icon1.svg';
import order from '../../../assets/home/Order1.svg';
import line from '../../../assets/home/Line2.svg';
import { useNavigate } from 'react-router-dom';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Reference = () => {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init({
      // AOS 초기화 옵션
      duration: 2000, // 애니메이션 지속 시간(ms)
    });
  });
  return (
    <TotalComponent>
      <BackgroundImg src={line} alt="line" />
      <BlurredComponent>
        <ContentBox>
          <ContentOrder>01</ContentOrder>
          <ContentTop>반짝이는 광고 아이디어를 얻고 싶을 땐</ContentTop>
          <ContentTitle>레퍼런스 탐색</ContentTitle>
          <ContentContent>
            광고 트렌드부터 최근 인기있는 영상까지 한 번에!
            <br />
            광고 레퍼런스를 탐색하고 반짝이는 아이디어를 얻으세요.
          </ContentContent>
          <MoveBtn
            onClick={() => {
              navigate('/archive');
            }}
            src={moveImg}
            alt=">"
          />
          <IconImg data-aos="fade-up" src={icon} alt="icon" />
          <OrderImg src={order} alt="order" />
        </ContentBox>
      </BlurredComponent>
    </TotalComponent>
  );
};

export default Reference;

const TotalComponent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(100vh - 10.125rem);
  scroll-snap-align: start;
`;

const BackgroundImg = styled.img`
  position: absolute;
  /* top: -2.188vw; */
  display: flex;
  width: 100%;
  height: 100%;
  transform: rotate(0deg);
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  overflow: hidden;
`;

const BlurredComponent = styled.div`
  position: relative;
  width: 86.719vw;
  height: 43.75vw;
  border-radius: 20px;
  border: 1px solid var(--Gray-1, #f4f6f6);
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(2px);
`;

const ContentBox = styled.div`
  margin: 7.266vw 0px 0px 10.078vw;
  height: 25.625vw;
  width: 31.875vw;
`;

const ContentOrder = styled.div`
  color: var(--Main-1, #d33b4d);
  font-family: 'Noto Sans KR';
  font-size: 24px; //1.875vw;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.4px;
`;

const ContentTop = styled.div`
  margin: 0.625vw 0px 0px 0px;
  color: var(--Gray-9, #27272e);
  font-family: 'Noto Sans KR';
  font-size: 20px; //1.563vw;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.4px;
`;

const ContentTitle = styled.div`
  margin: 3.672vw 0px 0px 0px;
  color: var(--Main-1, #d33b4d);
  font-family: 'Noto Sans KR';
  font-size: 36px; //2.813vw;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.4px;
`;

const ContentContent = styled.div`
  margin: 0.625vw 0px 0px 0px;
  color: var(--Gray-7, #707887);
  font-family: 'Noto Sans KR';
  font-size: 16px; //1.25vw;
  font-weight: 350;
  line-height: 140%;
  letter-spacing: -0.4px;
`;

const MoveBtn = styled.img`
  margin: 3.672vw 0px 0px 0px;
  width: 13.125vw;
  height: 3.125vw;
  cursor: pointer;
`;

const IconImg = styled.img`
  position: absolute;
  top: 8.672vw;
  right: 7.578vw;
  width: 345px;
  height: 351px;
  flex-shrink: 0;
`;

const OrderImg = styled.img`
  position: absolute;
  bottom: 1.875vw;
  left: 50%;
  width: 5vw;
  height: 0.781vw;
  flex-shrink: 0;
`;
