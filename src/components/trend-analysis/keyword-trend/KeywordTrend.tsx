import styled from 'styled-components';

const KeywordTrend = () => {
  return (
    <KeywordTrendSection>
      <Heading>
        <span>케이크</span> 검색량 트렌드
      </Heading>
      <Description>
        입력한 검색어의 네이버 검색량을 하나의 차트에서 한 번에 비교해 볼 수
        있습니다.
      </Description>
      <WhiteRoundedBox>
        <BoxTop>
          <IconWrapper>
            <i>
              <img src="/icons/chart-clipboard.svg" alt="인스타그램 아이콘" />
            </i>
            <span>검색어 검색량 추이</span>
          </IconWrapper>
          <TimeChoice>
            <li className="active">일간</li>
            <li>주간</li>
            <li>월간</li>
          </TimeChoice>
        </BoxTop>
        <ChartPlaceholder>
          <img
            src="/images/graph-placeholder/empty-chart-placeholder.svg"
            alt="빈 차트 이미지"
          />
        </ChartPlaceholder>
      </WhiteRoundedBox>
    </KeywordTrendSection>
  );
};

export default KeywordTrend;

const KeywordTrendSection = styled.section`
  margin-top: 4.5rem;
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;

  span {
    color: #d33b4d;
  }
`;

const Description = styled.p`
  margin-top: 0.75rem;
  color: #a0a0a0;
  text-align: center;
`;

const WhiteRoundedBox = styled.div`
  flex: 1;
  height: 100%;
  background-color: white;
  padding: 1rem 1.75rem;
  border-radius: 16px;
  margin-top: 1.5rem;
`;

const BoxTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  margin-top: 0.5rem;

  span {
    color: #a0a0a0;
    font-weight: 700;
  }
`;

const TimeChoice = styled.ul`
  display: flex;
  background-color: #f4f6f6;
  padding: 0.25rem;
  border-radius: 0.5rem;
  height: 2.75rem;

  li {
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    &.active {
      background-color: white;
      border-radius: 0.625rem;
    }
  }
`;

const ChartPlaceholder = styled.div`
  margin-top: 1rem;
`;
