import BubbleChart from '@weknow/react-bubble-chart-d3';

interface Props {
  naverBubble: any;
}

const NaverBubble = ({ naverBubble }: Props) => {
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
      data={naverBubble}
    />
  );
};

export default NaverBubble;
