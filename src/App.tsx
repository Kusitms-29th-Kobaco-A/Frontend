import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import ArchiveMain from "./pages/archive-main/ArchiveMain";
import ArchivePopularVideos from "./pages/archive-popular-videos/ArchivePopularVidoes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/archive" element={<ArchiveMain />}></Route>
        <Route
          path="/archive/popularVideos"
          element={<ArchivePopularVideos />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
