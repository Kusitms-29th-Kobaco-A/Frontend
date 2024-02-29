import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./hooks/ScrollToTop";
import Landing from "./pages/landing/Landing";
import Login from "./pages/login/Login";
import ArchiveMain from "./pages/archive-main/ArchiveMain";
import ArchivePopularVideos from "./pages/archive-popular-videos/ArchivePopularVidoes";
import ArchiveTotalVideos from "./pages/archive-total-videos/ArchiveTotalVidoes";
import ArchiveSavedVideos from "./pages/archive-saved-videos/ArchiveSavedVideos";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/archive" element={<ArchiveMain />}></Route>
        <Route
          path="/archive/popularVideos"
          element={<ArchivePopularVideos />}
        ></Route>
        <Route
          path="/archive/totalVideos"
          element={<ArchiveTotalVideos />}
        ></Route>
        <Route
          path="/archive/savedVideos"
          element={<ArchiveSavedVideos />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
