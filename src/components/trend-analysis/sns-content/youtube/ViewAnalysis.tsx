import styled from 'styled-components';
import DoughnutChart from '../../ui/DoughnutChart';
import BarChart from '../../ui/BarChart';

interface Props {
  youtubeGenderTrend: any;
  youtubeAgeTrend: any;
  originalSearchKeyword: string;
}

const ViewAnalysis = ({
  youtubeGenderTrend,
  youtubeAgeTrend,
  originalSearchKeyword,
}: Props) => {
  const barData = youtubeAgeTrend;

  const doughnutData = youtubeGenderTrend;

  return (
    <ViewAnalysisSection>
      <Heading>
        <span>{originalSearchKeyword}</span> 검색량 세부 트렌드
      </Heading>
      <Description>
        입력한 검색어의 네이버 검색량을 하나의 차트에서 한 번에 비교해 볼 수
        있습니다.
      </Description>
      <WhiteBoxGroupTop>
        <WhiteRoundedBox>
          <IconWrapper>
            <i>
              <img src="/icons/gender.svg" alt="성별 아이콘" />
            </i>
            <span>성별 검색 비중</span>
          </IconWrapper>
          <ChartPlaceholder>
            <DoughnutChart data={doughnutData} />
          </ChartPlaceholder>
        </WhiteRoundedBox>
        <WhiteRoundedBox>
          <IconWrapper>
            <i>
              <img src="/icons/people-fill.svg" alt="사람들 아이콘" />
            </i>
            <span>연령별 검색량</span>
          </IconWrapper>
          <ChartPlaceholder>
            <BarChart data={barData} />
          </ChartPlaceholder>
        </WhiteRoundedBox>
      </WhiteBoxGroupTop>
    </ViewAnalysisSection>
  );
};

export default ViewAnalysis;

const ViewAnalysisSection = styled.div`
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

const WhiteBoxGroupTop = styled.div`
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

  span {
    color: #a0a0a0;
    font-weight: 700;
  }
`;

const ChartPlaceholder = styled.div`
  padding: 3.15rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
