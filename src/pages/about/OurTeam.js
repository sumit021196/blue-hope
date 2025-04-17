import React from 'react';

const OurTeam = () => {
  const departments = [
    {
      name: 'Management Team',
      members: [
        {
          name: 'Rajesh Kumar',
          position: 'Chief Operating Officer',
          image: '/images/maleavtar.png'
        },
        {
          name: 'Priya Singh',
          position: 'Head of HR',
          image: '/images/maleavtar.png'
        }
      ]
    },
    {
      name: 'Technical Team',
      members: [
        {
          name: 'Amit Sharma',
          position: 'Chief Technical Officer',
          image: '/images/maleavtar.png'
        },
        {
          name: 'Suresh Patel',
          position: 'Senior Project Engineer',
          image: '/images/maleavtar.png'
        }
      ]
    },
    {
      name: 'Sales Team',
      members: [
        {
          name: 'Meera Reddy',
          position: 'Sales Director',
          image: '/images/maleavtar.png'
        },
        {
          name: 'Rakesh Verma',
          position: 'Business Development Manager',
          image: '/images/maleavtar.png'
        }
      ]
    }
  ];

  return (
    <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ 
        fontSize: '2.5rem', 
        color: '#333',
        textAlign: 'center',
        marginBottom: '3rem'
      }}>Our Team</h1>

      {departments.map((department, dIndex) => (
        <div key={dIndex} style={{ marginBottom: '4rem' }}>
          <h2 style={{ 
            fontSize: '1.8rem',
            color: '#333',
            marginBottom: '2rem',
            borderBottom: '2px solid #FFD700',
            paddingBottom: '0.5rem'
          }}>{department.name}</h2>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {department.members.map((member, mIndex) => (
              <div key={mIndex} style={{
                backgroundColor: '#f5f5f5',
                borderRadius: '8px',
                overflow: 'hidden',
                textAlign: 'center',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}>
                <img 
                  src={member.image} 
                  alt={member.name}
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover'
                  }}
                />
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ 
                    color: '#333',
                    marginBottom: '0.5rem'
                  }}>{member.name}</h3>
                  <p style={{ 
                    color: '#666',
                    fontStyle: 'italic'
                  }}>{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurTeam;