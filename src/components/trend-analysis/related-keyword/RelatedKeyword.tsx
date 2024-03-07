import styled from 'styled-components';

const RelatedKeyword = () => {
  return (
    <RelatedKeywordBlock>
      <Heading>
        <span>케이크</span> 연관 키워드 TOP20
      </Heading>
      <Description>
        구글, 네이버에서 검색한 키워드와 연관이 있는 키워드 상위 20개를
        제공합니다.
      </Description>
      <WhiteBoxGroup>
        <WhiteRoundedBox>
          <IconWrapper>
            <i>
              <img src="/icons/naver.svg" alt="네이버 아이콘" />
            </i>
            <span>네이버 연관 키워드</span>
          </IconWrapper>
          <ChartPlaceholder>
            <img
              src="/images/graph-placeholder/bubble-naver.svg"
              alt="네이버 버블 차트 이미지"
            />
          </ChartPlaceholder>
        </WhiteRoundedBox>
        <WhiteRoundedBox>
          <IconWrapper>
            <i>
              <img src="/icons/google.svg" alt="네이버 아이콘" />
            </i>
            <span>구글 연관 키워드</span>
          </IconWrapper>
          <ChartPlaceholder>
            <img
              src="/images/graph-placeholder/bubble-google.svg"
              alt="구글 버블 차트 이미지"
            />
          </ChartPlaceholder>
        </WhiteRoundedBox>
      </WhiteBoxGroup>
      <BottomText>
        * 구글/네이버 연관 키워드는 100을 최대치로 상대적인 연관 키워드 수로
        제공합니다.
        <br />
        *구글(유튜브)/네이버 API 사용량 제한정책에 따라 일일 데이터 제공에
        제한이 있을 수 있습니다.
      </BottomText>
    </RelatedKeywordBlock>
  );
};

export default RelatedKeyword;

const RelatedKeywordBlock = styled.div`
  margin-top: 4.5rem;
  margin-bottom: 5rem;
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

const WhiteBoxGroup = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1.5rem;
`;

const WhiteRoundedBox = styled.div`
  flex: 1;
  background-color: white;
  padding: 1rem 1.75rem;
  border-radius: 16px;
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

const ChartPlaceholder = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 3rem;
`;

const BottomText = styled.p`
  margin-top: 1.5rem;
  color: #a0a0a0;
  text-align: center;
  line-height: 140%;
`;
