import clsx from 'clsx';
import styled from 'styled-components';

interface ChartCircleProps {
  yValueLeft: number;
  yValueRight: number;
}

const DoughnutChart = () => {
  const data = [
    {
      xLabel: '여성',
      yValue: 33,
      isActive: false,
    },
    {
      xLabel: '남성',
      yValue: 67,
      isActive: true,
    },
  ];

  data[1].yValue = 100 - data[0].yValue;

  if (data[0].yValue > data[1].yValue) {
    data[0].isActive = true;
    data[1].isActive = false;
  }

  return (
    <DoughnutChartBlock>
      <Label className={clsx({ active: data[0].isActive })}>
        {data[0].xLabel}
        <br />
        {data[0].yValue}%
      </Label>
      <ChartCircle yValueLeft={data[0].yValue} yValueRight={data[1].yValue}>
        <ChartInnerCircle />
      </ChartCircle>
      <Label className={clsx({ active: data[1].isActive })}>
        {data[1].xLabel}
        <br />
        {data[1].yValue}%
      </Label>
    </DoughnutChartBlock>
  );
};

export default DoughnutChart;

const DoughnutChartBlock = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Label = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 140%;
  color: #bebebe;
  text-align: center;

  &.active {
    color: #d33b4d;
  }
`;

const ChartCircle = styled.div<ChartCircleProps>`
  width: 12rem;
  height: 12rem;
  border: 1px solid #e6e6e6;
  border-radius: 50%;
  position: relative;
  background: conic-gradient(
    ${({ yValueLeft, yValueRight }) => {
        if (yValueLeft > yValueRight) {
          return '#f9f3f3';
        } else {
          return '#d33b4d';
        }
      }}
      ${({ yValueRight }) => (yValueRight / 100) * 360}deg,
    ${({ yValueLeft, yValueRight }) => {
        if (yValueLeft > yValueRight) {
          return '#d33b4d';
        } else {
          return '#f9f3f3';
        }
      }}
      ${({ yValueRight }) => (yValueRight / 100) * 360}deg
  ); /* 차트 설정 */
`;

const ChartInnerCircle = styled.div`
  width: 7.5rem;
  height: 7.5rem;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
