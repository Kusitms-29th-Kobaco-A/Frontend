import BubbleChart from '@weknow/react-bubble-chart-d3';

const BubbleForceChart = () => {
  return (
    <BubbleChart
      graph={{
        zoom: 1.1,
        offsetX: -0.05,
        offsetY: -0.01,
      }}
      width={500}
      height={520}
      padding={0} // optional value, number that set the padding between bubbles
      showLegend={false} // optional value, pass false to disable the legend.
      valueFont={{
        family: 'Arial',
        size: 0,
        color: '#fff',
        weight: 'bold',
      }}
      labelFont={{
        family: 'Arial',
        size: 20,
        color: '#fff',
        weight: 'bold',
      }}
      //Custom bubble/legend click functions such as searching using the label, redirecting to other page
      data={[
        { label: '선물', value: 3, color: '#fac8cd' },
        { label: 'ITZY', value: 5, color: '#fac8cd' },
        { label: '주문제작', value: 2, color: '#fac8cd' },
        { label: '초콜렛', value: 5, color: '#FD929F' },
        { label: '고구마', value: 5, color: '#FD929F' },
        { label: '냉장보관', value: 5, color: '#FD929F' },
        { label: '생일', value: 5, color: '#d33b4d' },
        { label: '생크림', value: 5, color: '#d33b4d' },
      ]}
    />
  );
};

export default BubbleForceChart;
