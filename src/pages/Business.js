import React from 'react';

function Business() {
  return (
    <div style={{
      padding: '2rem',
      backgroundColor: '#f7f7f7',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <div style={{
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px',
        textAlign: 'center',
        marginBottom: '20px'
      }}>
        <h1 style={{
          fontSize: '36px',
          fontWeight: 'bold',
          color: '#333',
          marginBottom: '20px'
        }}>
          Solar Panel Manufacturing and New Plant in Mega Watt Consultancy
        </h1>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '20px'
      }}>
        <div style={{
          width: '50%',
          padding: '20px'
        }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '10px'
          }}>
            Our Manufacturing Process
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#666',
            marginBottom: '20px'
          }}>
            Our solar panels are manufactured using a rigorous process that involves several stages, including:
          </p>
          <ul style={{
            listStyle: 'none',
            padding: '0',
            margin: '0'
          }}>
            <li style={{
              fontSize: '18px',
              color: '#666',
              marginBottom: '10px'
            }}>
              <i className="fas fa-check-circle" style={{
                color: '#4CAF50',
                marginRight: '10px'
              }}></i>
              Cell production: We produce high-efficiency solar cells using advanced technology and materials.
            </li>
            <li style={{
              fontSize: '18px',
              color: '#666',
              marginBottom: '10px'
            }}>
              <i className="fas fa-check-circle" style={{
                color: '#4CAF50',
                marginRight: '10px'
              }}></i>
              Module assembly: We assemble the solar cells into modules using a precise and efficient process.
            </li>
            <li style={{
              fontSize: '18px',
              color: '#666',
              marginBottom: '10px'
            }}>
              <i className="fas fa-check-circle" style={{
                color: '#4CAF50',
                marginRight: '10px'
              }}></i>
              Testing and inspection: We conduct rigorous testing and inspection to ensure that our solar panels meet the highest standards of quality and performance.
            </li>
          </ul>
        </div>
        <div style={{
          width: '50%',
          padding: '20px'
        }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '10px'
          }}>
            Our New Plant in Mega Watt Consultancy
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#666',
            marginBottom: '20px'
          }}>
            We are proud to announce the launch of our new plant in Mega Watt Consultancy, which will increase our production capacity and enable us to meet the growing demand for solar panels.
          </p>
          <img src="https://www.solarpowerworldonline.com/wp-content/uploads/2019/09/solar-panel-manufacturing.jpg" alt="Solar Panel Manufacturing" style={{
            width: '300px',
            height: '200px',
            borderRadius: '10px'
          }} />
          <p style={{
            fontSize: '18px',
            color: '#666',
            marginBottom: '20px'
          }}>
            Our new plant is equipped with state-of-the-art technology and staffed by experienced professionals who are dedicated to producing high-quality solar panels.
          </p>
        </div>
      </div>
      <div style={{
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px',
        textAlign: 'center',
        marginBottom: '20px'
      }}>
        <p style={{
          fontSize: '18px',
          color: '#666',
          marginBottom: '20px'
        }}>
          Our new plant in Mega Watt Consultancy is a significant milestone in our journey to become a leading player in the solar industry. We are committed to providing high-quality solar panels that meet the growing demand for renewable energy and contributing to a sustainable future.
        </p>
      </div>
    </div>
  );
}

export default Business;