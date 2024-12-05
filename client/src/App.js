import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../src/components/layout/MainLayout';
import WelcomePage from '../src/components/pages/WelcomePage';
import AboutPage from '../src/components/pages/About';
import HousePricePage from '../src/components/pages/HousingPrice';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout><WelcomePage /></MainLayout>} />
        <Route path="/about" element={<MainLayout><AboutPage /></MainLayout>} />
        <Route path="/houseprice" element={<MainLayout><HousePricePage /></MainLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
