import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav style={{ 
      padding: '1rem', 
      backgroundColor: '#004d40', 
      color: 'white',
      fontFamily: "'Poppins', sans-serif",
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <h1 style={{ margin: 0 }}>Blue Hope</h1>
        <ul style={{ 
          display: 'flex', 
          listStyle: 'none', 
          gap: '2.5rem',
          fontSize: '1.1rem',
          margin: 0,
          padding: 0
        }}>
          <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
          <li><Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link></li>
          <li><Link to="/business" style={{ color: 'white', textDecoration: 'none' }}>Business</Link></li>
          <li><Link to="/solar-plants" style={{ color: 'white', textDecoration: 'none' }}>Solar Plants</Link></li>
          <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link></li>
        </ul>
      </div>
      <button 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          backgroundColor: isHovered ? 'white' : 'transparent',
          border: '2px solid white',
          color: isHovered ? '#004d40' : 'white',
          padding: '0.5rem 1.5rem',
          borderRadius: '4px',
          fontSize: '1rem',
          cursor: 'pointer',
          fontFamily: 'inherit',
          transition: 'all 0.3s ease'
        }}
      >
        Sign In
      </button>
    </nav>
  );
}

export default Navbar;
