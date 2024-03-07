import AdCopySection from '../../components/home/AdCopySection';
import HomeHeader from '../../components/home/HomeHeader';
import ReferenceSection from '../../components/home/ReferenceSection';
import StartSection from '../../components/home/StartSection';
import StoryboardSection from '../../components/home/StoryboardSection';
import TrendAnalysisSection from '../../components/home/TrendAnalysisSection';

const Home = () => {
  return (
    <div className="w-full bg-white">
      <div className="w-full px-6">
        <div className="mx-auto w-[1024px]">
          <HomeHeader />
          <ReferenceSection />
          <TrendAnalysisSection />
          <AdCopySection />
          <StoryboardSection />
        </div>
      </div>
      <StartSection />
    </div>
  );
};

export default Home;
