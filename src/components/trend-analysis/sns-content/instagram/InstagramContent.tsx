import AdGraphSection from './AdGraphSection';
import HashTagSection from './HashTagSection';
import PostSection from './PostSection';
import TrendContents from './TrendContents';

interface Props {
  data: any;
  originalSearchKeyword: string;
}

const InstagramContent = ({ data, originalSearchKeyword }: Props) => {
  return (
    <>
      <HashTagSection
        instagramHashTag={data.instagramHashTag}
        originalSearchKeyword={originalSearchKeyword}
      />
      <AdGraphSection
        instagramAd={data.instagramAd}
        originalSearchKeyword={originalSearchKeyword}
      />
      <PostSection originalSearchKeyword={originalSearchKeyword} data={data} />
      <TrendContents
        originalSearchKeyword={originalSearchKeyword}
        data={data}
      />
    </>
  );
};

export default InstagramContent;
