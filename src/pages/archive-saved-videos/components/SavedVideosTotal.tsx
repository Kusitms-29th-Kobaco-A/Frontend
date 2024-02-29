import styled from "styled-components";

const SavedVideosTotal = () => {
  return (
    <TotalComponent>
      <TotalTopRowFlexComponent>
        <TotalTopLabel>내가 찜한 영상</TotalTopLabel>
        <TotalTopBtn>편집하기</TotalTopBtn>
      </TotalTopRowFlexComponent>
    </TotalComponent>
  );
};

export default SavedVideosTotal;

const TotalComponent = styled.div`
  width: 100%;
`;

// 상단 sector
const TotalTopRowFlexComponent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const TotalTopLabel = styled.div`
  color: var(--Gray-9, #27272e);
  font-family: "Noto Sans KR";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.4px;
`;

const TotalTopBtn = styled.button`
  position: absolute;
  right: 0;
  display: inline-flex;
  padding: 3px 10px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 20px;
  background: var(--Main-1, #d33b4d);
  color: var(--White-1, #fff);
  text-align: center;
  border: none;
  outline: none;
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.4px;
`;
