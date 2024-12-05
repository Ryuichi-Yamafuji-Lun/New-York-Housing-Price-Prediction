import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from '../src/components/pages/WelcomePage';
import AboutPage from '../src/components/pages/About';
import HousePricePage from '../src/components/pages/HousingPrice';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/houseprice" element={<HousePricePage />} />
      </Routes>
    </Router>
  );
}

export default App;
