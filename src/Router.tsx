import { BrowserRouter, Route, Routes } from 'react-router-dom';

import TAHome from './pages/trend-analysis/TAHome';
import Landing from './pages/landing/Landing';
import Home from './pages/home/Home';
import Login from "./pages/login/Login";
import ArchiveMain from "./pages/archive-main/ArchiveMain";
import ArchivePopularVideos from "./pages/archive-popular-videos/ArchivePopularVidoes";
import ArchiveTotalVideos from "./pages/archive-total-videos/ArchiveTotalVideos";
import ArchiveSavedVideos from "./pages/archive-saved-videos/ArchiveSavedVideos";
import ArchiveDetail from "./pages/archive-detail/ArchiveDetail";
import ArchiveSavedVideosDetail from "./pages/archive-saved-videos-detail/ArchiveSavedVideosDetail";
import ArchiveDetailSample from "./pages/sample-detail/SampleDetail";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Landing />}>
          <Route path="" element={<Home />} />
          <Route path="trend-analysis" element={<TAHome />} />
        </Route>
        <Route path="/" element={<Landing />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/archive" element={<ArchiveMain />}></Route>
          <Route
            path="/archive/detail/:advertiseId"
            element={<ArchiveDetail />}
          ></Route>
          <Route
            path="/archive/popularVideos"
            element={<ArchivePopularVideos />}
          ></Route>
          <Route
            path="/archive/savedVideos"
            element={<ArchiveSavedVideos />}
          ></Route>
          <Route
            path="/archive/savedVideos/inFolder/:directoryId"
            element={<ArchiveSavedVideosDetail />}
          ></Route>
          <Route
            path="/archive/totalVideos"
            element={<ArchiveTotalVideos />}
          ></Route>
          <Route
            path="/archive/detail/sample"
            element={<ArchiveDetailSample />}
          ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
