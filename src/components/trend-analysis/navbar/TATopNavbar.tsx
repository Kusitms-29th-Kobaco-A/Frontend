import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const TATopNavbar = () => {
  return (
    <>
      <TATopNavbarBlock>
        <Top>
          <div>
            <img src="/logo/top-navbar-logo.svg" alt="상단 코바코 로고" />
          </div>
          <LoginAction>
            <span>로그아웃</span>|<span>마이페이지</span>
          </LoginAction>
        </Top>
        <Nav>
          <ul>
            <li>레퍼런스 탐색</li>
            <li className="active">트렌드 분석</li>
            <li>광고 카피 제작</li>
            <li>스토리보드 제작</li>
            <li>소통공간</li>
            <li>아이작 활용</li>
          </ul>
        </Nav>
      </TATopNavbarBlock>
      <Outlet />
    </>
  );
};

export default TATopNavbar;

const TATopNavbarBlock = styled.div`
  background-color: #fff;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3rem;
`;

const LoginAction = styled.div`
  display: flex;
  gap: 0.5rem;
  color: #707887;
  font-weight: 300;

  span {
    cursor: pointer;
  }
`;

const Nav = styled.nav`
  padding: 1.5rem 0;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;

    li {
      cursor: pointer;
      font-weight: 600;

      &:hover {
        color: #d33b4d;
        font-weight: 700;
      }

      &.active {
        color: #d33b4d;
        font-weight: 700;
      }
    }
  }
`;
