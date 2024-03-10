import styled from 'styled-components';

interface Props {
  keywordLank: any;
  originalSearchKeyword: string;
}

const KeywordRank = ({ keywordLank, originalSearchKeyword }: Props) => {
  return (
    <KeywordRankBlock>
      <Heading>
        <span>{originalSearchKeyword}</span> 기간별 연관 키워드 순위 비교
      </Heading>
      <Description>
        구글에서 검색한 키워드의 연관 키워드 상위 10개를 기간별로 제공합니다.
      </Description>
      <WhiteBoxGroup>
        {keywordLank.map((element: any, index: number) => (
          <WhiteRoundedBox key={index}>
            <BoxHeading>{element.timeLabel}</BoxHeading>
            <div className="mt-1 text-center text-sm text-[#BEBEBE]">
              {element.period}
            </div>
            <hr className="mx-auto my-4 h-[1px] w-[10rem] bg-[#E6E6E6]" />
            <RankListWrapper>
              <RankList>
                {element.rankList.map((element: any) => (
                  <RankListItem key={element.rank}>
                    <b>{element.rank}</b>
                    <span>{element.keyword}</span>
                  </RankListItem>
                ))}
              </RankList>
            </RankListWrapper>
          </WhiteRoundedBox>
        ))}
      </WhiteBoxGroup>
    </KeywordRankBlock>
  );
};

export default KeywordRank;

const KeywordRankBlock = styled.div`
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
  white-space: nowrap;
  font-size: 1.125rem;
`;

const RankListWrapper = styled.div`
  display: flex;
  justify-content: start;
`;

const RankList = styled.ul`
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
