import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import Header from '../../components/Header';

// 랜딩페이지
const Landing = () => {
  return (
    <LandingComponent>
      <Header />
      <HeaderSpacer />

      <Outlet />
    </LandingComponent>
  );
};

export default Landing;

const LandingComponent = styled.div`
  width: 100vw;
`;

const HeaderSpacer = styled.div`
  height: 10.125rem;
`;
