import React from 'react';

const BoardCommittees = () => {
  const committees = [
    {
      name: 'Audit Committee',
      members: [
        'Mr. Piyush Kumar Sinha (Chairman)',
        'Mrs. Yamini Karmarkar',
        'Mr. Prakash Dandekar'
      ],
      responsibilities: [
        'Oversight of financial reporting process',
        'Review of internal control systems',
        'Review of audit observations',
        'Recommendation for appointment of auditors'
      ]
    },
    {
      name: 'Nomination & Remuneration Committee',
      members: [
        'Mrs. Yamini Karmarkar (Chairperson)',
        'Mr. Piyush Kumar Sinha',
        'Mr. Prakash Dandekar'
      ],
      responsibilities: [
        'Formulation of criteria for Board membership',
        'Recommend appointments to the Board',
        'Review and recommend remuneration policies',
        'Evaluation of Board performance'
      ]
    },
    {
      name: 'Stakeholders Relationship Committee',
      members: [
        'Mr. Prakash Dandekar (Chairman)',
        'Mr. S. S. Mundra',
        'Mr. Anurag Mundra'
      ],
      responsibilities: [
        'Address shareholder grievances',
        'Review share transfer process',
        'Monitor investor service standards',
        'Ensure timely resolution of investor queries'
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
      }}>Board Committees</h1>

      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '2rem'
      }}>
        {committees.map((committee, index) => (
          <div key={index} style={{
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
            }}>{committee.name}</h2>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ 
                color: '#444',
                marginBottom: '1rem',
                fontSize: '1.2rem'
              }}>Members</h3>
              <ul style={{ 
                listStyleType: 'none',
                padding: 0
              }}>
                {committee.members.map((member, mIndex) => (
                  <li key={mIndex} style={{
                    marginBottom: '0.5rem',
                    color: '#555',
                    paddingLeft: '1rem',
                    borderLeft: '3px solid #FFD700'
                  }}>{member}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 style={{ 
                color: '#444',
                marginBottom: '1rem',
                fontSize: '1.2rem'
              }}>Key Responsibilities</h3>
              <ul style={{ 
                listStyleType: 'disc',
                paddingLeft: '1.5rem',
                color: '#555'
              }}>
                {committee.responsibilities.map((responsibility, rIndex) => (
                  <li key={rIndex} style={{
                    marginBottom: '0.5rem'
                  }}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardCommittees;