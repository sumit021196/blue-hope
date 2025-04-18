import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Business from './pages/Business';
import SolarPlants from './pages/SolarPlants';
import Contact from './pages/Contact';
import WhoWeAre from './pages/about/WhoWeAre';
import OurVision from './pages/about/OurVision';
import ChairmanMessage from './pages/about/ChairmanMessage';
import BoardOfDirectors from './pages/about/BoardOfDirectors';
import BoardCommittees from './pages/about/BoardCommittees';
import OurTeam from './pages/about/OurTeam';
import OurCertification from './pages/about/OurCertification';
import CorporateOffice from './pages/about/CorporateOffice';
import Factory from './pages/about/Factory';
import HRPolicy from './pages/about/HRPolicy';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import UjaasPark from './pages/UjaasPark';
import UjaasSite from './pages/UjaasSite';
import BlueHopeHome from './pages/BlueHopeHome';
import Transformers from './pages/Transformers';
import FinancialResults from './pages/investor/FinancialResults';

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
        <Route path="/about/chairman-message" element={<ChairmanMessage />} />
        <Route path="/about/board-of-directors" element={<BoardOfDirectors />} />
        <Route path="/about/board-committees" element={<BoardCommittees />} />
        <Route path="/about/our-team" element={<OurTeam />} />
        <Route path="/about/our-certification" element={<OurCertification />} />
        <Route path="/about/corporate-office" element={<CorporateOffice />} />
        <Route path="/about/factory" element={<Factory />} />
        <Route path="/about/hr-policy" element={<HRPolicy />} />
        <Route path="/ujaas-park" element={<UjaasPark />} />
        <Route path="/ujaas-site" element={<UjaasSite />} />
        <Route path="/products/blue-hope-home" element={<BlueHopeHome />} />
        <Route path="/products/transformers" element={<Transformers />} />
        <Route path="/investor/financial-results" element={<FinancialResults />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
