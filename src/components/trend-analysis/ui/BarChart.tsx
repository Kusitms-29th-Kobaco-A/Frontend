import clsx from 'clsx';
import { styled } from 'styled-components';

interface Props {
  data: any;
}

const BarChart = ({ data }: Props) => {
  let max = 0;
  let maxIndex = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].yValue > max) {
      max = data[i].yValue;
      maxIndex = i;
    }
  }
  data = data.map(
    (
      item: { age: string; value: number; isActive: boolean },
      index: number,
    ) => ({ ...item, isActive: index === maxIndex }),
  );

  return (
    <ChartWrapper>
      {data.map(
        (
          item: { xLabel: string; yValue: number; isActive: boolean },
          index: number,
        ) => (
          <ChartBarGroup key={index}>
            <span
              className={clsx('value', {
                active: item.isActive,
              })}
            >
              {item.yValue}%
            </span>
            <ChartBar
              y={item.yValue}
              className={clsx({
                active: item.isActive,
              })}
            />
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

export default BarChart;

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

  &:hover {
    .value {
      color: #d33b4d;
      font-weight: 600;
      transition: 0.3s;
    }

    .x-label {
      color: #d33b4d;
      font-weight: 600;
      transition: 0.3s;
    }
  }

  .value {
    color: #a0a0a0;
    margin-bottom: 0.25rem;

    &.active {
      color: #d33b4d;
      font-weight: 600;
    }
  }

  .x-label {
    margin-top: 0.5rem;
    color: #a0a0a0;

    &.active {
      color: #d33b4d;
      font-weight: 600;
    }
  }
`;

interface ChartBarProps {
  y: number;
}

const ChartBar = styled.div<ChartBarProps>`
  width: 2.5rem;
  height: calc(${({ y }) => y} / 100 * 16rem);
  border-radius: 8px;
  background-color: #ffecee;

  &.active {
    background-color: #d33b4d;
  }

  &:hover {
    background-color: #d33b4d;
    transition: 0.3s;
    cursor: pointer;
  }
`;
