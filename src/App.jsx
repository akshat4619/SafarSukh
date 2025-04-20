import React from 'react';
import LandingPage from './components/LandingPage';
import SeatSwapPortal from './components/SeatSwapPortal';
import { Route, Routes } from 'react-router-dom';
import EnterPNR from './components/EnterPNR';
import PortalLayout from './components/PortalLayout';

const App = () => {
  return (
    <div>
      <Routes>
        {/* Landing page route */}
        <Route path='/' element={<LandingPage />} />

        {/* Portal layout and its nested routes */}
        <Route path='/seat-swap' element={<PortalLayout />}>
          {/* Default route for seat swap portal (dashboard) */}
          <Route index element={<SeatSwapPortal />} />

          {/* Enter PNR route */}
          <Route path='enter-pnr' element={<EnterPNR />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
