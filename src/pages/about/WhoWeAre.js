import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const WhoWeAre = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {/* Header Banner */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: isMobile ? '150px' : '200px',
        backgroundImage: 'url(/images/panelarray.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: 'white',
        padding: '0 2rem'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}></div>
        <h1 style={{
          position: 'relative',
          zIndex: 1,
          fontSize: isMobile ? '2rem' : '2.5rem',
          marginBottom: '0.5rem'
        }}>Who We Are</h1>
        <div style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          gap: '0.5rem'
        }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          <span>{'>'}</span>
          <span>Who We Are</span>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: isMobile ? '1rem' : '2rem' }}>
        <div style={{ 
          display: 'flex', 
          gap: '2rem',
          flexDirection: isMobile ? 'column' : 'row'
        }}>
          {/* Left side - Main Content */}
          <div style={{ flex: '2' }}>
            <div style={{ marginBottom: isMobile ? '2rem' : '3rem' }}>
              <h1 style={{ 
                fontSize: isMobile ? '2rem' : '2.5rem', 
                color: '#333',
                marginBottom: isMobile ? '1.5rem' : '2rem'
              }}>Turning Sunlight into Power</h1>
              
              <p style={{ 
                fontSize: isMobile ? '1rem' : '1.1rem', 
                lineHeight: '1.8', 
                marginBottom: isMobile ? '1.5rem' : '2rem' 
              }}>
                <strong>"Blue Hope™"</strong>, represents our commitment to sustainable energy and environmental preservation. The Solar Energy sector in India is on the rise. According to Statistics, the Solar Power will soon become one of the biggest contributors to India's huge appetite for power. Solar Power will help in meeting the ever increasing power demands of our shining nation.
              </p>

              <p style={{ 
                fontSize: isMobile ? '1rem' : '1.1rem', 
                lineHeight: '1.8', 
                marginBottom: isMobile ? '1.5rem' : '2rem' 
              }}>
                Blue Hope Energy Limited (listed on BSE and NSE) is an ISO 9001:2008 & ISO 14001:2004 certified Company. Our Company is the first company to generate & sell Solar REC in the country from its solar power plant of 2 MW commissioned in March 2012 at Rajgarh (Madhya Pradesh).
              </p>

              <p style={{ 
                fontSize: isMobile ? '1rem' : '1.1rem', 
                lineHeight: '1.8', 
                marginBottom: isMobile ? '1.5rem' : '2rem' 
              }}>
                We have been working in the field of engineering for more than three decades. We started our journey in 1979 at the business capital of Madhya Pradesh- Indore under the proprietorship. The company during its initial years was involved in manufacturing of transformers and panel meters for energy controlling.
              </p>
            </div>

            {/* Contact Info Section */}
            <div>
              <div style={{ backgroundColor: '#FFD700', padding: '1rem', marginBottom: isMobile ? '1.5rem' : '2rem' }}>
                <h2 style={{ 
                  color: '#333', 
                  marginBottom: '0',
                  fontSize: isMobile ? '1.5rem' : '2rem'
                }}>Contact Info</h2>
              </div>
              
              <div style={{ 
                fontSize: isMobile ? '1rem' : '1.1rem', 
                lineHeight: '1.8' 
              }}>
                <h3 style={{ marginBottom: '1rem' }}>Corporate Office</h3>
                <p>701, NRK Business Park</p>
                <p>Vijay Nagar Square,</p>
                <p>Indore- 452010 (MP)</p>
                <p style={{ marginTop: '1rem' }}>0731 – 471 5300, 471 5330</p>
                <p>0731 – 471 5344</p>
                <p style={{ marginTop: '1rem' }}>info@bluehope.com</p>
                <p style={{ marginTop: '1rem' }}>For Corporate Sales Enquiry</p>
                <p>9893310032</p>
              </div>
            </div>
          </div>

          {!isMobile && (
            /* Right side - Journey and Map for desktop */
            <div style={{ flex: '1' }}>
              {/* Journey Section */}
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '2rem', color: '#333', marginBottom: '2rem' }}>OUR JOURNEY</h2>
                <div style={{ position: 'relative', padding: '20px 0' }}>
                  <img 
                    src="/images/hero.webp" 
                    alt="Company Journey Timeline"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>
              
              {/* Map Section */}
              <div>
                <div style={{ backgroundColor: '#FFD700', padding: '1rem', marginBottom: '2rem' }}>
                  <h2 style={{ color: '#333', marginBottom: '1rem' }}>Our Locations</h2>
                </div>
                <img 
                  src="/images/rooftop.jpg" 
                  alt="Locations Map"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Mobile Journey and Map Sections */}
        {isMobile && (
          <div style={{ marginTop: '2rem' }}>
            {/* Journey Section */}
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ 
                fontSize: '1.5rem', 
                color: '#333', 
                marginBottom: '1.5rem' 
              }}>OUR JOURNEY</h2>
              <div style={{ position: 'relative', padding: '15px 0' }}>
                <img 
                  src="/images/hero.webp" 
                  alt="Company Journey Timeline"
                  style={{ 
                    width: '100%', 
                    height: 'auto',
                    maxHeight: '300px',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>
            
            {/* Map Section */}
            <div>
              <div style={{ 
                backgroundColor: '#FFD700', 
                padding: '0.75rem', 
                marginBottom: '1.5rem' 
              }}>
                <h2 style={{ 
                  color: '#333', 
                  marginBottom: '0.5rem',
                  fontSize: '1.5rem'
                }}>Our Locations</h2>
              </div>
              <img 
                src="/images/rooftop.jpg" 
                alt="Locations Map"
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  maxHeight: '250px',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhoWeAre;