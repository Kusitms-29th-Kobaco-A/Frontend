import BubbleChart from '@weknow/react-bubble-chart-d3';

interface Props {
  relatedTrendBubble: any;
}

const BubbleForceChart = ({ relatedTrendBubble }: Props) => {
  return (
    <BubbleChart
      graph={{
        zoom: 1.1,
        offsetX: -0.05,
        offsetY: -0.01,
      }}
      width={500}
      height={375}
      padding={0} // optional value, number that set the padding between bubbles
      showLegend={false} // optional value, pass false to disable the legend.
      valueFont={{
        family: 'Noto Sans KR',
        size: 0,
        color: '#fff',
        weight: 'bold',
      }}
      labelFont={{
        family: 'Noto Sans KR',
        size: 20,
        color: '#fff',
        weight: 'bold',
      }}
      //Custom bubble/legend click functions such as searching using the label, redirecting to other page
      data={relatedTrendBubble}
    />
  );
};

export default BubbleForceChart;
