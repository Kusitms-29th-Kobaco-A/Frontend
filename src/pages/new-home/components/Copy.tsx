import styled from 'styled-components';
import moveImg from '../../../assets/home/Move.svg';
import icon from '../../../assets/home/Icon3.svg';
import order from '../../../assets/home/Order3.svg';

const Copy = () => {
  return (
    <TotalComponent>
      <BlurredComponent>
        <ContentBox>
          <ContentOrder>03</ContentOrder>
          <ContentTop>센스있는 광고 카피를 만들고 싶을 땐</ContentTop>
          <ContentTitle>광고 카피 제작</ContentTitle>
          <ContentContent>
            원하는 조건에 맞춰 생성되는 AI 기반 광고 카피!
            <br />
            누구나 쉽게 만들 수 있는 광고 카피 제작 서비스를 체험하세요.
          </ContentContent>
          <MoveBtn src={moveImg} alt=">" />
          <IconImg src={icon} alt="icon" />
          <OrderImg src={order} alt="order" />
        </ContentBox>
      </BlurredComponent>
    </TotalComponent>
  );
};

export default Copy;
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
  right: 5.859vw;
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
