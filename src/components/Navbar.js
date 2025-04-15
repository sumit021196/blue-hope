import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav style={{ 
      padding: '1rem', 
      backgroundColor: '#004d40', 
      color: 'white',
      fontFamily: "'Poppins', sans-serif"
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo Section */}
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src="/images/mainlogo.jpg" 
              alt="Blue Hope Logo" 
              style={{ 
                height: '40px',
                width: 'auto',
                marginRight: '10px',
                borderRadius: '4px'
              }}
            />
            <h1 style={{ 
              margin: 0,
              display: isMobile ? 'none' : 'block'
            }}>Blue Hope</h1>
          </div>
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: isMobile ? 'block' : 'none',
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '24px',
            cursor: 'pointer',
            padding: '5px'
          }}
        >
          {isMobileMenuOpen ? '×' : '☰'}
        </button>

        {/* Desktop Navigation */}
        <div style={{ 
          display: isMobile ? 'none' : 'flex',
          alignItems: 'center',
          gap: '2rem'
        }}>
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
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div style={{
          display: isMobile ? 'block' : 'none',
          position: 'absolute',
          top: '70px',
          left: 0,
          right: 0,
          backgroundColor: '#004d40',
          padding: '1rem',
          zIndex: 1000,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease'
        }}>
          <ul style={{ 
            listStyle: 'none',
            margin: 0,
            padding: 0
          }}>
            <li style={{ margin: '15px 0' }}><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
            <li style={{ margin: '15px 0' }}><Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link></li>
            <li style={{ margin: '15px 0' }}><Link to="/business" style={{ color: 'white', textDecoration: 'none' }}>Business</Link></li>
            <li style={{ margin: '15px 0' }}><Link to="/solar-plants" style={{ color: 'white', textDecoration: 'none' }}>Solar Plants</Link></li>
            <li style={{ margin: '15px 0' }}><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link></li>
            <li style={{ margin: '15px 0' }}>
              <button 
                style={{
                  backgroundColor: 'transparent',
                  border: '2px solid white',
                  color: 'white',
                  padding: '0.5rem 1.5rem',
                  borderRadius: '4px',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  width: '100%'
                }}
              >
                Sign In
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
