import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Business from './pages/Business';
import SolarPlants from './pages/SolarPlants';
import Contact from './pages/Contact';
import WhoWeAre from './pages/about/WhoWeAre';
import OurVision from './pages/about/OurVision';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/business" element={<Business />} />
        <Route path="/solar-plants" element={<SolarPlants />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/about/vision-mission" element={<OurVision />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
