import styled from 'styled-components';
import headerVideo from '../../../assets/home/Header.mp4';
import { Link } from 'react-router-dom';

const HomeHeader = () => {
  return (
    <TotalComponent>
      <HeaderVideo src={headerVideo} width="100%" muted autoPlay loop />
      <Overlay />
      <HeaderText>AI를 활용한 혁신적인 광고 창작 서비스</HeaderText>
      <MiddleDiv>
        <MiddleTextRed>AiSAC</MiddleTextRed>
        <MiddleText>과 시작하세요</MiddleText>
      </MiddleDiv>
      <Link to="https://www.youtube.com/watch?v=4K6A6o4zF2o">
        <MoveBtn className="shadow-lg">AiSAC 이용가이드</MoveBtn>
      </Link>
    </TotalComponent>
  );
};

export default HomeHeader;

const TotalComponent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(100vh - 10.125rem);
  scroll-snap-align: start;
`;

const HeaderVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.36);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
`;

const HeaderText = styled.div`
  margin: 5.078vw 0px 0px 0px;
  color: #27272e;
  font-family: 'Noto Sans KR';
  font-size: 36px;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.4px;
`;

const MiddleDiv = styled.div`
  height: 78px;
`;

const MiddleText = styled.span`
  color: #27272e;
  font-family: 'Noto Sans KR';
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.4px;
`;
const MiddleTextRed = styled(MiddleText)`
  color: #d33b4d;
`;

const MoveBtn = styled.button`

  margin: 2.813vw 0px 0px 0px;

  display: inline-flex;
  padding: 9px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 24.283px;
  background: var(--Main-1, #d33b4d);
  color: var(--White-1, #fff);
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.4px;
  cursor: pointer;
`;
