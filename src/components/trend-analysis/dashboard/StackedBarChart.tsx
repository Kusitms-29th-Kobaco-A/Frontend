import clsx from 'clsx';
import { styled } from 'styled-components';

interface Props {
  genderAgeTrend: any;
}

const StackedBarChart = ({ genderAgeTrend }: Props) => {
  let data = genderAgeTrend;

  let max = 0;
  let maxIndex = 0;
  for (let i = 0; i < data.length; i++) {
    const sum = data[i].yValue[0] + data[i].yValue[1];
    if (sum > max) {
      max = sum;
      maxIndex = i;
    }
  }
  data = data.map(
    (item: { xLabel: string; yValue: number[] }, index: number) => ({
      ...item,
      isActive: index === maxIndex ? true : false,
    }),
  );

  return (
    <ChartWrapper>
      {data.map(
        (
          item: { xLabel: string; yValue: number[]; isActive: boolean },
          index: number,
        ) => (
          <ChartBarGroup key={index}>
            <ChartBar
              $y={item.yValue[0] + item.yValue[1]}
              className={clsx({
                active: item.isActive,
              })}
            >
              <ChartTopBar
                $yPercent={
                  (item.yValue[0] / (item.yValue[0] + item.yValue[1])) * 100
                }
              />
              <ChartBottomBar
                $yPercent={
                  (item.yValue[1] / (item.yValue[0] + item.yValue[1])) * 100
                }
              />
            </ChartBar>
            <span
              className={clsx('x-label', {
                active: item.isActive,
              })}
            >
              {item.xLabel}
            </span>
          </ChartBarGroup>
        ),
      )}
    </ChartWrapper>
  );
};

export default StackedBarChart;

const ChartWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: flex-end;
`;

const ChartBarGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .x-label {
    margin-top: 0.5rem;
    color: #a0a0a0;

    &.active {
      color: #fd929f;
      font-weight: 600;
    }
  }
`;

interface ChartBarProps {
  $y: number;
}

const ChartBar = styled.div<ChartBarProps>`
  width: 2.5rem;
  height: calc(${({ $y }) => $y} / 100 * 16rem);
  border-radius: 8px;
  overflow: hidden;

  &.active {
    background-color: #d33b4d;
  }

  &:hover {
    background-color: #d33b4d;
  }
`;

interface ChartTopBarProps {
  $yPercent: number;
}

const ChartTopBar = styled.div<ChartTopBarProps>`
  background-color: #fd929f;
  height: ${({ $yPercent }) => $yPercent}%;
`;

interface ChartBottomBarProps {
  $yPercent: number;
}

const ChartBottomBar = styled.div<ChartBottomBarProps>`
  background-color: #ffecee;
  height: ${({ $yPercent }) => $yPercent}%;
`;
