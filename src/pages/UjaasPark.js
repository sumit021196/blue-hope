import React from 'react';
import { Link } from 'react-router-dom';

const UjaasPark = () => {
  const services = {
    landAndLicensing: [
      'Suitable Land in our Solar Parks',
      'Designing & Developments',
      'Permission and Approvals',
      'Registration with different REC trading exchanges'
    ],
    epcServices: [
      'Civil & Structure Work',
      'Design of Solar Park/Selection of Modules & other equipments',
      'Infrastructure for Evacuation of Power',
      'Commissioning of plant'
    ],
    saleOfREC: [
      'Monthly verification from electricity board to issuance of REC',
      'Sale of REC through power trading exchanges',
      'Selection of Third Party for Power Sale',
      'Sale of power & monthly invoice & collection of payment'
    ],
    operations: [
      'SCADA Services',
      'World class maintenance equipments',
      'Scheduled Maintenance & routine check',
      'Operations and modifications for generation enhancing'
    ]
  };

  return (
    <div>
      {/* Header Banner */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '300px',
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
        }}>Ujaas Park</h1>
        <div style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          gap: '0.5rem',
          alignItems: 'center'
        }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          <span>{'>'}</span>
          <span>Ujaas Park</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '2rem auto',
        padding: '0 2rem'
      }}>
        {/* Product Description */}
        <div style={{
          backgroundColor: '#fff',
          padding: '2rem',
          borderRadius: '8px',
          marginBottom: '2rem',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
            <strong>Ujaas™ Park</strong> is a product which provides a complete turnkey solution for investors who want to become a solar power producer "under REC Preferential tariff/ APPC Captive etc. Mechanism". It is an opportunity to our investors to setup their own solar power producing units in our fully developed Solar Park. These parks are available for the customers after they are fully operational and start feeding power to the grid. We provide all the required services by the customers and investors to make them a successful power producer.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
            The plant size ranges from minimum of 500 KW to several MWs.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            We have successfully established solar parks with capacities of more than 500 MW and are all set to take up bigger challenges. With years of experience and expertise we ensure flawless operation for your installed systems in our solar parks.
          </p>
        </div>

        {/* Special Features */}
        <div style={{
          backgroundColor: '#f9f9f9',
          padding: '2rem',
          borderRadius: '8px',
          marginBottom: '2rem'
        }}>
          <h2 style={{ marginBottom: '2rem', color: '#333' }}>Special Features:</h2>
          <div style={{
            display: 'flex',
            gap: '2rem',
            flexWrap: 'wrap'
          }}>
            {/* Tax Saving Feature */}
            <div style={{ flex: 1, minWidth: '300px' }}>
              <div style={{
                backgroundColor: '#fff',
                padding: '2rem',
                borderRadius: '8px',
                height: '100%'
              }}>
                <h3 style={{ color: '#e67e22', marginBottom: '1rem' }}>
                  <span style={{ marginRight: '0.5rem' }}>⭐</span>
                  Substantial Tax Saving
                </h3>
                <p>Depreciation @ 100% (80%+20%) in first year</p>
                <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
                  Solar projects come under 80IA which says that income generated from sale of power is exemptious from IT for continuous 10 years in block of total 15 years from the date of commissioning.
                </p>
              </div>
            </div>

            {/* Go Green Initiative */}
            <div style={{ flex: 1, minWidth: '300px' }}>
              <div style={{
                backgroundColor: '#fff',
                padding: '2rem',
                borderRadius: '8px',
                height: '100%'
              }}>
                <h3 style={{ color: '#e67e22', marginBottom: '1rem' }}>
                  <span style={{ marginRight: '0.5rem' }}>⭐</span>
                  Go Green Initiative
                </h3>
                <p>You make Mother Earth happy by contributing in reducing Carbon footprint and join your hands with world around to fight Global Warming.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ marginBottom: '2rem', color: '#333' }}>Under Ujaas™ Park we provide the following services:</h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {/* Land & Licensing Services */}
            <div style={{
              backgroundColor: '#fff',
              padding: '2rem',
              borderRadius: '8px'
            }}>
              <h3 style={{ color: '#e67e22', marginBottom: '1rem' }}>Land & Licensing Services</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {services.landAndLicensing.map((service, index) => (
                  <li key={index} style={{
                    marginBottom: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <span style={{ color: '#e67e22' }}>✓</span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* EPC Services */}
            <div style={{
              backgroundColor: '#fff',
              padding: '2rem',
              borderRadius: '8px'
            }}>
              <h3 style={{ color: '#e67e22', marginBottom: '1rem' }}>Engineering, Procurement and Construction (EPC) Services</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {services.epcServices.map((service, index) => (
                  <li key={index} style={{
                    marginBottom: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <span style={{ color: '#e67e22' }}>✓</span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sale of REC & Power */}
            <div style={{
              backgroundColor: '#fff',
              padding: '2rem',
              borderRadius: '8px'
            }}>
              <h3 style={{ color: '#e67e22', marginBottom: '1rem' }}>Sale of REC & Power</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {services.saleOfREC.map((service, index) => (
                  <li key={index} style={{
                    marginBottom: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <span style={{ color: '#e67e22' }}>✓</span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Operations and Maintenance */}
            <div style={{
              backgroundColor: '#fff',
              padding: '2rem',
              borderRadius: '8px'
            }}>
              <h3 style={{ color: '#e67e22', marginBottom: '1rem' }}>Operations and Maintenance (O&M)</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {services.operations.map((service, index) => (
                  <li key={index} style={{
                    marginBottom: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <span style={{ color: '#e67e22' }}>✓</span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div style={{
          backgroundColor: '#fff',
          padding: '2rem',
          borderRadius: '8px',
          marginTop: '2rem',
          display: 'flex',
          gap: '2rem',
          flexWrap: 'wrap'
        }}>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h3 style={{
              backgroundColor: '#ffd700',
              padding: '1rem',
              marginBottom: '1rem',
              color: '#333'
            }}>Our Locations</h3>
            <img 
              src="/images/india-map.jpg"
              alt="India Solar Installation Map"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '4px'
              }}
            />
          </div>

          <div style={{ flex: 1, minWidth: '300px' }}>
            <h3 style={{
              backgroundColor: '#ffd700',
              padding: '1rem',
              marginBottom: '1rem',
              color: '#333'
            }}>Contact Info</h3>
            <div style={{ padding: '0 1rem' }}>
              <h4 style={{ color: '#333', marginBottom: '1rem' }}>Corporate Office</h4>
              <div style={{ color: '#555', fontSize: '1.1rem', lineHeight: '1.6' }}>
                <p>701, NRK Business Park</p>
                <p>Vijay Nagar Square,</p>
                <p>Indore- 452010 (MP)</p>
                <p style={{ marginTop: '1rem' }}>0731 – 471 5300, 471 5330</p>
                <p>0731 – 471 5344</p>
                <p style={{ marginTop: '1rem' }}>sales@bluehope.com</p>
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

export default UjaasPark;