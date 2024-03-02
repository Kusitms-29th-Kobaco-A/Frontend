import { BrowserRouter, Route, Routes } from 'react-router-dom';

import TAHome from './pages/trend-analysis/TAHome';
import Landing from './pages/landing/Landing';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}>
          <Route path="trend-analysis" element={<TAHome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
