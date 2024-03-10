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

interface Props {
  snsTrend: any;
}

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
);

const SNSSection = ({ snsTrend }: Props) => {
  const options = {
    scales: {
      x: {
        // display: false,
      },
      y: {
        // display: false,
        min: 0,
        max: 100,
      },
    },
    elements: {
      point: {
        radius: 2,
      },
    },
    ticks: {
      stepSize: 20,
    },
  };

  const graphData = {
    labels: snsTrend.map(
      (item: { xLabel: string; yValue: number }) => item.xLabel,
    ),
    datasets: [
      {
        data: snsTrend.map(
          (item: { xLabel: string; yValue: number }) => item.yValue,
        ),
        fill: true,
        backgroundColor: ({
          chart: { ctx },
        }: {
          chart: { ctx: CanvasRenderingContext2D };
        }) => {
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0.1, 'rgb(255, 159, 159)');
          gradient.addColorStop(0.4, 'rgba(255, 255, 255, 0)');
          return gradient;
        },
        borderColor: 'rgba(225,116,103)',
        borderWidth: 1,
        color: '#000',
      },
    ],
  };

  return (
    <WhiteRoundedBox>
      <Heading>
        <span>소셜 미디어</span> 트렌드
      </Heading>
      <IconWrapper>
        <i>
          <img src="/icons/instagram.svg" alt="인스타그램 아이콘" />
        </i>
        <span>인스타그램 게시글 수 추이</span>
      </IconWrapper>
      <LineWrapper>
        <Line width="100%" height="40rem" options={options} data={graphData} />
      </LineWrapper>
    </WhiteRoundedBox>
  );
};

export default SNSSection;

const WhiteRoundedBox = styled.div`
  flex: 1;
  background-color: white;
  padding: 2rem 4rem;
  border-radius: 16px;

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

const IconWrapper = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  margin-top: 0.5rem;

  span {
    color: #707887;
    font-size: 0.875rem;
  }
`;

const LineWrapper = styled.div`
  color: #a0a0a0;
  width: 100%;
  height: 8rem;
  margin-top: 1rem;
`;
