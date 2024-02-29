import styled from "styled-components";

const NotLoginComponent = () => {
  return (
    <TotalComponent>
      <TopLabel>내가 찜한 영상</TopLabel>
      <BlankComponent>해당 서비스는 로그인 후 사용 가능합니다</BlankComponent>
    </TotalComponent>
  );
};

export default NotLoginComponent;

const TotalComponent = styled.div`
  width: 100%;
  height: 100%;
`;

const TopLabel = styled.div`
  color: var(--Gray-9, #27272e);
  height: 34px;
  font-family: "Noto Sans KR";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 33.6px */
  letter-spacing: -0.4px;
`;

const BlankComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 220px;
  flex-shrink: 0;
  border-radius: 16px;
  border: 1px solid var(--Gray-7, #707887);
  background: var(--White-1, #fff);
  color: var(--Gray-7, #707887);
  margin-top: 33px;
  /* Body/3 */
  font-family: "Noto Sans KR";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 28px */
  letter-spacing: -0.4px;
`;
