import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [displayedCapacity, setDisplayedCapacity] = useState(0);
  const targetCapacity = 235.7;
  const [currentClientSlide, setCurrentClientSlide] = useState(0);

  const clients = [
    { name: 'Future Group', logo: '/images/future-group-logo.png' },
    { name: 'Lee Vedla', logo: '/images/lee-vedla-logo.png' },
    { name: 'R Square', logo: '/images/r-square-logo.png' },
    { name: 'Apollo', logo: '/images/apollo-logo.png' },
    { name: 'Rockwell', logo: '/images/rockwell-logo.png' },
  ];

  const newsItems = [
    {
      date: '03/14/2018',
      text: 'OUR JMD, MR. VIKALP MUNDRA HAS BEEN SELECTED AS THE CHAIRMAN FOR ELECRAMA 2020. WE FEEL OBLIGED TO BE A PART OF SUCH AN ICONIC EVENT.'
    },
    {
      date: '02/15/2018',
      text: 'Ujaas Energy Ltd announces successful completion of 25MW solar project in Madhya Pradesh.'
    },
    {
      date: '01/20/2018',
      text: 'Ujaas Energy achieves milestone of 1000+ satisfied customers across India.'
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Animation duration in milliseconds
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easedProgress = 1 - Math.pow(1 - progress, 3); // Cubic easing
      setDisplayedCapacity(targetCapacity * easedProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setDisplayedCapacity(targetCapacity);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Installed Capacity Counter */}
      <div style={{ 
        backgroundColor: '#f0f0f0', 
        padding: isMobile ? '8px' : '15px',
        textAlign: 'center',
        borderBottom: '1px solid #ddd',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1001
      }}>
        <span style={{ 
          fontSize: isMobile ? '16px' : '24px', 
          fontWeight: '500' 
        }}>Installed Capacity(MW): </span>
        <span style={{ 
          backgroundColor: '#000', 
          color: '#fff',
          padding: isMobile ? '2px 6px' : '4px 8px',
          margin: '0 2px',
          fontSize: isMobile ? '20px' : '28px',
          fontWeight: 'bold',
          borderRadius: '4px'
        }}>{Math.floor(displayedCapacity)}</span>
        <span style={{ 
          backgroundColor: '#000', 
          color: '#fff',
          padding: isMobile ? '2px 6px' : '4px 8px',
          fontSize: isMobile ? '20px' : '28px',
          fontWeight: 'bold',
          borderRadius: '4px'
        }}>{(displayedCapacity % 1).toFixed(1).substring(2)}</span>
      </div>

      <div style={{ 
        fontFamily: "'Poppins', sans-serif", 
        marginTop: isMobile ? '65px' : '85px' 
      }}>
        {/* Latest News Ticker */}
        <div style={{
          backgroundColor: '#fff',
          padding: '10px',
          borderBottom: '1px solid #ddd',
          overflow: 'hidden',
          position: 'relative',
          whiteSpace: 'nowrap'
        }}>
          <div style={{
            display: 'inline-block',
            animation: 'ticker 30s linear infinite',
            paddingLeft: '100%',
            whiteSpace: 'nowrap'
          }}>
            {newsItems.map((item, index) => (
              <span key={index} style={{ marginRight: '50px' }}>
                <span style={{ color: '#ff4444', marginRight: '10px' }}>{item.date}</span>
                <span>{item.text}</span>
              </span>
            ))}
          </div>
          <style>
            {`
              @keyframes ticker {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-100%);
                }
              }
            `}
          </style>
        </div>

        {/* Hero Section - eSpa Electric Scooter */}
        <div style={{
          backgroundColor: '#e8f4f9',
          padding: isMobile ? '20px 15px' : '40px 20px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
            <img src="/images/escooter.jpg" alt="White eSpa Scooter" style={{
              position: 'absolute',
              left: '0',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '300px',
              display: isMobile ? 'none' : 'block'
            }} />
            
            <img src="/images/escooter.jpg" alt="Red eSpa Scooter" style={{
              position: 'absolute',
              right: '0',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '300px',
              display: isMobile ? 'none' : 'block'
            }} />

            <img src="/images/logo.jpeg" alt="eSpa Logo" style={{
              width: isMobile ? '150px' : '200px',
              marginBottom: isMobile ? '15px' : '20px'
            }} />
            <h1 style={{ 
              fontSize: isMobile ? '28px' : '36px', 
              marginBottom: isMobile ? '15px' : '20px' 
            }}>INTRODUCING</h1>
            <div style={{
              backgroundColor: '#008cc9',
              color: 'white',
              padding: isMobile ? '8px 20px' : '10px 30px',
              display: 'inline-block',
              marginBottom: isMobile ? '15px' : '20px'
            }}>
              THE ALL NEW
            </div>
            <h2 style={{ 
              fontSize: isMobile ? '32px' : '42px', 
              marginBottom: isMobile ? '15px' : '20px' 
            }}>UJAAS ELECTRIC SCOOTER</h2>
            <div style={{ 
              fontSize: isMobile ? '20px' : '24px' 
            }}>IT'S UJAAS' TRUST</div>
          </div>
        </div>

        {/* Three Product Sections */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr',
          gap: '20px',
          padding: '40px 20px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Ujaas Park Section */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', marginBottom: '20px' }}>⭐</div>
            <h3>Ujaas Park</h3>
            <p>Ujaas™ Park is a product which provides a complete turnkey solution for investors who want to become a solar power producer under.</p>
          </div>

          {/* Ujaas My Site Section */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', marginBottom: '20px' }}>⭐</div>
            <h3>Ujaas My Site</h3>
            <p>Ujaas™ My-site caters to the need of various commercial organizations, who wish to install solar power generation systems on their own premises or sites of their choice.</p>
          </div>

          {/* Ujaas Home Section */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', marginBottom: '20px' }}>⭐</div>
            <h3>Ujaas Home</h3>
            <p>Ujaas Home provides best Cost Effective Rooftop Solar Solutions for residential homes that feel for more than 25 years.We will help you figure out the best home solar solution as per your needs.</p>
          </div>
        </div>

        {/* About Ujaas Section */}
        <div style={{
          padding: '40px 20px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>UJAAS ENERGY LTD.</h2>
          <p style={{ marginBottom: '15px', lineHeight: '1.6' }}>
            "Ujaas™", which means in local language – "Light at the Dawn". The entire solar spectrum in India has started taking 
            shape just like after a dark night the sunlight starts radiating light at dawn. The Solar Power will become one of the 
            biggest contributor to India's huge appetite for power which is must for a ever growing shining India.
          </p>
          <p style={{ marginBottom: '15px', lineHeight: '1.6' }}>
            Ujaas Energy Limited (listed on BSE and NSE) is an ISO 9001:2008 certified Company.
          </p>
          <p style={{ marginBottom: '15px', lineHeight: '1.6' }}>
            The company is the First to generate & sell Solar REC in the country from its solar power plant of 2 MW commissioned 
            in March 2012 at Rajgarh (MP).
          </p>
          <p style={{ lineHeight: '1.6' }}>
            Company is having a long journey of more than three decades in field of engineering. Established in the year 1979 at 
            business capital of MP – Indore for manufacturing of transformers as a proprietorship.
          </p>
        </div>

        {/* Our Esteemed Clients Section */}
        <div style={{
          backgroundColor: '#ffd700',
          padding: '40px 20px'
        }}>
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Our Esteemed Clients</h2>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            {clients.map((client, index) => (
              <img 
                key={index}
                src={client.logo}
                alt={client.name}
                style={{
                  height: '60px',
                  objectFit: 'contain',
                  filter: 'grayscale(100%)',
                  transition: 'filter 0.3s',
                  ':hover': {
                    filter: 'grayscale(0%)'
                  }
                }}
              />
            ))}
          </div>
        </div>

        {/* Three Panel Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr',
          gap: '20px',
          padding: '40px 20px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Latest News Panel */}
          <div style={{ border: '1px solid #ddd', padding: '20px' }}>
            <h3 style={{ marginBottom: '20px' }}>Latest News</h3>
            <div>
              <div style={{ marginBottom: '15px' }}>
                <span style={{ color: '#ff4444' }}>Apr 10</span>
                <p>Ujaas Energy Ltd is Proud Major Contributor Of India's First...</p>
              </div>
              <div style={{ marginBottom: '15px' }}>
                <span style={{ color: '#ff4444' }}>Mar 14</span>
                <p>Our JMD, Mr. Vikalp Mundra Has Been Selected As The Chairman...</p>
              </div>
              <div style={{ marginBottom: '15px' }}>
                <span style={{ color: '#ff4444' }}>Feb 02</span>
                <p>Our Jt. MD Mr. Anurag Mundra Has Shared His Views At The IMA...</p>
              </div>
            </div>
          </div>

          {/* CSR Activity Panel */}
          <div style={{ border: '1px solid #ddd', padding: '20px' }}>
            <h3 style={{ marginBottom: '20px' }}>CSR Activity</h3>
            <img 
              src="/images/csr-hands.jpg" 
              alt="CSR Activity"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px'
              }}
            />
          </div>

          {/* Installed Locations Panel */}
          <div style={{ border: '1px solid #ddd', padding: '20px' }}>
            <h3 style={{ marginBottom: '20px' }}>Installed Locations</h3>
            <img 
              src="/images/india-map.jpg" 
              alt="Installed Locations Map"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px'
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
