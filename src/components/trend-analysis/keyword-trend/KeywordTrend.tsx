import {
  Chart,
  CategoryScale,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
);

interface Props {
  searchTrend: any;
}

const KeywordTrend = ({ searchTrend }: Props) => {
  const options = {
    scales: {
      x: {
        display: false,
      },
      y: {
        min: 0,
        max: 100,
      },
    },
    elements: {
      line: {
        tension: 0.3,
      },
      point: {
        radius: 0,
      },
    },
    ticks: {
      stepSize: 20,
    },
  };

  const graphData = {
    labels: searchTrend.map(
      (item: { xLabel: string; yValue: number }) => item.xLabel,
    ),
    datasets: [
      {
        data: searchTrend.map(
          (item: { xLabel: string; yValue: number }) => item.yValue,
        ),
        fill: true,
        backgroundColor: ({
          chart: { ctx },
        }: {
          chart: { ctx: CanvasRenderingContext2D };
        }) => {
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0.2, 'rgb(255, 159, 159)');
          gradient.addColorStop(0.9, 'rgba(255, 255, 255, 0)');
          return gradient;
        },
        borderColor: 'rgba(225,116,103)',
        borderWidth: 1,
        color: '#000',
      },
    ],
  };

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
        <LineWrapper>
          <Line
            width="100%"
            height="30rem"
            options={options}
            data={graphData}
          />
        </LineWrapper>
      </WhiteRoundedBox>
    </KeywordTrendSection>
  );
};

export default KeywordTrend;

const KeywordTrendSection = styled.div`
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

const LineWrapper = styled.div`
  margin-top: 1rem;
`;
