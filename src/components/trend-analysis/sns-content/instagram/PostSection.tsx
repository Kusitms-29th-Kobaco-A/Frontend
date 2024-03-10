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
import clsx from 'clsx';
import { useState } from 'react';
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
  originalSearchKeyword: string;
  data: any;
}

const PostSection = ({ originalSearchKeyword, data }: Props) => {
  const [graphType, setGraphType] = useState<'DAILY' | 'WEEKLY' | 'MONTHLY'>(
    'DAILY',
  );

  const instagramPost =
    graphType === 'DAILY'
      ? data.instagramDailyTrend
      : graphType === 'WEEKLY'
        ? data.instagramWeeklyTrend
        : graphType === 'MONTHLY' && data.instagramMonthlyTrend;

  const options = {
    scales: {
      y: {
        min: 0,
        max: 100,
      },
    },
    elements: {
      line: {
        tension: 0.3,
      },
    },
    ticks: {
      stepSize: 20,
    },
  };

  const graphData = {
    labels: instagramPost.map(
      (item: { xLabel: string; yValue: number }) => item.xLabel,
    ),
    datasets: [
      {
        data: instagramPost.map(
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
      },
    ],
  };

  return (
    <PostSectionBlock>
      <Heading>
        <span>{originalSearchKeyword}</span> 관련 인스타그램 게시글 현황
      </Heading>
      <Description>
        검색한 키워드 관련 인스타그램 콘텐츠 수, 게시글 내 키워드 분석 결과
        데이터를 제공합니다.
      </Description>
      <WhiteRoundedBoxGroup>
        <LeftWhiteRoundedBox>
          <BoxTop>
            <IconWrapper>
              <i>
                <img src="/icons/instagram.svg" alt="네이버 아이콘" />
              </i>
              <span>게시글 수</span>
            </IconWrapper>
            <TimeChoice>
              <li
                className={clsx('cursor-pointer duration-200', {
                  active: graphType === 'DAILY',
                })}
                onClick={() => setGraphType('DAILY')}
              >
                일간
              </li>
              <li
                className={clsx('cursor-pointer duration-200', {
                  active: graphType === 'WEEKLY',
                })}
                onClick={() => setGraphType('WEEKLY')}
              >
                주간
              </li>
              <li
                className={clsx('cursor-pointer duration-200', {
                  active: graphType === 'MONTHLY',
                })}
                onClick={() => setGraphType('MONTHLY')}
              >
                월간
              </li>
            </TimeChoice>
          </BoxTop>
          <LineWrapper>
            <Line
              width="100%"
              height="25rem"
              options={options}
              data={graphData}
            />
          </LineWrapper>
        </LeftWhiteRoundedBox>
      </WhiteRoundedBoxGroup>
    </PostSectionBlock>
  );
};

export default PostSection;

const PostSectionBlock = styled.div`
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

const WhiteRoundedBoxGroup = styled.div`
  display: flex;
  gap: 1rem;
  height: 25rem;
`;

const LeftWhiteRoundedBox = styled.div`
  flex: 2;
  background-color: white;
  padding: 1.5rem 1.75rem;
  border-radius: 16px;
  margin-top: 1.5rem;
`;

const BoxTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

const IconWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  span {
    color: #707887;
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.25;
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
    font-size: 0.875rem;

    &.active {
      background-color: white;
      border-radius: 0.625rem;
    }
  }
`;

const LineWrapper = styled.div`
  margin-top: 0.5rem;
`;
