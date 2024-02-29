/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from "styled-components";
import kobaco from "../assets/header/KobacoLogo.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [mouseOverMenu, setMouseOverMenu] = useState<boolean>(false);
  return (
    <HeaderComponent>
      <HeaderTopBar>
        <TopBarIcon
          onClick={() => {
            navigate("/");
          }}
          src={kobaco}
          alt="icon"
        />
        {token ? (
          <TopBarUser>User</TopBarUser>
        ) : (
          <TopBarUser>로그인</TopBarUser>
        )}
      </HeaderTopBar>
      <HeaderMenuBar
        onMouseEnter={() => setMouseOverMenu(true)}
        onMouseLeave={() => setMouseOverMenu(false)}
      >
        <VisibleMenuComponent>
          <TotalMenuComponent>
            <MenuBox
              onClick={() => {
                navigate("/archive");
              }}
            >
              레퍼런스 탐색
            </MenuBox>
            <MenuBox>검색어 트렌드</MenuBox>
            <MenuBox>광고 카피 제작</MenuBox>
            <MenuBox>스토리보드 제작</MenuBox>
            <MenuBox>소통공간</MenuBox>
            <MenuBox>아이작 활용</MenuBox>
          </TotalMenuComponent>
        </VisibleMenuComponent>
        <HiddenMenuComponent mouseOverMenu={mouseOverMenu}>
          <TotalHiddenMenuComponent>
            <HiddenMenuBox>
              <HiddenMenuDiv>광고검색</HiddenMenuDiv>
              <HiddenMenuDiv>레퍼런스 보드</HiddenMenuDiv>
              <HiddenMenuDiv>데이터 시각화</HiddenMenuDiv>
              <HiddenMenuDiv></HiddenMenuDiv>
            </HiddenMenuBox>
            <HiddenMenuBox>
              <HiddenMenuDiv>쇼핑 트렌드</HiddenMenuDiv>
              <HiddenMenuDiv>관심사 트렌드</HiddenMenuDiv>
              <HiddenMenuDiv>키워드 인사이트</HiddenMenuDiv>
              <HiddenMenuDiv></HiddenMenuDiv>
            </HiddenMenuBox>
            <HiddenMenuBox>
              <HiddenMenuDiv>새 카피 만들기</HiddenMenuDiv>
              <HiddenMenuDiv>이용 가이드</HiddenMenuDiv>
              <HiddenMenuDiv>갤러리</HiddenMenuDiv>
              <HiddenMenuDiv>마이 카피</HiddenMenuDiv>
            </HiddenMenuBox>
            <HiddenMenuBox>
              <HiddenMenuDiv>스토리보드 만들기</HiddenMenuDiv>
              <HiddenMenuDiv>이용 가이드</HiddenMenuDiv>
              <HiddenMenuDiv>갤러리</HiddenMenuDiv>
              <HiddenMenuDiv>마이 스토리보드</HiddenMenuDiv>
            </HiddenMenuBox>
            <HiddenMenuBox>
              <HiddenMenuDiv>홍보영상</HiddenMenuDiv>
              <HiddenMenuDiv>카드 뉴스</HiddenMenuDiv>
              <HiddenMenuDiv>공지사항</HiddenMenuDiv>
              <HiddenMenuDiv></HiddenMenuDiv>
            </HiddenMenuBox>
            <HiddenMenuBox>
              <HiddenMenuDiv>공공데이터 개방</HiddenMenuDiv>
              <HiddenMenuDiv>활용안내</HiddenMenuDiv>
              <HiddenMenuDiv></HiddenMenuDiv>
              <HiddenMenuDiv></HiddenMenuDiv>
            </HiddenMenuBox>
          </TotalHiddenMenuComponent>
        </HiddenMenuComponent>
      </HeaderMenuBar>
    </HeaderComponent>
  );
};

export default Header;

//전체 헤더
const HeaderComponent = styled.header`
  position: fixed;
  width: 100vw;
  height: 162px;
  top: 0;
  background-color: #fff;
  z-index: 2;
`;

//제일 위 탑 부분
const HeaderTopBar = styled.section`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 80px;
`;

const TopBarIcon = styled.img`
  position: absolute;
  top: 29px;
  left: 4.219vw; /* left: 54px; */
  width: 226px;
  height: 40px;
  flex-shrink: 0;
  object-fit: cover;
`;
const TopBarUser = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 29px;
  right: 11.094vw; /* right: 142px; */
  color: var(--Gray-7, #707887);
  width: 44px;
  height: 40px;
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 350;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.4px;
`;

//메뉴바 부분
const HeaderMenuBar = styled.div`
  width: 100%;
  height: 82px;
  position: fixed;
  top: 80px;
  background-color: #fff;
`;

const VisibleMenuComponent = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
const HiddenMenuComponent = styled.div<{ mouseOverMenu: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 220px;
  background-color: #f3f3f3;
  display: ${(props) => (props.mouseOverMenu ? "block" : "none")};
`;

const TotalHiddenMenuComponent = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  height: 100%;
  padding: 0px 11.094vw; /* padding: 0px 142px; */
  z-index: 2;
`;

const TotalMenuComponent = styled(TotalHiddenMenuComponent)`
  width: 100%;
`;

const MenuBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--Gray-9, #27272e);
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 22.4px */
  letter-spacing: -0.4px;
  cursor: pointer;
`;

const HiddenMenuBox = styled(MenuBox)`
  flex-direction: column;
`;

const HiddenMenuDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 54px;
  font-size: 14px;
  font-weight: 400;
  &:hover {
    color: #d33b4d;
  }
  &:hover::after {
    content: ">";
    transform: translateX(30%);
  }
`;
