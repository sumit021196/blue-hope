import React from 'react';
import { Link } from 'react-router-dom';

const Transformers = () => {
  const converterApplications = [
    'Variable speed drives (VSD)',
    'Aluminium electrolysis',
    'DC arc furnaces',
    'Graphitising furnaces',
    'Traction substations',
    'Copper refining'
  ];

  const powerApplications = [
    'Steel & Power Segment',
    'Commercial and industrial power distribution system',
    'Oil and dry-type units',
    'Utility applications'
  ];

  const arcFurnaceFeatures = [
    'Steel & Power Segment',
    'OFWF cooling with ONAN cooling optional',
    'ONAN cooling with conventional pressed steel radiators',
    'Requisite series reactors for arc furnace transformers to reduce the short circuit stresses generated in transformer during the furnace operation',
    'Designed to withstand the harmonics generated due to furnace operation'
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
              Transformers
            </h1>
            <div style={{ display: 'flex', gap: '0.5rem', color: 'white' }}>
              <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
              <span>{'>'}</span>
              <span>Transformers</span>
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
              <p style={{ color: '#4a5568', marginBottom: '1rem', lineHeight: '1.6' }}>
                Through continuous research and development, Blue Hope™ has successfully expanded its product range to manufacture transformers upto 25,000 KVA at 132 KV class and includes special duty transformers as follows.
              </p>
              <p style={{ color: '#4a5568', marginBottom: '2rem', lineHeight: '1.6' }}>
                The transformers are manufactured in conformance to Indian Standards Specification IS:2026 and IS:1180, International Specification IEC-76 and / or equivalent. However transformers can be supplied conforming to any other standard if / as specifically required by the customer. We regularly manufacture ratings prevalent in India. However, any other rating can also be supplied on request.
              </p>
            </div>

            {/* Converter Transformers Section */}
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem' }}>
                Convertor And Special Purpose Transformers
              </h2>
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                <div style={{ flex: '1', minWidth: '300px' }}>
                  <p style={{ color: '#4a5568', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                    Converter duty transformers are used as set up transformer from generator to line voltage. Converter duty transformers have range up to 33 MVA with the voltage capacity of up to 33 KV. Converter transformers and heavy duty transformers are very durable and handle force to be used by desired clients. It comes with an automatic onoff cooling option. We offer these converter duty transformers and heavy duty transformers at competitive price.
                  </p>
                  <p style={{ color: '#4a5568', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                    One of the main differences from other types of converter transformers is that the load currents contain higher harmonics due to the distorted waveform. The converter duty transformer causes the distorted current waveform. This current leads to higher losses in temperature in the transformer. Network regulations also require reduction of harmonic distortion.
                  </p>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>
                    Common Applications:
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {converterApplications.map((app, index) => (
                      <li key={index} style={{ 
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginBottom: '0.75rem',
                        color: '#4a5568'
                      }}>
                        <span style={{ color: '#ffd700' }}>✓</span>
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ flex: '1', minWidth: '300px' }}>
                  <img 
                    src="https://www.solarpowerworldonline.com/wp-content/uploads/2019/09/solar-panel-manufacturing.jpg" 
                    alt="Converter Transformer"
                    style={{
                      width: '100%',
                      borderRadius: '8px',
                      marginBottom: '1rem'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Power Transformers Section */}
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem' }}>
                Power Transformers
              </h2>
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                <div style={{ flex: '1', minWidth: '300px' }}>
                  <p style={{ color: '#4a5568', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                    We offer power transformers which is known for accepting energy at one voltage and passing it to other voltage. We make power transformer using premium quality materials which are rugged and reliable. The high quality standards adapted by M & B Transformers are appreciated throughout the country. Power transformers upto 25 MVA and 132 KV class are regularly manufactured and supplied to the domestic/international markets as per various standards.
                  </p>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>
                    Applications:
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {powerApplications.map((app, index) => (
                      <li key={index} style={{ 
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginBottom: '0.75rem',
                        color: '#4a5568'
                      }}>
                        <span style={{ color: '#ffd700' }}>✓</span>
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ flex: '1', minWidth: '300px' }}>
                  <img 
                    src="/images/transformer.jpg" 
                    alt="Power Transformer"
                    style={{
                      width: '100%',
                      borderRadius: '8px',
                      marginBottom: '1rem'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Distribution Transformers Section */}
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem' }}>
                Distribution Transformers
              </h2>
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                <div style={{ flex: '1', minWidth: '300px' }}>
                  <p style={{ color: '#4a5568', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                    We specialize in manufacturing distribution transformers from 100KVA to 5000KVA capacity with primary voltage of 11KV, 22KV and 33KV and secondary voltage as per customer's specifications.
                  </p>
                  <p style={{ color: '#4a5568', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                    The R&D and the design team always bring the best design for various capacities of transformers making sure it functions with high efficiency and low energy loss. With the advanced infrastructure and exceptionally qualified engineers, we have a capacity to manufacture more than 300 transformers a month.
                  </p>
                </div>
                <div style={{ flex: '1', minWidth: '300px' }}>
                  <img 
                    src="/images/transformer.jpg" 
                    alt="Distribution Transformer"
                    style={{
                      width: '100%',
                      borderRadius: '8px',
                      marginBottom: '1rem'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Arc Furnace Transformers Section */}
            <div style={{ marginBottom: '3rem' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem' }}>
                Arc Furnace, Induction Furnace Transformers
              </h2>
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                <div style={{ flex: '1', minWidth: '300px' }}>
                  <p style={{ color: '#4a5568', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                    We offer furnace transformers and arc furnace transformers for arc furnace/ submerged arc furnace/ induction furnace applications with capacity of 25MVA and primary voltage up to 33 KV class. The secondary voltages of these transformers suit furnace specifications with 6, 12 & 24 pulse operations.
                  </p>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>
                    Our power transformer finds extensive application to following areas:
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {arcFurnaceFeatures.map((feature, index) => (
                      <li key={index} style={{ 
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginBottom: '0.75rem',
                        color: '#4a5568'
                      }}>
                        <span style={{ color: '#ffd700' }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ flex: '1', minWidth: '300px' }}>
                  <img 
                    src="/images/transformer.jpg" 
                    alt="Arc Furnace Transformer"
                    style={{
                      width: '100%',
                      borderRadius: '8px',
                      marginBottom: '1rem'
                    }}
                  />
                </div>
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
              <img 
                src="/images/rooftop.jpg" 
                alt="India Locations Map" 
                style={{ width: '100%', borderRadius: '4px' }} 
              />
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

export default Transformers;