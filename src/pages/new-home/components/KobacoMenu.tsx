/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components';
import Aos from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

import background from '../../../assets/home/Background.svg';
import union1 from '../../../assets/home/Union1.svg';
import union2 from '../../../assets/home/Union2.svg';
import union3 from '../../../assets/home/Union3.svg';
import union4 from '../../../assets/home/Union4.svg';

const KobacoMenu = () => {
  useEffect(() => {
    Aos.init({
      // AOS 초기화 옵션
      duration: 3000, // 애니메이션 지속 시간(ms)
    });
  });
  return (
    <TotalComponent>
      <BackgroundImg src={background} alt="line" />
      <Overlay />
      <HeaderText>
        눈길을 끄는 신박한 광고 기획
        <br />
        Aisac이 도와드릴게요!
      </HeaderText>
      <MenuComponent>
        <MenuBox>
          <MenuNum>01</MenuNum>
          <MenuImg
            src={union1}
            margin="2.656vw 0px 0px 0px"
            width="5.723vw"
            height="5.723vw"
          />
          <MenuTitle margin="2.714vw 0px 0px 0px">레퍼런스 탐색</MenuTitle>
          <MenuContent>
            광고 레퍼런스를 탐색하고
            <br />
            반짝이는 아이디어를 얻으세요.
          </MenuContent>
        </MenuBox>
        <MenuBox>
          <MenuNum>02</MenuNum>
          <MenuImg
            src={union2}
            margin="2.969vw 0px 0px 0px"
            width="6.016vw"
            height="5.174vw"
          />
          <MenuTitle margin="2.952vw 0px 0px 0px">트렌드 분석</MenuTitle>
          <MenuContent>
            빅데이터로 시장 트렌드와
            <br />
            소비자 니즈를 확인하세요.
          </MenuContent>
        </MenuBox>
        <MenuBox>
          <MenuNum>03</MenuNum>
          <MenuImg
            src={union3}
            margin="2.500vw 0px 0px 0px"
            width="6.022vw"
            height="6.022vw"
          />
          <MenuTitle margin="2.572vw 0px 0px 0px">광고 카피 제작</MenuTitle>
          <MenuContent>
            누구나 쉽게 만들 수 있는
            <br />
            광고 카피 제작 서비스를 체험하세요.
          </MenuContent>
        </MenuBox>
        <MenuBox>
          <MenuNum>04</MenuNum>
          <MenuImg
            src={union4}
            margin="2.656vw 0px 0px 0px"
            width="3.991vw"
            height="5.805vw"
          />
          <MenuTitle margin="2.632vw 0px 0px 0px">스토리보드 제작</MenuTitle>
          <MenuContent>
            AI가 대신 그려주는 스토리보드
            <br />
            제작 서비스를 이용해보세요.
          </MenuContent>
        </MenuBox>
      </MenuComponent>
    </TotalComponent>
  );
};

export default KobacoMenu;

const TotalComponent = styled.div`
  display: flex;
  background: var(--Gray-1, #f4f6f6);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: calc(100vh - 10.125rem);
  z-index: -1;
  scroll-snap-align: start;
`;

const BackgroundImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 98.438%;
  z-index: -1;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.45);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
`;

const HeaderText = styled.div`
  text-align: center;
  width: 512px;
  color: var(--Gray-9, #27272e);
  font-family: 'Noto Sans KR';
  font-size: 36px;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.4px;
`;

const MenuComponent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-top: 2.5rem;
`;

const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 18.75vw;
  border-radius: 20px;
  border: 1px solid var(--White-1, #fff);
  background: var(--White-1, #fff);
  box-shadow: 0px 0px 12px 0px rgba(170, 146, 146, 0.2);
  padding: 1.5rem;
`;

const MenuNum = styled.div`
  color: var(--Gray-6, #bfc7d1);
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.4px;
`;

const MenuImg = styled.img<{ margin: any; width: any; height: any }>`
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const MenuTitle = styled.div<{ margin: any }>`
  margin: ${(props) => props.margin};
  color: var(--Gray-8, #373d49);
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 20px;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.4px;
`;

const MenuContent = styled.div`
  width: 14.2vw;
  color: var(--Gray-8, #373d49);
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 12px;
  font-weight: 350;
  line-height: 140%;
  letter-spacing: -0.4px;
  margin-top: 0.25rem;
  word-break: keep-all;
`;
