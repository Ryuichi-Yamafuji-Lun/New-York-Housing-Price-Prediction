import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import AboutPage from './components/About';
import HousePricePage from './components/HousingPrice';

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
