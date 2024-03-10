import styled from 'styled-components';
import moveImg from '../../../assets/home/Move.svg';
import icon from '../../../assets/home/Icon4.svg';
import order from '../../../assets/home/Order4.svg';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const StoryBoard = () => {
  useEffect(() => {
    Aos.init({
      // AOS 초기화 옵션
      duration: 2000, // 애니메이션 지속 시간(ms)
    });
  });

  return (
    <TotalComponent>
      <BlurredComponent>
        <ContentBox>
          <ContentOrder>04</ContentOrder>
          <ContentTop>아이디어를 더 생생하게 보여주고 싶을 땐</ContentTop>
          <ContentTitle>스토리보드 제작</ContentTitle>
          <ContentContent>
            그림을 못 그려도 괜찮아요. 편집툴 사용을 못 해도 괜찮아요.
            <br />
            AI가 대신 그려주는 스토리보드 제작 서비스를 이용해보세요.
          </ContentContent>
          <MoveBtn src={moveImg} alt=">" />
          <IconImg data-aos="fade-up" src={icon} alt="icon" />
          <OrderImg src={order} alt="order" />
        </ContentBox>
      </BlurredComponent>
    </TotalComponent>
  );
};

export default StoryBoard;
const TotalComponent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 65vw;
`;

const BlurredComponent = styled.div`
  position: relative;
  margin: 12.969vw 0px 0px 0px;
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
  top: 3.828vw;
  right: 5.234vw;
  width: 432px;
  height: 446px;
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
