import React from 'react';
import { Link } from 'react-router-dom';

const OurVision = () => {
  return (
    <div>
      {/* Header Banner */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '200px',
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
          fontSize: '2.5rem',
          marginBottom: '0.5rem'
        }}>Vision and Mission</h1>
        <div style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          gap: '0.5rem',
          alignItems: 'center'
        }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          <span>{'>'}</span>
          <span>Vision and Mission</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '2rem',
        display: 'flex',
        gap: '2rem',
        flexWrap: 'wrap'
      }}>
        {/* Left Column - Main Content */}
        <div style={{ flex: '2', minWidth: '300px' }}>
          {/* Vision Statement */}
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{
              fontSize: '1.8rem',
              color: '#e67e22',
              marginBottom: '1rem'
            }}>
              "Our vision is to offer a simple, universally acceptable, easily maintainable system of green energy to humanity at large."
            </h2>
          </div>

          {/* Company Description */}
          <div style={{ color: '#555', fontSize: '1.1rem', lineHeight: '1.8' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              Being in the power industry for more than three decades, we have established ourselves in the industry strongly and are now a synonym for quality and timely service to our customers. At Blue Hope Energy Limited, we focus on delivering innovative and economical solar power solutions. We utilize our experience and resources in providing affordable clean energy solutions. Our focus is on sustainability and environment. We are committed to innovation and excellence in every aspect of solar design and construction.
            </p>

            <p style={{ marginBottom: '1.5rem' }}>
              Over the years, Blue Hope Energy Limited has made faithful relations with its stakeholders. Partnering with us is as reliable as the source we get our Energy from – The Sun. We offer turnkey solutions which work on the plug and play model. We want our customers to become successful solar power producers.
            </p>

            <p style={{ marginBottom: '1.5rem' }}>
              Solar energy has an infinite potential. We aim at utilizing this resource and help our clients in producing clean energy. By innovation and developing green technologies we want to promote use of solar energy and reduce carbon footprints.
            </p>

            <p style={{ marginBottom: '1.5rem' }}>
              Our vision is to provide low cost PV modules and develop large solar energy producing fields. Currently we are offering 3 products in this domain, namely Blue Hope Park, Blue Hope MySite and Blue Hope Home. In future we will develop more products, so that a large population can use solar power to light up their houses, industries and infrastructures.
            </p>
          </div>
        </div>

        {/* Right Column - Contact Info and Map */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          {/* Location Map Section */}
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{
              backgroundColor: '#ffd700',
              padding: '1rem',
              marginBottom: '1rem',
              color: '#333'
            }}>Our Locations</h3>
            <img 
              src="/images/rooftop.jpg" 
              alt="India Solar Installation Map"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '4px'
              }}
            />
          </div>

          {/* Contact Information */}
          <div>
            <h3 style={{
              backgroundColor: '#ffd700',
              padding: '1rem',
              marginBottom: '1rem',
              color: '#333'
            }}>Contact Info</h3>
            
            <div style={{ padding: '0 1rem' }}>
              <h4 style={{ 
                color: '#333',
                marginBottom: '1rem' 
              }}>Corporate Office</h4>
              
              <div style={{ 
                color: '#555',
                fontSize: '1.1rem',
                lineHeight: '1.6'
              }}>
                <p>701, NRK Business Park</p>
                <p>Vijay Nagar Square,</p>
                <p>Indore- 452010 (MP)</p>
                <p style={{ marginTop: '1rem' }}>0731 – 471 5300, 471 5330</p>
                <p>0731 – 471 5344</p>
                <p style={{ marginTop: '1rem' }}>info@bluehope.com</p>
                
                <div style={{ marginTop: '1.5rem' }}>
                  <p>For Corporate Sales Enquiry</p>
                  <p>9893310032</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVision;