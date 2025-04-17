import React from 'react';

const BoardOfDirectors = () => {
  const directors = [
    {
      name: 'Mr. S. S. Mundra',
      position: 'Chairman & Managing Director',
      image: '/images/maleavtar.png',
      description: 'With over 30 years of experience in renewable energy sector.'
    },
    {
      name: 'Mrs. Vini Mundra',
      position: 'Executive Director',
      image: '/images/maleavtar.png',
      description: 'Expertise in strategic planning and business development.'
    },
    {
      name: 'Mr. Anurag Mundra',
      position: 'CFO & Director',
      image: '/images/maleavtar.png',
      description: 'Leading financial operations and strategic initiatives.'
    },
    {
      name: 'Mr. Piyush Kumar Sinha',
      position: 'Independent Director',
      image: '/images/maleavtar.png',
      description: 'Expert in corporate governance and regulatory compliance.'
    }
  ];

  return (
    <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ 
        fontSize: '2.5rem', 
        color: '#333',
        textAlign: 'center',
        marginBottom: '3rem'
      }}>Board of Directors</h1>

      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem'
      }}>
        {directors.map((director, index) => (
          <div key={index} style={{
            backgroundColor: '#f5f5f5',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <img 
              src={director.image} 
              alt={director.name}
              style={{
                width: '100%',
                height: '300px',
                objectFit: 'cover'
              }}
            />
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ 
                color: '#333',
                marginBottom: '0.5rem'
              }}>{director.name}</h3>
              <p style={{ 
                color: '#666',
                marginBottom: '1rem',
                fontStyle: 'italic'
              }}>{director.position}</p>
              <p style={{ 
                fontSize: '0.9rem',
                lineHeight: '1.6',
                color: '#555'
              }}>{director.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardOfDirectors;