import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isInvestorDropdownOpen, setIsInvestorDropdownOpen] = useState(false);
  const [isNewsRoomDropdownOpen, setIsNewsRoomDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  // Add states for mobile submenu toggles
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileInvestorOpen, setMobileInvestorOpen] = useState(false);
  const [mobileNewsRoomOpen, setMobileNewsRoomOpen] = useState(false);

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

  // Function to close mobile menu
  const handleMobileMenuItemClick = () => {
    setIsMobileMenuOpen(false);
    setMobileAboutOpen(false);
    setMobileProductsOpen(false);
    setMobileInvestorOpen(false);
    setMobileNewsRoomOpen(false);
  };

  // Function to toggle mobile submenus
  const toggleMobileSubmenu = (submenu, event) => {
    event.preventDefault();
    switch(submenu) {
      case 'about':
        setMobileAboutOpen(!mobileAboutOpen);
        setMobileProductsOpen(false);
        setMobileInvestorOpen(false);
        setMobileNewsRoomOpen(false);
        break;
      case 'products':
        setMobileProductsOpen(!mobileProductsOpen);
        setMobileAboutOpen(false);
        setMobileInvestorOpen(false);
        setMobileNewsRoomOpen(false);
        break;
      case 'investor':
        setMobileInvestorOpen(!mobileInvestorOpen);
        setMobileAboutOpen(false);
        setMobileProductsOpen(false);
        setMobileNewsRoomOpen(false);
        break;
      case 'newsroom':
        setMobileNewsRoomOpen(!mobileNewsRoomOpen);
        setMobileAboutOpen(false);
        setMobileProductsOpen(false);
        setMobileInvestorOpen(false);
        break;
      default:
        break;
    }
  };

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
              src="/images/logo.jpeg" 
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
            <li 
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
              style={{ position: 'relative' }}
            >
              <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>
                About
              </Link>
              {isAboutDropdownOpen && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: '0',
                  backgroundColor: '#004d40',
                  padding: '0.5rem',
                  borderRadius: '4px',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                  zIndex: 1000,
                  minWidth: '200px'
                }}>
                  <Link 
                    to="/who-we-are" 
                    style={{ 
                      color: 'white', 
                      textDecoration: 'none',
                      display: 'block',
                      padding: '0.5rem 1rem',
                      ':hover': {
                        backgroundColor: 'rgba(255,255,255,0.1)'
                      }
                    }}
                  >
                    Who We Are
                  </Link>
                  <Link 
                    to="/about/vision-mission" 
                    style={{ 
                      color: 'white', 
                      textDecoration: 'none',
                      display: 'block',
                      padding: '0.5rem 1rem'
                    }}
                  >
                    Vision & Mission
                  </Link>
                  <Link 
                    to="/about/chairman-message" 
                    style={{ 
                      color: 'white', 
                      textDecoration: 'none',
                      display: 'block',
                      padding: '0.5rem 1rem'
                    }}
                  >
                    Chairman's Message
                  </Link>
                  <Link 
                    to="/about/board-of-directors" 
                    style={{ 
                      color: 'white', 
                      textDecoration: 'none',
                      display: 'block',
                      padding: '0.5rem 1rem'
                    }}
                  >
                    Board of Directors
                  </Link>
                  <Link 
                    to="/about/our-team" 
                    style={{ 
                      color: 'white', 
                      textDecoration: 'none',
                      display: 'block',
                      padding: '0.5rem 1rem'
                    }}
                  >
                    Our Team
                  </Link>
                  <Link 
                    to="/about/board-committees" 
                    style={{ 
                      color: 'white', 
                      textDecoration: 'none',
                      display: 'block',
                      padding: '0.5rem 1rem'
                    }}
                  >
                    Board Committees
                  </Link>
                  <Link 
                    to="/about/our-certification" 
                    style={{ 
                      color: 'white', 
                      textDecoration: 'none',
                      display: 'block',
                      padding: '0.5rem 1rem'
                    }}
                  >
                    Our Certification
                  </Link>
                  <Link 
                    to="/about/corporate-office" 
                    style={{ 
                      color: 'white', 
                      textDecoration: 'none',
                      display: 'block',
                      padding: '0.5rem 1rem'
                    }}
                  >
                    Corporate Office
                  </Link>
                  <Link 
                    to="/about/factory" 
                    style={{ 
                      color: 'white', 
                      textDecoration: 'none',
                      display: 'block',
                      padding: '0.5rem 1rem'
                    }}
                  >
                    Factory
                  </Link>
                  <Link 
                    to="/about/hr-policy" 
                    style={{ 
                      color: 'white', 
                      textDecoration: 'none',
                      display: 'block',
                      padding: '0.5rem 1rem'
                    }}
                  >
                    HR Policy
                  </Link>
                </div>
              )}
            </li>
            <li 
              onMouseEnter={() => setIsProductsDropdownOpen(true)}
              onMouseLeave={() => setIsProductsDropdownOpen(false)}
              style={{ position: 'relative' }}
            >
              <Link to="/products" style={{ color: 'white', textDecoration: 'none' }}>
                Products
              </Link>
              {isProductsDropdownOpen && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: '0',
                  backgroundColor: '#004d40',
                  padding: '0.5rem',
                  borderRadius: '4px',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                  zIndex: 1000,
                  minWidth: '200px'
                }}>
                  <Link 
                    to="/ujaas-park" 
                    style={{ 
                      color: 'white', 
                      textDecoration: 'none',
                      display: 'block',
                      padding: '0.5rem 1rem'
                    }}
                  >
                    Blue Hope Park
                  </Link>
                  <Link 
                    to="/ujaas-site" 
                    style={{ 
                      color: 'white', 
                      textDecoration: 'none',
                      display: 'block',
                      padding: '0.5rem 1rem'
                    }}
                  >
                    Blue Hope My Site
                  </Link>
                  <Link 
                    to="/products/blue-hope-home" 
                    style={{ 
                      color: 'white', 
                      textDecoration: 'none',
                      display: 'block',
                      padding: '0.5rem 1rem'
                    }}
                  >
                    Blue Hope Home
                  </Link>
                  <Link 
                    to="/products/transformers" 
                    style={{ 
                      color: 'white', 
                      textDecoration: 'none',
                      display: 'block',
                      padding: '0.5rem 1rem'
                    }}
                  >
                    Transformers
                  </Link>
                </div>
              )}
            </li>
            <li 
              onMouseEnter={() => setIsInvestorDropdownOpen(true)}
              onMouseLeave={() => setIsInvestorDropdownOpen(false)}
              style={{ position: 'relative' }}
            >
              <Link to="/investor-relations" style={{ color: 'white', textDecoration: 'none' }}>
                Investor Relations
              </Link>
              {isInvestorDropdownOpen && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: '0',
                  backgroundColor: '#004d40',
                  padding: '0.5rem',
                  borderRadius: '4px',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                  zIndex: 1000,
                  minWidth: '300px'
                }}>
                  <Link to="/investor/financial-results" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 1rem' }}>
                    Financial Results
                  </Link>
                  <Link to="/investor/shareholding-pattern" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 1rem' }}>
                    Shareholding Pattern
                  </Link>
                  <Link to="/investor/stock-exchange" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 1rem' }}>
                    Stock Exchange Disclosure
                  </Link>
                  <Link to="/investor/grievance" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 1rem' }}>
                    Investor Grievance
                  </Link>
                  <Link to="/investor/code-of-conduct" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 1rem' }}>
                    Code of Conduct
                  </Link>
                  <Link to="/investor/statutory-documents" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 1rem' }}>
                    Statutory Documents
                  </Link>
                  <Link to="/investor/annual-reports" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 1rem' }}>
                    Annual Reports
                  </Link>
                  <Link to="/investor/offer-document" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 1rem' }}>
                    Offer Document
                  </Link>
                  <Link to="/investor/shareholders-help" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 1rem' }}>
                    Shareholder's Help Desk
                  </Link>
                  <Link to="/investor/postal-ballot" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 1rem' }}>
                    Postal Ballot
                  </Link>
                  <Link to="/investor/agm-egm-notice" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 1rem' }}>
                    AGM/EGM Notice
                  </Link>
                  <Link to="/investor/book-closure" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 1rem' }}>
                    Book Closure Notice
                  </Link>
                  <Link to="/investor/nomination-form" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 1rem' }}>
                    Nomination Form
                  </Link>
                  <Link to="/investor/scrutinizer-reports" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 1rem' }}>
                    Scrutinizer's Reports
                  </Link>
                  <Link to="/investor/unclaimed-dividend" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 1rem' }}>
                    Unclaimed Dividend
                  </Link>
                  <Link to="/investor/dividend-history" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 1rem' }}>
                    Dividend History
                  </Link>
                  <Link to="/investor/presentations" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 1rem' }}>
                    Investor Presentations
                  </Link>
                  <Link to="/investor/familiarization-programme" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 1rem' }}>
                    Familiarization Programme
                  </Link>
                  <Link to="/investor/independent-director-terms" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 1rem' }}>
                    Terms and Conditions for Independent Director
                  </Link>
                </div>
              )}
            </li>
            <li><Link to="/business" style={{ color: 'white', textDecoration: 'none' }}>Business</Link></li>
            <li><Link to="/solar-plants" style={{ color: 'white', textDecoration: 'none' }}>Solar Plants</Link></li>
            <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link></li>
            <li 
              onMouseEnter={() => setIsNewsRoomDropdownOpen(true)}
              onMouseLeave={() => setIsNewsRoomDropdownOpen(false)}
              style={{ position: 'relative' }}
            >
              <Link to="/news-room" style={{ color: 'white', textDecoration: 'none' }}>
                News Room
              </Link>
              {isNewsRoomDropdownOpen && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: '0',
                  backgroundColor: '#004d40',
                  padding: '0.5rem',
                  borderRadius: '4px',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                  zIndex: 1000,
                  minWidth: '200px'
                }}>
                  <Link 
                    to="/news-room/news" 
                    style={{ 
                      color: 'white', 
                      textDecoration: 'none',
                      display: 'block',
                      padding: '0.5rem 1rem'
                    }}
                  >
                    News
                  </Link>
                  <Link 
                    to="/news-room/events" 
                    style={{ 
                      color: 'white', 
                      textDecoration: 'none',
                      display: 'block',
                      padding: '0.5rem 1rem'
                    }}
                  >
                    Events
                  </Link>
                  <Link 
                    to="/news-room/videos" 
                    style={{ 
                      color: 'white', 
                      textDecoration: 'none',
                      display: 'block',
                      padding: '0.5rem 1rem'
                    }}
                  >
                    Videos
                  </Link>
                  <Link 
                    to="/news-room/archive" 
                    style={{ 
                      color: 'white', 
                      textDecoration: 'none',
                      display: 'block',
                      padding: '0.5rem 1rem'
                    }}
                  >
                    Archive
                  </Link>
                  <Link 
                    to="/news-room/awards" 
                    style={{ 
                      color: 'white', 
                      textDecoration: 'none',
                      display: 'block',
                      padding: '0.5rem 1rem'
                    }}
                  >
                    Awards
                  </Link>
                  <Link 
                    to="/news-room/newsletter" 
                    style={{ 
                      color: 'white', 
                      textDecoration: 'none',
                      display: 'block',
                      padding: '0.5rem 1rem'
                    }}
                  >
                    Newsletter
                  </Link>
                </div>
              )}
            </li>
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
      <div style={{
        position: 'absolute',
        top: '70px',
        left: 0,
        right: 0,
        backgroundColor: '#004d40',
        padding: isMobileMenuOpen ? '1rem' : '0',
        maxHeight: isMobileMenuOpen ? '2000px' : '0', // Large enough to contain all content
        opacity: isMobileMenuOpen ? '1' : '0',
        overflow: 'hidden',
        transition: 'all 0.3s ease-in-out',
        zIndex: 1000,
        boxShadow: isMobileMenuOpen ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none'
      }}>
        <ul style={{ 
          listStyle: 'none',
          margin: 0,
          padding: 0,
          opacity: isMobileMenuOpen ? '1' : '0',
          transform: `translateY(${isMobileMenuOpen ? '0' : '-10px'})`,
          transition: 'all 0.3s ease-in-out'
        }}>
          <li style={{ margin: '15px 0' }}>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }} onClick={handleMobileMenuItemClick}>
              Home
            </Link>
          </li>
          
          {/* About Section */}
          <li style={{ margin: '15px 0' }}>
            <div 
              style={{ 
                color: 'white', 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer'
              }}
              onClick={(e) => toggleMobileSubmenu('about', e)}
            >
              <span>About</span>
              <span style={{ transition: 'transform 0.3s ease' }}>
                {mobileAboutOpen ? '▼' : '▶'}
              </span>
            </div>
            <div style={{ 
              display: mobileAboutOpen ? 'block' : 'none',
              paddingLeft: '1rem',
              marginTop: '0.5rem'
            }}>
              <Link to="/who-we-are" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 0' }} onClick={handleMobileMenuItemClick}>Who We Are</Link>
              <Link to="/about/vision-mission" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 0' }} onClick={handleMobileMenuItemClick}>Vision & Mission</Link>
              <Link to="/about/chairman-message" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 0' }} onClick={handleMobileMenuItemClick}>Chairman's Message</Link>
              <Link to="/about/board-of-directors" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 0' }} onClick={handleMobileMenuItemClick}>Board of Directors</Link>
              <Link to="/about/our-team" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 0' }} onClick={handleMobileMenuItemClick}>Our Team</Link>
              <Link to="/about/board-committees" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 0' }} onClick={handleMobileMenuItemClick}>Board Committees</Link>
              <Link to="/about/our-certification" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 0' }} onClick={handleMobileMenuItemClick}>Our Certification</Link>
              <Link to="/about/corporate-office" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 0' }} onClick={handleMobileMenuItemClick}>Corporate Office</Link>
              <Link to="/about/factory" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 0' }} onClick={handleMobileMenuItemClick}>Factory</Link>
              <Link to="/about/hr-policy" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 0' }} onClick={handleMobileMenuItemClick}>HR Policy</Link>
            </div>
          </li>

          {/* Products Section */}
          <li style={{ margin: '15px 0' }}>
            <div 
              style={{ 
                color: 'white', 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer'
              }}
              onClick={(e) => toggleMobileSubmenu('products', e)}
            >
              <span>Products</span>
              <span style={{ transition: 'transform 0.3s ease' }}>
                {mobileProductsOpen ? '▼' : '▶'}
              </span>
            </div>
            <div style={{ 
              display: mobileProductsOpen ? 'block' : 'none',
              paddingLeft: '1rem',
              marginTop: '0.5rem'
            }}>
              {/* Products submenu items */}
              <Link to="/ujaas-park" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 0' }} onClick={handleMobileMenuItemClick}>Blue Hope Park</Link>
              <Link to="/ujaas-site" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 0' }} onClick={handleMobileMenuItemClick}>Blue Hope My Site</Link>
              <Link to="/products/blue-hope-home" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 0' }} onClick={handleMobileMenuItemClick}>Blue Hope Home</Link>
              <Link to="/products/transformers" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 0' }} onClick={handleMobileMenuItemClick}>Transformers</Link>
            </div>
          </li>

          {/* Investor Relations Section */}
          <li style={{ margin: '15px 0' }}>
            <div 
              style={{ 
                color: 'white', 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer'
              }}
              onClick={(e) => toggleMobileSubmenu('investor', e)}
            >
              <span>Investor Relations</span>
              <span style={{ transition: 'transform 0.3s ease' }}>
                {mobileInvestorOpen ? '▼' : '▶'}
              </span>
            </div>
            <div style={{ 
              display: mobileInvestorOpen ? 'block' : 'none',
              paddingLeft: '1rem',
              marginTop: '0.5rem'
            }}>
              {/* Investor Relations submenu items */}
              <Link to="/investor/financial-results" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 0' }} onClick={handleMobileMenuItemClick}>Financial Results</Link>
              <Link to="/investor/shareholding-pattern" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 0' }} onClick={handleMobileMenuItemClick}>Shareholding Pattern</Link>
              <Link to="/investor/stock-exchange" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 0' }} onClick={handleMobileMenuItemClick}>Stock Exchange Disclosure</Link>
              <Link to="/investor/grievance" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 0' }} onClick={handleMobileMenuItemClick}>Investor Grievance</Link>
              <Link to="/investor/code-of-conduct" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 0' }} onClick={handleMobileMenuItemClick}>Code of Conduct</Link>
              <Link to="/investor/statutory-documents" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 0' }} onClick={handleMobileMenuItemClick}>Statutory Documents</Link>
              <Link to="/investor/annual-reports" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 0' }} onClick={handleMobileMenuItemClick}>Annual Reports</Link>
              <Link to="/investor/offer-document" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 0' }} onClick={handleMobileMenuItemClick}>Offer Document</Link>
              <Link to="/investor/shareholders-help" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 0' }} onClick={handleMobileMenuItemClick}>Shareholder's Help Desk</Link>
              <Link to="/investor/postal-ballot" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 0' }} onClick={handleMobileMenuItemClick}>Postal Ballot</Link>
              <Link to="/investor/agm-egm-notice" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 0' }} onClick={handleMobileMenuItemClick}>AGM/EGM Notice</Link>
              <Link to="/investor/book-closure" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 0' }} onClick={handleMobileMenuItemClick}>Book Closure Notice</Link>
              <Link to="/investor/nomination-form" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 0' }} onClick={handleMobileMenuItemClick}>Nomination Form</Link>
              <Link to="/investor/scrutinizer-reports" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 0' }} onClick={handleMobileMenuItemClick}>Scrutinizer's Reports</Link>
              <Link to="/investor/unclaimed-dividend" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 0' }} onClick={handleMobileMenuItemClick}>Unclaimed Dividend</Link>
              <Link to="/investor/dividend-history" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 0' }} onClick={handleMobileMenuItemClick}>Dividend History</Link>
              <Link to="/investor/presentations" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 0' }} onClick={handleMobileMenuItemClick}>Investor Presentations</Link>
              <Link to="/investor/familiarization-programme" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 0' }} onClick={handleMobileMenuItemClick}>Familiarization Programme</Link>
              <Link to="/investor/independent-director-terms" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 0' }} onClick={handleMobileMenuItemClick}>Terms and Conditions for Independent Director</Link>
            </div>
          </li>

          {/* News Room Section */}
          <li style={{ margin: '15px 0' }}>
            <div 
              style={{ 
                color: 'white', 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer'
              }}
              onClick={(e) => toggleMobileSubmenu('newsroom', e)}
            >
              <span>News Room</span>
              <span style={{ transition: 'transform 0.3s ease' }}>
                {mobileNewsRoomOpen ? '▼' : '▶'}
              </span>
            </div>
            <div style={{ 
              display: mobileNewsRoomOpen ? 'block' : 'none',
              paddingLeft: '1rem',
              marginTop: '0.5rem'
            }}>
              {/* News Room submenu items */}
              <Link to="/news-room/news" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 0' }} onClick={handleMobileMenuItemClick}>News</Link>
              <Link to="/news-room/events" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 0' }} onClick={handleMobileMenuItemClick}>Events</Link>
              <Link to="/news-room/videos" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 0' }} onClick={handleMobileMenuItemClick}>Videos</Link>
              <Link to="/news-room/archive" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 0' }} onClick={handleMobileMenuItemClick}>Archive</Link>
              <Link to="/news-room/awards" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 0' }} onClick={handleMobileMenuItemClick}>Awards</Link>
              <Link to="/news-room/newsletter" style={{ color: 'white', textDecoration: 'none', display: 'block', padding: '0.5rem 0' }} onClick={handleMobileMenuItemClick}>Newsletter</Link>
            </div>
          </li>

          <li style={{ margin: '15px 0' }}>
            <Link to="/business" style={{ color: 'white', textDecoration: 'none' }} onClick={handleMobileMenuItemClick}>
              Business
            </Link>
          </li>
          <li style={{ margin: '15px 0' }}>
            <Link to="/solar-plants" style={{ color: 'white', textDecoration: 'none' }} onClick={handleMobileMenuItemClick}>
              Solar Plants
            </Link>
          </li>
          <li style={{ margin: '15px 0' }}>
            <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }} onClick={handleMobileMenuItemClick}>
              Contact
            </Link>
          </li>
          
          <li style={{ margin: '15px 0' }}>
            <button 
              onClick={handleMobileMenuItemClick}
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
    </nav>
  );
}

export default Navbar;
