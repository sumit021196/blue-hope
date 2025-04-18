import React from 'react';
import { Link } from 'react-router-dom';

const BlueHopeHome = () => {
  const features = [
    'Free Consultation',
    'Free Engineering',
    'All Approvals',
    'Set up',
    'Relax and Harvest'
  ];

  const benefits = [
    {
      title: 'Best Solar Power Generation',
      description: 'High-efficiency solar panels ensure optimal power generation'
    },
    {
      title: 'Save up to 50% on Electricity Bill',
      description: 'Significant reduction in your monthly electricity expenses'
    },
    {
      title: '25 Years Warranty',
      description: 'Long-term warranty on solar power generation'
    },
    {
      title: '5 Years Warranty',
      description: 'Coverage for inverter and mounting structure'
    },
    {
      title: 'Minimal Maintenance',
      description: 'Keep panels clean for optimal performance'
    },
    {
      title: 'Mobile App Tracking',
      description: 'Real-time power generation monitoring'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div style={{
        position: 'relative',
        height: '300px',
        backgroundImage: 'url(/images/panelarray.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', width: '100%' }}>
            <h1 style={{ color: 'white', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              Blue Hope Home
            </h1>
            <div style={{ display: 'flex', gap: '0.5rem', color: 'white' }}>
              <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
              <span>{'>'}</span>
              <span>Blue Hope Home</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
          {/* Left Column */}
          <div>
            {/* Introduction */}
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
                Complete Solar Solution for Your Home
              </h2>
              <p style={{ color: '#4a5568', marginBottom: '1rem', lineHeight: '1.6' }}>
                Blue Hope Home is one of the best home Solar solutions in India because it offers a complete package of Solar Products and Services. We not only offer quality tested Solar Panels for homes and Aluminium Mounting Structures that can withstand wind speeds up to 200 kmph, but we also relieve you from the paperwork related to Net Metering and subsidies.
              </p>
              <p style={{ color: '#4a5568', marginBottom: '1rem', lineHeight: '1.6' }}>
                Solar panel capacity you need depends on your roof area and energy consumption. Our experts will help you determine the perfect solution for your home.
              </p>
            </div>

            {/* Steps */}
            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1.5rem' }}>
                5 Simple Steps to Your Solar Dream
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {features.map((feature, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ 
                      width: '2rem',
                      height: '2rem',
                      borderRadius: '50%',
                      backgroundColor: '#ffd700',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold'
                    }}>
                      {index + 1}
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Grid */}
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1.5rem' }}>
                Benefits of Blue Hope Home
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                {benefits.map((benefit, index) => (
                  <div key={index} style={{
                    backgroundColor: '#f5f5f5',
                    padding: '1.5rem',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}>
                    <h4 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>{benefit.title}</h4>
                    <p style={{ color: '#666' }}>{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Location Map */}
            <div style={{
              backgroundColor: '#ffd700',
              padding: '1.5rem',
              borderRadius: '8px',
              marginBottom: '2rem'
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Our Locations</h3>
              <img src="/images/rooftop.jpg" alt="India Locations Map" style={{ width: '100%', borderRadius: '4px' }} />
            </div>

            {/* Contact Info */}
            <div style={{
              backgroundColor: '#ffd700',
              padding: '1.5rem',
              borderRadius: '8px'
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Contact Info</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <h4 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Corporate Office</h4>
                  <p>701, NRK Business Park</p>
                  <p>Vijay Nagar Square,</p>
                  <p>Indore- 452010 (MP)</p>
                </div>
                <div>
                  <p>0731 – 471 5300, 471 5330</p>
                  <p>0731 – 471 5344</p>
                  <p style={{ color: '#2b6cb0' }}>info@bluehope.com</p>
                </div>
                <div>
                  <h4 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>For Corporate Sales Enquiry</h4>
                  <p style={{ color: '#2b6cb0' }}>9893310032</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlueHopeHome;