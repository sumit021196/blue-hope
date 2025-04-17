import React from 'react';

const ChairmanMessage = () => {
  return (
    <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ 
        display: 'flex', 
        gap: '2rem',
        alignItems: 'flex-start',
        flexWrap: 'wrap'
      }}>
        {/* Chairman's Photo */}
        <div style={{ flex: '1', minWidth: '300px' }}>
          <img 
            src="/images/maleavtar.png" 
            alt="Chairman"
            style={{
              width: '100%',
              maxWidth: '400px',
              borderRadius: '8px',
              marginBottom: '1rem'
            }}
          />
          <h3 style={{ color: '#333', marginBottom: '0.5rem' }}>Mr. S. S. Mundra</h3>
          <p style={{ color: '#666' }}>Chairman & Managing Director</p>
        </div>

        {/* Message Content */}
        <div style={{ flex: '2', minWidth: '300px' }}>
          <h1 style={{ 
            fontSize: '2.5rem', 
            color: '#333',
            marginBottom: '2rem'
          }}>Chairman's Message</h1>
          
          <div style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              Dear Stakeholders,
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              It gives me immense pleasure to connect with you through this platform. At Ujaas Energy, we have always believed in the power of sustainable energy to transform lives and build a better future for our coming generations.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              Our journey in the renewable energy sector has been marked by innovation, dedication, and a commitment to excellence. We have consistently strived to deliver cutting-edge solar solutions while maintaining the highest standards of quality and reliability.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              As we look ahead, we remain committed to our vision of being a leading force in India's renewable energy sector. Our focus continues to be on developing sustainable solutions that not only meet the growing energy demands but also contribute to a cleaner, greener future.
            </p>
            <p>
              Thank you for your continued trust and support in our journey towards a sustainable tomorrow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChairmanMessage;