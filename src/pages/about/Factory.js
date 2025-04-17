import React from 'react';

const Factory = () => {
  const facilities = [
    {
      name: 'Manufacturing Unit',
      description: 'State-of-the-art manufacturing facility equipped with modern machinery for solar panel assembly and testing.',
      capacity: '500 MW Annual Production Capacity'
    },
    {
      name: 'R&D Center',
      description: 'Advanced research and development center for innovation in solar technology and efficiency improvements.',
      capacity: 'Cutting-edge Testing Equipment'
    },
    {
      name: 'Quality Control',
      description: 'Dedicated quality control department ensuring adherence to international standards.',
      capacity: 'ISO Certified Testing Lab'
    }
  ];

  return (
    <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ 
        fontSize: '2.5rem', 
        color: '#333',
        textAlign: 'center',
        marginBottom: '3rem'
      }}>Our Manufacturing Facility</h1>

      {/* Factory Overview */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        marginBottom: '4rem'
      }}>
        <div style={{
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
          padding: '2rem',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ 
            color: '#333',
            marginBottom: '1.5rem',
            borderBottom: '2px solid #FFD700',
            paddingBottom: '0.5rem'
          }}>Factory Address</h2>
          
          <div style={{ 
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: '#555'
          }}>
            <p>Plot No. 33/2, Phase 1</p>
            <p>Sector 3, Industrial Area</p>
            <p>Pithampur - 454775</p>
            <p>Dist. Dhar, Madhya Pradesh</p>
            <p style={{ marginTop: '1rem' }}><strong>Phone:</strong> 07292-401604</p>
            <p><strong>Email:</strong> factory@ujaas.com</p>
          </div>
        </div>

        {/* Factory Image */}
        <div style={{
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
          overflow: 'hidden'
        }}>
          <img 
            src="/images/panelarray.jpg" 
            alt="Factory Facility"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
      </div>

      {/* Facilities */}
      <h2 style={{ 
        color: '#333',
        textAlign: 'center',
        marginBottom: '2rem'
      }}>Our Facilities</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        marginBottom: '4rem'
      }}>
        {facilities.map((facility, index) => (
          <div key={index} style={{
            backgroundColor: '#f5f5f5',
            borderRadius: '8px',
            padding: '2rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <div style={{
              backgroundColor: '#FFD700',
              padding: '1rem',
              borderRadius: '4px',
              marginBottom: '1.5rem'
            }}>
              <h3 style={{ 
                color: '#333',
                margin: 0,
                textAlign: 'center'
              }}>{facility.name}</h3>
            </div>
            
            <p style={{ 
              color: '#555',
              lineHeight: '1.6',
              marginBottom: '1rem'
            }}>{facility.description}</p>
            
            <p style={{ 
              color: '#666',
              fontWeight: 'bold',
              marginTop: 'auto'
            }}>{facility.capacity}</p>
          </div>
        ))}
      </div>

      {/* Safety & Environment */}
      <div style={{
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <h2 style={{ 
          color: '#333',
          marginBottom: '1.5rem'
        }}>Safety & Environmental Commitment</h2>
        
        <p style={{ 
          color: '#555',
          lineHeight: '1.8',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          Our manufacturing facility adheres to the highest safety standards and environmental 
          practices. We maintain a zero-accident workplace and implement sustainable 
          manufacturing processes to minimize our environmental impact.
        </p>
      </div>
    </div>
  );
};

export default Factory;