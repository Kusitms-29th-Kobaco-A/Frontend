import AdGraphSection from './AdGraphSection';
import HashTagSection from './HashTagSection';
import PostSection from './PostSection';
import TrendContents from './TrendContents';

interface Props {
  data: any;
}

const InstagramContent = ({ data }: Props) => {
  return (
    <>
      <HashTagSection instagramHashTag={data.instagramHashTag} />
      <AdGraphSection instagramAd={data.instagramAd} />
      <PostSection instagramPost={data.instagramPost} />
      <TrendContents />
    </>
  );
};

export default InstagramContent;
