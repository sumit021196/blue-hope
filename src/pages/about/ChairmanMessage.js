import React from 'react';
import { Link } from 'react-router-dom';

const ChairmanMessage = () => {
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
        }}>Chairman's Message</h1>
        <div style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          gap: '0.5rem',
          alignItems: 'center'
        }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          <span>{'>'}</span>
          <span>Chairman's Message</span>
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
          {/* Chairman's Speech Section */}
          <div style={{ 
            backgroundColor: '#fff',
            borderRadius: '8px',
            overflow: 'hidden',
            marginBottom: '2rem'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}>
              {/* Chairman's Photo and Title */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2rem',
                flexWrap: 'wrap'
              }}>
                <img 
                  src="/images/maleavtar.png"
                  alt="Chairman"
                  style={{
                    width: '200px',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '8px'
                  }}
                />
                <div>
                  <h2 style={{ color: '#e67e22', marginBottom: '0.5rem' }}>Chairman's Speech</h2>
                  <h3 style={{ color: '#333' }}>Mr. S.S. Mundra</h3>
                  <p style={{ color: '#666' }}>Chairman & Managing Director</p>
                </div>
              </div>

              {/* Speech Content */}
              <div style={{ color: '#555', fontSize: '1.1rem', lineHeight: '1.8' }}>
                <p style={{ marginBottom: '1.5rem' }}>
                  Whenever I look at the Sun, it drives within me a force, fills me with unmatched power and gives me a sense of unlimited high energy. The Sun has been an integral part of our lives; even after child birth there is a ritual to worship Sun, signifying brightness; the Sun shine gives life to the nature ...to us!!!
                </p>

                <p style={{ marginBottom: '1.5rem' }}>
                  We always were aware that Sun is an abundant source of energy. Strange however it is that the energy had been with us all this while but we didn't work towards utilizing this vast potential until the fear of depletion of other energy sources started creeping in.
                </p>

                <p style={{ marginBottom: '1.5rem' }}>
                  At Blue Hope™, we have taken it upon ourselves to become the torchbearers and have taken the onus to illuminate mankind with at least some part of their energy requirement come from Solar. It is our vision to attain sustainable development, to conserve the resources for generations to come. What could be a better way than to return something back to mother earth as a responsible corporate citizen!
                </p>

                <p style={{ marginBottom: '1.5rem' }}>
                  Now renewable energy is moving towards becoming new mainstay of the Indian economy. Replicating the need of the hour, Blue Hope Energy Ltd. is privileged to announce its entry in Electrical Vehicle segment by launching its first E-Scooter. The Company is aggressively working on different models & these are being designed on understanding the concern of different belt of customers and will cater to their different needs.
                </p>

                <p style={{ 
                  marginBottom: '1.5rem',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: '#333'
                }}>
                  "PV & EV can change CV of India".
                </p>
                <p style={{ 
                  marginBottom: '1.5rem',
                  textAlign: 'center',
                  color: '#666',
                  fontStyle: 'italic'
                }}>
                  (*: PV – Photovoltaic Solar, EV-Electric Vehicle, CV- Curriculum Vitae)
                </p>

                <p style={{ marginBottom: '1.5rem' }}>
                  By installing a Rooftop Solar & charging electric vehicle, the operational personal transportation cost will be reduced to ZERO. With the marriage of PV & EV, India can move at ZERO Cost. This is going to be a game changer in the coming days.
                </p>

                <p style={{ 
                  marginBottom: '1.5rem',
                  color: '#e67e22',
                  fontStyle: 'italic'
                }}>
                  I urge to one and all to come and join this great mission – "Own Your Sun"
                </p>

                <p>
                  And leave a better legacy to our future generation.
                </p>
              </div>
            </div>
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

export default ChairmanMessage;