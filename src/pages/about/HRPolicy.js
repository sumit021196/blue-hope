import React from 'react';

const HRPolicy = () => {
  const policies = [
    {
      title: 'Equal Opportunity',
      description: 'We are committed to providing equal employment opportunities to all individuals regardless of race, religion, gender, age, or disability.',
      icon: '👥'
    },
    {
      title: 'Work Culture',
      description: 'We foster a collaborative, innovative, and inclusive work environment that promotes personal and professional growth.',
      icon: '🌟'
    },
    {
      title: 'Training & Development',
      description: 'Regular training programs and skill development opportunities are provided to enhance employee capabilities.',
      icon: '📚'
    },
    {
      title: 'Health & Safety',
      description: 'Employee health and safety is our priority. We maintain strict safety protocols and provide comprehensive health benefits.',
      icon: '🏥'
    },
    {
      title: 'Work-Life Balance',
      description: 'We support flexible working arrangements and promote a healthy work-life balance for our employees.',
      icon: '⚖️'
    },
    {
      title: 'Career Growth',
      description: 'Clear career progression paths and regular performance reviews ensure fair growth opportunities.',
      icon: '📈'
    }
  ];

  const benefits = [
    'Comprehensive medical insurance',
    'Performance bonus',
    'Paid time off and holidays',
    'Professional development allowance',
    'Employee wellness programs',
    'Retirement benefits'
  ];

  return (
    <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ 
        fontSize: '2.5rem', 
        color: '#333',
        textAlign: 'center',
        marginBottom: '3rem'
      }}>HR Policy</h1>

      {/* Policy Overview */}
      <div style={{
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        padding: '2rem',
        marginBottom: '3rem',
        textAlign: 'center'
      }}>
        <h2 style={{ 
          color: '#333',
          marginBottom: '1.5rem'
        }}>Our Commitment</h2>
        <p style={{ 
          color: '#555',
          lineHeight: '1.8',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          At Blue Hope, we believe our employees are our greatest asset. Our HR policies are designed 
          to create a positive, inclusive, and growth-oriented workplace where every individual 
          can thrive and contribute to our collective success.
        </p>
      </div>

      {/* Policy Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        marginBottom: '4rem'
      }}>
        {policies.map((policy, index) => (
          <div key={index} style={{
            backgroundColor: '#f5f5f5',
            borderRadius: '8px',
            padding: '2rem',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <div style={{ 
              fontSize: '2.5rem',
              textAlign: 'center',
              marginBottom: '1rem'
            }}>
              {policy.icon}
            </div>
            <h3 style={{ 
              color: '#333',
              textAlign: 'center',
              marginBottom: '1rem',
              borderBottom: '2px solid #FFD700',
              paddingBottom: '0.5rem'
            }}>{policy.title}</h3>
            <p style={{ 
              color: '#555',
              lineHeight: '1.6',
              textAlign: 'center'
            }}>{policy.description}</p>
          </div>
        ))}
      </div>

      {/* Benefits Section */}
      <div style={{
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        padding: '2rem',
        marginBottom: '3rem'
      }}>
        <h2 style={{ 
          color: '#333',
          marginBottom: '1.5rem',
          textAlign: 'center'
        }}>Employee Benefits</h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem'
        }}>
          {benefits.map((benefit, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              padding: '1rem',
              borderRadius: '4px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center'
            }}>
              <span style={{ 
                color: '#FFD700',
                marginRight: '0.5rem',
                fontSize: '1.2rem'
              }}>✓</span>
              <span style={{ color: '#555' }}>{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div style={{
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        padding: '2rem'
      }}>
        <h2 style={{ 
          color: '#333',
          marginBottom: '1rem'
        }}>Have Questions?</h2>
        <p style={{ 
          color: '#555',
          marginBottom: '1rem'
        }}>Contact our HR department for more information about our policies and benefits.</p>
        <p style={{ color: '#666' }}>
          <strong>Email:</strong> hr@bluehope.com<br />
          <strong>Phone:</strong> 0731-4715300 (Ext. 123)
        </p>
      </div>
    </div>
  );
};

export default HRPolicy;