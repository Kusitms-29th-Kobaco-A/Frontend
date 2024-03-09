import AdCopySection from '../../components/home/AdCopySection';
import HomeHeader from '../../components/home/HomeHeader';
import ReferenceSection from '../../components/home/ReferenceSection';
import StartSection from '../../components/home/StartSection';
import StoryboardSection from '../../components/home/StoryboardSection';
import TrendAnalysisSection from '../../components/home/TrendAnalysisSection';

const Home = () => {
  return (
    <div
      className="h-[calc(100vh-10.125rem)] w-full overflow-scroll bg-white"
      style={{ scrollSnapType: 'y mandatory' }}
    >
      <HomeHeader />
      <ReferenceSection />
      <TrendAnalysisSection />
      <AdCopySection />
      <StoryboardSection />
      <StartSection />
    </div>
  );
};

export default Home;
