/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components';
import Aos from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

import line from '../../../assets/home/Line1.svg';

const KobacoMenu = () => {
  useEffect(() => {
    Aos.init({
      // AOS 초기화 옵션
      duration: 3000, // 애니메이션 지속 시간(ms)
    });
  });
  return (
    <TotalComponent>
      <BackgroundImg src={line} alt="line" />
      <HeaderText>
        Ai가 ~~해주는 아이작을 활용하여 광고 만들어 보세요.
      </HeaderText>
      <MenuComponent>
        <MenuBox data-aos="fade-up">
          <MenuNum>01</MenuNum>
          <MenuImg />
          <MenuTitle>레퍼런스 탐색</MenuTitle>
          <MenuContent>
            광고 레퍼런스를 탐색하고
            <br />
            반짝이는 아이디어를 얻으세요.
          </MenuContent>
        </MenuBox>
        <MenuBox data-aos="fade-up">
          <MenuNum>02</MenuNum>
          <MenuImg />
          <MenuTitle>트렌드 분석</MenuTitle>
          <MenuContent>
            대시보드에서 검색어와 SNS 트렌드를
            <br />
            쉽고 빠르게 탐색하세요.
          </MenuContent>
        </MenuBox>
        <MenuBox data-aos="fade-up">
          <MenuNum>03</MenuNum>
          <MenuImg />
          <MenuTitle>광고 카피 제작</MenuTitle>
          <MenuContent>
            누구나 쉽게 만들 수 있는
            <br />
            광고 카피 제작 서비스를 체험하세요.
          </MenuContent>
        </MenuBox>
        <MenuBox data-aos="fade-up">
          <MenuNum>04</MenuNum>
          <MenuImg />
          <MenuTitle>스토리보드 제작</MenuTitle>
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
  align-items: center;
  position: relative;
  width: 100%;
  height: 65vw; //832px;
  z-index: -1;
`;

const BackgroundImg = styled.img`
  position: absolute;
  top: 5.391vw;
  left: -1.25vw;
  display: flex;
  width: 117.199vw;
  height: 88.341%;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  z-index: 0;
  object-fit: cover;
  /* overflow: visible; */
`;

const HeaderText = styled.div`
  text-align: center;
  width: 512px;
  margin: 18.281vw 0px 0px 0px;
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
  margin: 5.313vw 0px 0px 0px;
`;

const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 18.75vw;
  height: 23.359vw;
  border-radius: 20px;
  border: 1px solid var(--White-1, #fff);
  background: var(--White-1, #fff);
  box-shadow: 0px 0px 12px 0px rgba(170, 146, 146, 0.2);
`;

const MenuNum = styled.div`
  margin: 1.719vw 0px 0px 0px;
  color: var(--Gray-6, #bfc7d1);
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.4px;
`;

const MenuImg = styled.img`
  margin: 1.719vw 0px 0px 0px;
  width: 13.828vw;
  height: 7.813vw;
  background: #d9d9d9;
`;

const MenuTitle = styled.div`
  margin: 1.563vw 0px 0px 0px;
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
  margin: 0.625vw 0px 0px 0px;
  color: var(--Gray-8, #373d49);
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 12px;
  font-weight: 350;
  line-height: 140%;
  letter-spacing: -0.4px;
`;
