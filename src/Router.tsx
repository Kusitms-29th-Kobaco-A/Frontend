import { BrowserRouter, Route, Routes } from 'react-router-dom';

import TAHome from './pages/trend-analysis/TAHome';
import TATopNavbar from './components/trend-analysis/navbar/TATopNavbar';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TATopNavbar />}>
          <Route path="" element={<TAHome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
