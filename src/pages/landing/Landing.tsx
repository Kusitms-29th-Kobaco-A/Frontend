import styled from "styled-components";
import Header from "../../components/Header";

const Landing = () => {
  return (
    <LandingComponent>
      <Header />
    </LandingComponent>
  );
};

export default Landing;

const LandingComponent = styled.div`
  width: 100vw;
`;
