import React from 'react';
import { Link } from 'react-router-dom';

const BoardCommittees = () => {
  const committees = [
    {
      name: 'Audit Committee',
      members: [
        {
          name: 'Mrs. Yamini Karmarkar',
          role: 'Chairperson/Non-executive Independent Director'
        },
        {
          name: 'Mr. Prakash Dandekar',
          role: 'Member/Non-executive Independent Director'
        },
        {
          name: 'Mr. Anurag Mundra',
          role: 'Member/Executive Director'
        }
      ]
    },
    {
      name: 'Nomination and Remuneration Committee',
      members: [
        {
          name: 'Mrs. Yamini Karmarkar',
          role: 'Chairperson/Non-executive Independent Director'
        },
        {
          name: 'Mr. Prakash Dandekar',
          role: 'Member/Non-executive Independent Director'
        },
        {
          name: 'Mr. Piyush Sinha',
          role: 'Member/Non-executive Independent Director'
        }
      ]
    },
    {
      name: 'Stakeholders Relationship Committee',
      members: [
        {
          name: 'Mr. Prakash Dandekar',
          role: 'Chairman/Non Executive Independent Director'
        },
        {
          name: 'Mrs. Yamini Karmarkar',
          role: 'Member/Non Executive Independent Director'
        }
      ]
    },
    {
      name: 'Compensation Committee',
      members: [
        {
          name: 'Mrs. Yamini Karmarkar',
          role: 'Chairperson/Non Executive Independent Director'
        },
        {
          name: 'Mr. Shyam Sundar Mundra',
          role: 'Member/Executive Director'
        },
        {
          name: 'Mr. Prakash Dandekar',
          role: 'Member/Non Executive Independent Director'
        },
        {
          name: 'Mr. Piyush Sinha',
          role: 'Member/Non Executive Independent Director'
        }
      ]
    },
    {
      name: 'Corporate Social Responsibility ("CSR") Committee',
      members: [
        {
          name: 'Mr. Shyam Sundar Mundra',
          role: 'Chairman/Executive Director'
        },
        {
          name: 'Mrs. Yamini Karmarkar',
          role: 'Member/Non Executive Independent Director'
        },
        {
          name: 'Mr. Vikalp Mundra',
          role: 'Member/Executive Director'
        },
        {
          name: 'Mr. Anurag Mundra',
          role: 'Member/Executive Director'
        }
      ]
    },
    {
      name: 'Fund Raising Committee',
      members: [
        {
          name: 'Mr. Anurag Mundra',
          role: 'Chairman/Executive Director'
        },
        {
          name: 'Mr. Vikalp Mundra',
          role: 'Member/Executive Director'
        },
        {
          name: 'Mr. Shyam Sundar Mundra',
          role: 'Member/Executive Director'
        },
        {
          name: 'Mrs. Yamini Karmarkar',
          role: 'Member/Non Executive Independent Director'
        }
      ]
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
        }}>Board Committees</h1>
        <div style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          gap: '0.5rem',
          alignItems: 'center'
        }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          <span>{'>'}</span>
          <span>Board Committees</span>
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
        {/* Left Column - Committees */}
        <div style={{ flex: '2', minWidth: '300px' }}>
          <h2 style={{ 
            marginBottom: '2rem',
            color: '#333',
            fontSize: '1.5rem'
          }}>Composition of various Committees</h2>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
          }}>
            {committees.map((committee, index) => (
              <div key={index} style={{
                backgroundColor: '#fff',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{
                  backgroundColor: '#f8f9fa',
                  padding: '1rem',
                  margin: 0,
                  color: '#333',
                  borderBottom: '1px solid #dee2e6'
                }}>{index + 1}. {committee.name}</h3>
                
                <div style={{ padding: '1rem' }}>
                  <table style={{
                    width: '100%',
                    borderCollapse: 'collapse'
                  }}>
                    <tbody>
                      {committee.members.map((member, memberIndex) => (
                        <tr key={memberIndex} style={{
                          borderBottom: memberIndex < committee.members.length - 1 ? '1px solid #dee2e6' : 'none'
                        }}>
                          <td style={{ 
                            padding: '1rem',
                            color: '#555',
                            width: '40%'
                          }}>{member.name}</td>
                          <td style={{ 
                            padding: '1rem',
                            color: '#666',
                            width: '60%'
                          }}>{member.role}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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

export default BoardCommittees;