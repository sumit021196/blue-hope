import React from 'react';
import { Link } from 'react-router-dom';

const UjaasSite = () => {
  const containerStyle = {
    minHeight: '100vh'
  };

  const heroStyle = {
    position: 'relative',
    height: '300px',
    backgroundImage: "url('/images/panelarray.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  const heroOverlayStyle = {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center'
  };

  const mainContentStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '2rem'
  };

  const serviceGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '2rem',
    marginTop: '2rem'
  };

  const serviceCardStyle = {
    backgroundColor: '#f5f5f5',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  const serviceListStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem'
  };

  const contactBoxStyle = {
    backgroundColor: '#ffd700',
    padding: '1.5rem',
    borderRadius: '8px',
    marginBottom: '2rem'
  };

  return (
    <div style={containerStyle}>
      {/* Hero Section */}
      <div style={heroStyle}>
        <div style={heroOverlayStyle}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', width: '100%' }}>
            <h1 style={{ color: 'white', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Blue Hope My Site</h1>
            <div style={{ display: 'flex', gap: '0.5rem', color: 'white' }}>
              <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
              <span>{'>'}</span>
              <span>Blue Hope My Site</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={mainContentStyle}>
        {/* Left Content */}
        <div>
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Blue Hope™ My Site</h2>
            <p style={{ color: '#4a5568', marginBottom: '1rem', lineHeight: '1.6' }}>
              Caters to the need of various commercial organizations, who wish to install solar power generating systems on
              their own premises or sites of their choice. It provides opportunity for the clients to setup solar power producing units at their own
              locations. The premises installation attracts very less approvals & permissions and can be executed quickly.
            </p>
          </div>

          <p style={{ color: '#4a5568', marginBottom: '1rem', lineHeight: '1.6' }}>
            We provide complete turnkey solution whether it is a ground mounted or a roof top solar installation. We assist you in selecting
            the suitable location and provide you with a detailed insolation and feasibility study.
          </p>

          <p style={{ color: '#4a5568', marginBottom: '2rem', lineHeight: '1.6' }}>
            We assist you to select the appropriate site by doing the installation and feasibility study. From designing to procurement till
            commissioning we take care of entire responsibility. O&M contracts can also be offered as per your needs.
          </p>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>The plant size varies from 25 KWs onwards.</h3>
            <p style={{ color: '#4a5568', lineHeight: '1.6' }}>
              Our dedicated team of experts takes responsibility of your plant establishment and helps you in optimizing the process and
              increasing your solar power generating.
            </p>
          </div>

          {/* Services Grid */}
          <div style={serviceGridStyle}>
            <div style={serviceCardStyle}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Land & Liasioning Services</h3>
              <ul style={serviceListStyle}>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <span style={{ color: '#38a169' }}>✓</span>
                  Installation and Feasibility Test at your land to measure the Suitability of Land
                </li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <span style={{ color: '#38a169' }}>✓</span>
                  Designing & Developments
                </li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <span style={{ color: '#38a169' }}>✓</span>
                  Permission and Approvals
                </li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <span style={{ color: '#38a169' }}>✓</span>
                  Registration with different REC trading exchanges
                </li>
              </ul>
            </div>

            <div style={serviceCardStyle}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Engineering, Procurement and Construction (EPC) Services</h3>
              <ul style={serviceListStyle}>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <span style={{ color: '#38a169' }}>✓</span>
                  Civil & Structural Work
                </li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <span style={{ color: '#38a169' }}>✓</span>
                  Design of Solar Park/Selection of Modules & other equipments
                </li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <span style={{ color: '#38a169' }}>✓</span>
                  Infrastructure for Evacuation of Power
                </li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <span style={{ color: '#38a169' }}>✓</span>
                  Commissioning of plant
                </li>
              </ul>
            </div>

            <div style={serviceCardStyle}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Sale of REC & Power</h3>
              <ul style={serviceListStyle}>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <span style={{ color: '#38a169' }}>✓</span>
                  Monthly certification from electricity board to issuance of REC
                </li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <span style={{ color: '#38a169' }}>✓</span>
                  Sale of REC through power trading exchanges
                </li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <span style={{ color: '#38a169' }}>✓</span>
                  Selection of Third Party for Power Sale
                </li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <span style={{ color: '#38a169' }}>✓</span>
                  Sale of power & monthly invoice & collection of payment
                </li>
              </ul>
            </div>

            <div style={serviceCardStyle}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Operations and Maintenance (O&M)</h3>
              <ul style={serviceListStyle}>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <span style={{ color: '#38a169' }}>✓</span>
                  SCADA Services
                </li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <span style={{ color: '#38a169' }}>✓</span>
                  World class maintenance equipments
                </li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <span style={{ color: '#38a169' }}>✓</span>
                  Scheduled Maintenance & routine check
                </li>
                <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                  <span style={{ color: '#38a169' }}>✓</span>
                  Operations and modifications for generation enhancing
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div>
          {/* Locations Map */}
          <div style={contactBoxStyle}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Our Locations</h3>
            <img src="/images/rooftop.jpg" alt="India Locations Map" style={{ width: '100%', borderRadius: '4px' }} />
          </div>

          {/* Contact Info */}
          <div style={contactBoxStyle}>
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
                <p style={{ color: '#2b6cb0' }}>ujaas@ujaas.com</p>
              </div>
              <div>
                <h4 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>For Corporate Sales Enquiry</h4>
                <p style={{ color: '#2b6cb0' }}>9009100032</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UjaasSite;