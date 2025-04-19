import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024); // Increased breakpoint
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024); // Increased breakpoint
      if (window.innerWidth > 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMobileMenuItemClick = () => {
    setIsMobileMenuOpen(false);
    setActiveSubmenu(null);
  };

  const toggleSubmenu = (menu) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  const menuItems = {
    about: [
      { title: 'Who We Are', path: '/who-we-are' },
      { title: 'Vision & Mission', path: '/about/vision-mission' },
      { title: "Chairman's Message", path: '/about/chairman-message' },
      { title: 'Board of Directors', path: '/about/board-of-directors' },
      { title: 'Board Committees', path: '/about/board-committees' },
      { title: 'Our Team', path: '/about/our-team' },
      { title: 'Our Certification', path: '/about/our-certification' },
      { title: 'Corporate Office', path: '/about/corporate-office' },
      { title: 'Factory', path: '/about/factory' },
      { title: 'HR Policy', path: '/about/hr-policy' }
    ],
    business: [
      { title: 'Solar Plants', path: '/solar-plants' },
      { title: 'Ujaas Park', path: '/ujaas-park' },
      { title: 'Ujaas Site', path: '/ujaas-site' }
    ],
    products: [
      { title: 'Blue Hope Home', path: '/products/blue-hope-home' },
      { title: 'Transformers', path: '/products/transformers' }
    ],
    investor: [
      { title: 'Financial Results', path: '/investor/financial-results' },
      { title: 'Shareholding Pattern', path: '/investor/shareholding-pattern' },
      { title: 'Grievance', path: '/investor/grievance' }
    ]
  };

  return (
    <nav>
      <div style={{
        backgroundColor: '#1e40af',
        padding: isMobile ? '0.5rem' : '0.75rem',
        position: 'fixed',
        top: isMobile ? '42px' : '58px',
        left: 0,
        right: 0,
        zIndex: 1002,  // Increased z-index to be above other content
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        width: '100%'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative'
        }}>
          {/* Logo */}
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            <img src="/images/logo.jpeg" alt="Logo" style={{ 
              height: isMobile ? '50px' : '70px',
              width: 'auto',
              objectFit: 'contain'
            }} />
          </Link>

          {/* Hamburger Menu Button */}
          {isMobile && (
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '2rem',
                cursor: 'pointer',
                padding: '0.5rem',
                zIndex: 1002,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '44px',
                height: '44px',
                marginRight: '5px'
              }}
            >
              ☰
            </button>
          )}

          {/* Navigation Links */}
          <div style={{
            display: isMobile ? (isMobileMenuOpen ? 'flex' : 'none') : 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '0.5rem' : '2rem',
            position: isMobile ? 'absolute' : 'static',
            top: isMobile ? '100%' : 'auto',
            right: isMobile ? '0' : 'auto',
            backgroundColor: isMobile ? '#1e40af' : 'transparent',
            padding: isMobile ? '0.75rem' : '0',
            zIndex: 1001,
            alignItems: isMobile ? 'flex-start' : 'center',
            width: isMobile ? '160px' : 'auto',
            maxWidth: '80vw',
            borderRadius: isMobile ? '0 0 0 8px' : '0',
            boxShadow: isMobile ? '-2px 2px 4px rgba(0,0,0,0.1)' : 'none'
          }}>
            <Link to="/" style={{ 
              color: 'white', 
              textDecoration: 'none',
              width: isMobile ? '100%' : 'auto',
              padding: isMobile ? '0.5rem 0.75rem' : '0',
              fontSize: '1.2rem'
            }} onClick={handleMobileMenuItemClick}>
              Home
            </Link>

            {Object.entries(menuItems).map(([key, items]) => (
              <div 
                key={key}
                style={{ 
                  position: 'relative',
                  width: isMobile ? '100%' : 'auto'
                }}
                onMouseEnter={() => !isMobile && toggleSubmenu(key)}
                onMouseLeave={() => !isMobile && toggleSubmenu(null)}
              >
                <button
                  onClick={() => isMobile && toggleSubmenu(key)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'white',
                    cursor: 'pointer',
                    padding: isMobile ? '0.5rem 0.75rem' : '0',
                    fontSize: '1.2rem',
                    textTransform: 'capitalize',
                    width: isMobile ? '100%' : 'auto',
                    textAlign: isMobile ? 'left' : 'center',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <span>{key}</span>
                  <span style={{ marginLeft: '0.5rem', fontSize: '1rem' }}>▼</span>
                </button>

                {activeSubmenu === key && (
                  <div style={{
                    position: isMobile ? 'relative' : 'absolute',
                    top: isMobile ? '0' : '100%',
                    right: isMobile ? '0' : 'auto',
                    backgroundColor: '#ffffff',
                    padding: '0.25rem 0',
                    borderRadius: '4px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    width: isMobile ? '100%' : '180px',
                    zIndex: 1003  // Increased to be above navbar
                  }}>
                    {items.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        style={{
                          color: '#333',
                          textDecoration: 'none',
                          padding: '0.5rem 0.75rem',
                          display: 'block',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          width: '100%',
                          fontSize: '1.1rem'
                        }}
                        onClick={handleMobileMenuItemClick}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <Link to="/contact" style={{ 
              color: 'white', 
              textDecoration: 'none',
              width: isMobile ? '100%' : 'auto',
              padding: isMobile ? '0.5rem 0.75rem' : '0',
              fontSize: '1.2rem'
            }} onClick={handleMobileMenuItemClick}>
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div style={{ height: isMobile ? '107px' : '143px' }} />  {/* Reduced mobile height: 42px (counter) + 65px (navbar) */}
    </nav>
  );
}

export default Navbar;
