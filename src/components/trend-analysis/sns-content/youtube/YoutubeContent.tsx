import HashTagSection from './HashTagSection';
import TrendContents from './TrendContents';
import ViewAnalysis from './ViewAnalysis';

interface Props {
  data: any;
}

const YoutubeContent = ({ data }: Props) => {
  return (
    <>
      <HashTagSection youtubeHashTag={data.youtubeHashTag} />
      <ViewAnalysis
        youtubeGenderTrend={data.youtubeGenderTrend}
        youtubeAgeTrend={data.youtubeAgeTrend}
      />
      <TrendContents />
    </>
  );
};

export default YoutubeContent;
