import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import ArchiveMain from "./pages/archive-main/ArchiveMain";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/archive" element={<ArchiveMain />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
