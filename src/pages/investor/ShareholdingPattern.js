import React from 'react';
import { Link } from 'react-router-dom';

const ShareholdingPattern = () => {
  const years = [
    {
      year: '2024-2025',
      quarters: [
        {
          quarter: '3rd',
          date: '31st December 2024',
          title: 'Shareholding Pattern',
        },
        {
          quarter: '2nd',
          date: '30th September 2024',
          title: 'Shareholding Pattern',
        },
        {
          quarter: '1st',
          date: '30th June 2024',
          title: 'Shareholding Pattern',
        }
      ]
    },
    {
      year: '2023-2024',
      quarters: [
        {
          quarter: '4th',
          date: '31st Mar 2024',
          title: 'Shareholding Pattern',
        },
        {
          quarter: '3rd',
          date: '30th Dec 2023',
          title: 'Shareholding Pattern',
        },
        {
          quarter: '2nd',
          date: '30th Sept 2023',
          title: 'Shareholding Pattern',
        },
        {
          quarter: '1st',
          date: '30th June 2023',
          title: 'Shareholding Pattern',
        }
      ]
    },
    {
      year: '2022-2023',
      quarters: [
        {
          quarter: '4th',
          date: '31st March 2023',
          title: 'Shareholding Pattern',
        },
        {
          quarter: '3rd',
          date: '31st December 2022',
          title: 'Shareholding Pattern',
        },
        {
          quarter: '2nd',
          date: '30th September 2022',
          title: 'Shareholding Pattern',
        },
        {
          quarter: '1st',
          date: '30th June 2022',
          title: 'Shareholding Pattern',
        }
      ]
    },
    {
      year: '2021-2022',
      quarters: [
        {
          quarter: '4th',
          date: '31st March 2022',
          title: 'Shareholding Pattern',
          subtitle: 'share holding pattern Quarter ended 30th june 2022'
        },
        {
          quarter: '3rd',
          date: 'December 2021',
          title: 'Shareholding Pattern',
          subtitle: 'Shareholding Pattern as on 31st March 2022'
        },
        {
          quarter: '2nd',
          date: '30th September 2021',
          title: 'Shareholding Pattern',
          subtitle: 'Shareholding Pattern as on 30th September 2021'
        },
        {
          quarter: '1st',
          date: '30th June 2021',
          title: 'Shareholding Pattern',
          subtitle: 'Shareholding Pattern as on 30th June 2021'
        }
      ]
    },
    {
      year: '2020-2021',
      quarters: [
        {
          quarter: '4th',
          date: '31st March 2021',
          title: 'Shareholding Pattern'
        },
        {
          quarter: '3rd',
          date: '31st December 2020',
          title: 'Shareholding Pattern'
        },
        {
          quarter: '2nd',
          date: '30th September 2020',
          title: 'Shareholding Pattern'
        },
        {
          quarter: '1st',
          date: '30th June 2020',
          title: 'Shareholding Pattern'
        }
      ]
    },
    {
      year: '2019-2020',
      quarters: [
        {
          quarter: '4th',
          date: '31st March 2020',
          title: 'Shareholding Pattern'
        },
        {
          quarter: '3rd',
          date: '31st December 2019',
          title: 'Shareholding Pattern'
        },
        {
          quarter: '2nd',
          date: '30th September 2019',
          title: 'Shareholding Pattern'
        },
        {
          quarter: '1st',
          date: '30th June 2019',
          title: 'Shareholding Pattern'
        }
      ]
    },
    {
      year: '2018-19',
      quarters: [
        {
          quarter: '4th',
          date: '31st March 2019',
          title: 'Shareholding Pattern'
        },
        {
          quarter: '3rd',
          date: '31st December 2018',
          title: 'Shareholding Pattern'
        },
        {
          quarter: '2nd',
          date: '30th September 2018',
          title: 'Shareholding Pattern'
        },
        {
          quarter: '1st',
          date: '30th June 2018',
          title: 'Shareholding Pattern'
        }
      ]
    },
    {
      year: '2017-18',
      quarters: [
        {
          quarter: '4th',
          date: '31st March 2018',
          title: 'Shareholding Pattern'
        },
        {
          quarter: '3rd',
          date: '31st December 2017',
          title: 'Shareholding Pattern'
        },
        {
          quarter: '2nd',
          date: '30th September 2017',
          title: 'Shareholding Pattern'
        },
        {
          quarter: '1st',
          date: '30th June 2017',
          title: 'Shareholding Pattern'
        }
      ]
    }
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
              Shareholding Pattern
            </h1>
            <div style={{ display: 'flex', gap: '0.5rem', color: 'white' }}>
              <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
              <span>{'>'}</span>
              <span>Investor</span>
              <span>{'>'}</span>
              <span>Shareholding Pattern</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
          {/* Left Column - Shareholding Pattern */}
          <div>
            {years.map((yearData, yearIndex) => (
              <div key={yearIndex} style={{ marginBottom: '2rem' }}>
                <h2 style={{
                  backgroundColor: '#ffd700',
                  padding: '0.75rem',
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  marginBottom: '1rem'
                }}>
                  Year {yearData.year}
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {yearData.quarters.map((quarter, quarterIndex) => (
                    <div 
                      key={quarterIndex}
                      style={{
                        backgroundColor: '#f5f5f5',
                        padding: '1rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderRadius: '4px'
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                          <span style={{ color: '#666' }}>{quarter.quarter} Quarter</span>
                          <span style={{ color: '#666' }}>|</span>
                          <span style={{ color: '#666' }}>as on {quarter.date}</span>
                        </div>
                        <div style={{ color: '#333' }}>{quarter.title}</div>
                        {quarter.subtitle && (
                          <div style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.25rem' }}>
                            {quarter.subtitle}
                          </div>
                        )}
                      </div>
                      <button
                        style={{
                          backgroundColor: '#ffd700',
                          border: 'none',
                          padding: '0.5rem 1rem',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          fontWeight: '500',
                          color: '#333',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}
                      >
                        DOWNLOAD PDF
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
              <img src="/images/rooftop.jpg" alt="India Locations Map" style={{ width: '100%', borderRadius: '4px' }} />
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

export default ShareholdingPattern;