import styled from "styled-components";
import footer from "../assets/footer/FooterImg.svg";

const Footer = () => {
  return (
    <FooterComponent>
      <FooterImgComponent src={footer} alt="Footer" />
    </FooterComponent>
  );
};

export default Footer;

const FooterComponent = styled.section`
  width: 100vw;
  height: 222px;
  background-color: #f8f8f8;
`;

const FooterImgComponent = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
