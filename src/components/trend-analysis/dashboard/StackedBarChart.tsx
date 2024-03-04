import clsx from 'clsx';
import { styled } from 'styled-components';

const StackedBarChart = () => {
  const data = [
    {
      age: '10대',
      value: [30, 20],
      isActive: false,
    },
    {
      age: '20대',
      value: [50, 20],
      isActive: false,
    },
    {
      age: '30대',
      value: [10, 20],
      isActive: false,
    },
    {
      age: '40대',
      value: [30, 40],
      isActive: false,
    },
    {
      age: '50대',
      value: [20, 60],
      isActive: false,
    },
    {
      age: '60대',
      value: [10, 50],
      isActive: false,
    },
  ];

  let max = 0;
  let maxIndex = 0;
  for (let i = 0; i < data.length; i++) {
    const sum = data[i].value[0] + data[i].value[1];
    if (sum > max) {
      max = sum;
      maxIndex = i;
    }
  }
  data[maxIndex].isActive = true;

  return (
    <ChartWrapper>
      {data.map(
        (
          item: { age: string; value: number[]; isActive: boolean },
          index: number,
        ) => (
          <ChartBarGroup key={index}>
            <ChartBar
              y={item.value[0] + item.value[1]}
              className={clsx({
                active: item.isActive,
              })}
            >
              <ChartTopBar
                yPercent={
                  (item.value[0] / (item.value[0] + item.value[1])) * 100
                }
              />
              <ChartBottomBar
                yPercent={
                  (item.value[1] / (item.value[0] + item.value[1])) * 100
                }
              />
            </ChartBar>
            <span
              className={clsx('x-label', {
                active: item.isActive,
              })}
            >
              {item.age}
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
  y: number;
}

const ChartBar = styled.div<ChartBarProps>`
  width: 2.5rem;
  height: calc(${({ y }) => y} / 100 * 8rem);
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
  yPercent: number;
}

const ChartTopBar = styled.div<ChartTopBarProps>`
  background-color: #fd929f;
  height: ${({ yPercent }) => yPercent}%;
`;

interface ChartBottomBarProps {
  yPercent: number;
}

const ChartBottomBar = styled.div<ChartBottomBarProps>`
  background-color: #ffecee;
  height: ${({ yPercent }) => yPercent}%;
`;
