import clsx from 'clsx';
import { styled } from 'styled-components';

interface ChartBarProps {
  y: number;
}

const BarChart = () => {
  const data = [
    {
      age: '10대',
      value: 30,
      isActive: false,
    },
    {
      age: '20대',
      value: 90,
      isActive: true,
    },
    {
      age: '30대',
      value: 62,
      isActive: false,
    },
    {
      age: '40대',
      value: 80,
      isActive: false,
    },
    {
      age: '50대',
      value: 50,
      isActive: false,
    },
    {
      age: '60대',
      value: 30,
      isActive: false,
    },
  ];

  return (
    <ChartWrapper>
      {data.map(
        (
          item: { age: string; value: number; isActive: boolean },
          index: number,
        ) => (
          <ChartBarGroup key={index}>
            <span
              className={clsx('value', {
                active: item.isActive,
              })}
            >
              {item.value}%
            </span>
            <ChartBar
              y={item.value}
              className={clsx({
                active: item.isActive,
              })}
            />
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

const ChartBar = styled.div<ChartBarProps>`
  width: 2.5rem;
  height: calc(${({ y }) => y} / 100 * 8rem);
  border-radius: 8px;
  background-color: #ffecee;

  &.active {
    background-color: #d33b4d;
  }

  &:hover {
    background-color: #d33b4d;
  }
`;
