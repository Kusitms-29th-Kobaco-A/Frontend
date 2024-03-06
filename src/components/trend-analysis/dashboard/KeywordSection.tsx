import styled from 'styled-components';
import StackedBarChart from './StackedBarChart';

const KeywordSection = () => {
  return (
    <WhiteRoundedBox>
      <Heading>
        <span>검색어</span> 트렌드
      </Heading>
      <BoxTop>
        <IconWrapper>
          <i>
            <img src="/icons/naver.svg" alt="네이버 아이콘" />
          </i>
          <span>네이버 연관 키워드</span>
        </IconWrapper>
        <Legend>
          <LegendItem>
            <div className="color-box male" />
            <span className="label">남성</span>
          </LegendItem>
          <LegendItem>
            <div className="color-box female" />
            <span className="label">여성</span>
          </LegendItem>
        </Legend>
      </BoxTop>
      <PlaceholderGraph>
        <StackedBarChart />
      </PlaceholderGraph>
    </WhiteRoundedBox>
  );
};

export default KeywordSection;

const WhiteRoundedBox = styled.div`
  flex: 1;
  height: 100%;
  background-color: white;
  padding: 2rem 4rem;
  border-radius: 16px;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 0 0 0 1px #d33b4d;
    transition: 0.3s;
  }
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;

  span {
    color: #d33b4d;
  }
`;

const BoxTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;

  span {
    color: #a0a0a0;
    font-size: 0.875rem;
  }
`;

const Legend = styled.div`
  display: flex;
  gap: 1rem;
`;

const LegendItem = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  .color-box {
    width: 1rem;
    height: 1rem;
    border-radius: 4px;

    &.male {
      background-color: #fd929f;
    }

    &.female {
      background-color: #ffecee;
    }
  }

  .label {
    color: #373d49;
    font-size: 0.875rem;
  }
`;

const PlaceholderGraph = styled.div`
  color: #a0a0a0;
  width: 100%;
  height: 7.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
