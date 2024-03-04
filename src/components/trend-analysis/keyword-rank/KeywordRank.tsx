import styled from 'styled-components';

const KeywordRank = () => {
  return (
    <KeywordRankBlock>
      <Heading>
        <span>케이크</span> 기간별 연관 키워드 순위 비교
      </Heading>
      <Description>
        구글에서 검색한 키워드의 연관 키워드 상위 10개를 기간별로 제공합니다.
      </Description>
      <WhiteBoxGroup>
        {Array.from({ length: 4 }, (_, index) => index + 1).map((index) => (
          <WhiteRoundedBox key={index}>
            <BoxHeading>2024.02.02 - 2024.02.10</BoxHeading>
            <RankListWrapper>
              <RankList>
                {Array.from({ length: 10 }, (_, index) => index + 1).map(
                  (th) => (
                    <RankListItem key={th}>
                      <b>{th}</b>
                      <span>최대글자수는12자까지임</span>
                    </RankListItem>
                  ),
                )}
              </RankList>
            </RankListWrapper>
          </WhiteRoundedBox>
        ))}
      </WhiteBoxGroup>
    </KeywordRankBlock>
  );
};

export default KeywordRank;

const KeywordRankBlock = styled.section`
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
  padding: 1.5rem 2rem;
  border-radius: 16px;
`;

const BoxHeading = styled.h3`
  color: #707887;
  text-align: center;
  font-weight: 700;
  line-height: 140%;
`;

const RankListWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const RankList = styled.ul`
  margin-top: 2.25rem;
  color: #707887;
  line-height: 140%;
`;

const RankListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  b {
    font-weight: 700;
    width: 1.125rem;
    text-align: center;
  }

  & + & {
    margin-top: 0.75rem;
  }
`;
