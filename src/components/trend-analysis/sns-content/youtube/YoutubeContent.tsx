import HashTagSection from './HashTagSection';
import TrendContents from './TrendContents';
import ViewAnalysis from './ViewAnalysis';

interface Props {
  data: any;
  originalSearchKeyword: string;
}

const YoutubeContent = ({ data, originalSearchKeyword }: Props) => {
  return (
    <>
      <HashTagSection
        youtubeHashTag={data.youtubeHashTag}
        originalSearchKeyword={originalSearchKeyword}
      />
      <ViewAnalysis
        youtubeGenderTrend={data.youtubeGenderTrend}
        youtubeAgeTrend={data.youtubeAgeTrend}
        originalSearchKeyword={originalSearchKeyword}
      />
      <TrendContents originalSearchKeyword={originalSearchKeyword} />
    </>
  );
};

export default YoutubeContent;
