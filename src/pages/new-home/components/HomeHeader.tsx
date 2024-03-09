import styled from 'styled-components';

const HomeHeader = () => {
  return (
    <TotalComponent>
      <HeaderText>눈길을 끄는 광고의 비밀</HeaderText>
      <MiddleDiv>
        <MiddleTextRed>AiSAC</MiddleTextRed>
        <MiddleText>을 만나보세요</MiddleText>
      </MiddleDiv>
      <MoveBtn>AiSAC 시작하기</MoveBtn>
    </TotalComponent>
  );
};

export default HomeHeader;

const TotalComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 52.422vw; //671px;
`;

const HeaderText = styled.div`
  margin: 9.258vw 0px 0px 0px;
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
  margin: 5vw 0px 0px 0px;
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
