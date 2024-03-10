import Footer from '../../components/Footer';
import HomeHeader from '../new-home/components/HomeHeader';
import Copy from './components/Copy';
import HomeBottom from './components/HomeBottom';
import KobacoMenu from './components/KobacoMenu';
import Reference from './components/Reference';
import StoryBoard from './components/StoryBoard';
import Trend from './components/Trend';

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <KobacoMenu />
      <Reference />
      <Trend />
      <Copy />
      <StoryBoard />
      <HomeBottom />
      <Footer />
    </div>
  );
};

export default Home;
