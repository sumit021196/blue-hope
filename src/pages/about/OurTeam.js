import React from 'react';
import { Link } from 'react-router-dom';

const OurTeam = () => {
  const teamMembers = [
    {
      name: 'Mr. Amit Neema',
      position: 'Heads Project Business',
      image: '/images/maleavtar.png',
      description: `An Electrical Engineer with post-graduation in Business Management, having a vast experience of 20+ years. He use to run his own business in filed or execution & maintenance of HVAC projects, including substations, Air conditioning, DG sets etc. for big PSUs like BSNL, CPWD, AAI. His expertise include vendor development, contract finalisation, Engineering innovations & solution building.`
    },
    {
      name: 'Mr. Sumit K Somani',
      position: 'Heads Park Business',
      image: '/images/maleavtar.png',
      description: `An Engineering Graduate with management training from IIM- C. He spent more than 15+ years in the field of renewable energy during his various roles in Sudan & DLF RE division in various parts of country. His expertise lies in Business Development, Power Sale, Financial Viability Analysis Project planning and execution with Strategic thinking.`
    },
    {
      name: 'Mr. Pawan Kothari',
      position: 'AVP Strategy',
      image: '/images/maleavtar.png',
      description: `An IIT Mumbai Alumnus, CFA L-1 & IPMA L-C. He is also certified IA for ISO 9001, 14001. Having 10+ years of Work experience in MI, Business Analytics, Strategy, Project Management, Systems & Processes in various sectors like Financial Companies, Real Estate and Infrastructure Corporate as well as MNC. Currently working on planning, monitoring, reviewing and executing overall strategy, new projects, standardization, business planning & analysis.`
    }
  ];

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
        }}>Our Team</h1>
        <div style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          gap: '0.5rem',
          alignItems: 'center'
        }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          <span>{'>'}</span>
          <span>Our Team</span>
        </div>
      </div>

      {/* Team Photo Section */}
      <div style={{
        maxWidth: '1200px',
        margin: '2rem auto',
        padding: '0 2rem'
      }}>
        <img 
          src="/images/team-photo.jpg" 
          alt="Team Meeting"
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '8px',
            marginBottom: '2rem'
          }}
        />
      </div>

      {/* Main Content Area */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 2rem 2rem',
        display: 'flex',
        gap: '2rem',
        flexWrap: 'wrap'
      }}>
        {/* Left Column - Team Member Profiles */}
        <div style={{ flex: '2', minWidth: '300px' }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
          }}>
            {teamMembers.map((member, index) => (
              <div key={index} style={{
                backgroundColor: '#fff',
                borderRadius: '8px',
                overflow: 'hidden',
                padding: '2rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                display: 'flex',
                gap: '2rem',
                flexWrap: 'wrap'
              }}>
                <img 
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: '150px',
                    height: '150px',
                    objectFit: 'cover',
                    borderRadius: '50%'
                  }}
                />
                <div style={{ flex: '1', minWidth: '250px' }}>
                  <h2 style={{ 
                    color: '#333',
                    marginBottom: '0.5rem',
                    fontSize: '1.5rem'
                  }}>{member.name}</h2>
                  <h3 style={{ 
                    color: '#666',
                    marginBottom: '1rem',
                    fontSize: '1.1rem',
                    fontStyle: 'italic'
                  }}>{member.position}</h3>
                  <p style={{ 
                    color: '#555',
                    lineHeight: '1.6',
                    fontSize: '1rem'
                  }}>{member.description}</p>
                </div>
              </div>
            ))}
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

export default OurTeam;