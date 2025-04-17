import React from 'react';

const OurCertification = () => {
  const certifications = [
    {
      name: 'ISO 9001:2008',
      description: 'Quality Management System certification ensuring consistent quality standards in our operations.',
      validityPeriod: '2023-2026',
      issuedBy: 'Bureau Veritas'
    },
    {
      name: 'ISO 14001:2004',
      description: 'Environmental Management System certification demonstrating our commitment to environmental responsibility.',
      validityPeriod: '2023-2026',
      issuedBy: 'Bureau Veritas'
    },
    {
      name: 'OHSAS 18001:2007',
      description: 'Occupational Health and Safety Management certification ensuring workplace safety standards.',
      validityPeriod: '2023-2026',
      issuedBy: 'Bureau Veritas'
    }
  ];

  return (
    <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ 
        fontSize: '2.5rem', 
        color: '#333',
        textAlign: 'center',
        marginBottom: '3rem'
      }}>Our Certifications</h1>

      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem'
      }}>
        {certifications.map((cert, index) => (
          <div key={index} style={{
            backgroundColor: '#f5f5f5',
            borderRadius: '8px',
            padding: '2rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
          }}>
            <div style={{
              backgroundColor: '#FFD700',
              padding: '1rem',
              borderRadius: '4px',
              marginBottom: '1.5rem'
            }}>
              <h2 style={{ 
                color: '#333',
                margin: 0,
                fontSize: '1.5rem',
                textAlign: 'center'
              }}>{cert.name}</h2>
            </div>

            <p style={{ 
              flex: '1',
              color: '#555',
              lineHeight: '1.6',
              marginBottom: '1.5rem'
            }}>{cert.description}</p>

            <div style={{
              borderTop: '1px solid #ddd',
              paddingTop: '1rem',
              marginTop: 'auto'
            }}>
              <p style={{ 
                color: '#666',
                marginBottom: '0.5rem'
              }}>
                <strong>Validity Period:</strong> {cert.validityPeriod}
              </p>
              <p style={{ 
                color: '#666',
                margin: 0
              }}>
                <strong>Issued By:</strong> {cert.issuedBy}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: '4rem',
        padding: '2rem',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        textAlign: 'center'
      }}>
        <h2 style={{ 
          color: '#333',
          marginBottom: '1rem'
        }}>Our Commitment to Excellence</h2>
        <p style={{ 
          color: '#555',
          lineHeight: '1.8',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          These certifications demonstrate our unwavering commitment to quality, environmental responsibility, and safety standards. We continuously strive to maintain and improve our processes to meet and exceed international standards.
        </p>
      </div>
    </div>
  );
};

export default OurCertification;