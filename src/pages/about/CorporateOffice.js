import React from 'react';

const CorporateOffice = () => {
  return (
    <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ 
        fontSize: '2.5rem', 
        color: '#333',
        textAlign: 'center',
        marginBottom: '3rem'
      }}>Corporate Office</h1>

      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem'
      }}>
        {/* Office Details */}
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
          }}>Address</h2>
          
          <div style={{ 
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: '#555'
          }}>
            <p>701, NRK Business Park,</p>
            <p>Vijay Nagar Square,</p>
            <p>Indore- 452010</p>
            <p>Madhya Pradesh, India</p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h3 style={{ 
              color: '#333',
              marginBottom: '1rem'
            }}>Contact Information</h3>
            <p><strong>Phone:</strong> 0731-4715300</p>
            <p><strong>Fax:</strong> 0731-4715344</p>
            <p><strong>Email:</strong> info@ujaas.com</p>
            <p><strong>Working Hours:</strong> Monday-Friday, 9:30 AM - 6:00 PM</p>
          </div>
        </div>

        {/* Map */}
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
          }}>Location Map</h2>
          
          <div style={{
            width: '100%',
            height: '400px',
            backgroundColor: '#ddd',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {/* Replace this div with actual map implementation */}
            <p>Map will be integrated here</p>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div style={{
        marginTop: '3rem',
        padding: '2rem',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px'
      }}>
        <h2 style={{ 
          color: '#333',
          marginBottom: '1.5rem',
          textAlign: 'center'
        }}>Getting Here</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem'
        }}>
          <div>
            <h3 style={{ color: '#333', marginBottom: '1rem' }}>From Airport</h3>
            <p style={{ color: '#555', lineHeight: '1.6' }}>
              Our office is approximately 20 minutes from Devi Ahilyabai Holkar Airport. 
              Take the airport road and follow directions to Vijay Nagar Square.
            </p>
          </div>
          
          <div>
            <h3 style={{ color: '#333', marginBottom: '1rem' }}>Public Transport</h3>
            <p style={{ color: '#555', lineHeight: '1.6' }}>
              The office is well-connected by city bus services and is easily accessible 
              by auto-rickshaws and taxis.
            </p>
          </div>
          
          <div>
            <h3 style={{ color: '#333', marginBottom: '1rem' }}>Parking</h3>
            <p style={{ color: '#555', lineHeight: '1.6' }}>
              Ample parking space is available in the business park for both two-wheelers 
              and four-wheelers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateOffice;