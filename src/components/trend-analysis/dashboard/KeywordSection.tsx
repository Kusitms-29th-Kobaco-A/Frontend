import styled from 'styled-components';
import KeywordBarChart from '../keyword-detail-trend/BarChart';

const KeywordSection = () => {
  return (
    <WhiteRoundedBox>
      <Heading>
        <span>검색어</span> 트렌드
      </Heading>
      <IconWrapper>
        <i>
          <img src="/icons/naver.svg" alt="네이버 아이콘" />
        </i>
        <span>네이버 연관 키워드</span>
      </IconWrapper>
      <PlaceholderGraph>
        <KeywordBarChart />
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
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;

  span {
    color: #d33b4d;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  margin-top: 0.5rem;

  span {
    color: #a0a0a0;
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
