import styled from 'styled-components';
import moveImg from '../../../assets/home/Move.svg';
import icon from '../../../assets/home/Icon2.svg';
import order from '../../../assets/home/Order2.svg';
import { useNavigate } from 'react-router-dom';

const Trend = () => {
  const navigate = useNavigate();

  return (
    <TotalComponent>
      <BlurredComponent>
        <ContentBox>
          <ContentOrder>02</ContentOrder>
          <ContentTop>빠르게 변화하는 트렌드를 포착하고 싶을 땐</ContentTop>
          <ContentTitle>트렌드 분석</ContentTitle>
          <ContentContent>
            최신 인기 트렌드를 한 눈에!
            <br />
            대시보드에서 검색어와 SNS 트렌드를 쉽고 빠르게 탐색하세요.
          </ContentContent>
          <MoveBtn
            onClick={() => {
              navigate('/trend-analysis');
            }}
            src={moveImg}
            alt=">"
          />
          <IconImg src={icon} alt="icon" />
          <OrderImg src={order} alt="order" />
        </ContentBox>
      </BlurredComponent>
    </TotalComponent>
  );
};

export default Trend;
const TotalComponent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1024px;
  margin: 0 auto;
  height: calc(100vh - 10.125rem);
  scroll-snap-align: start;
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
  top: 3.828vw;
  right: 4.844vw;
  width: 446px;
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
