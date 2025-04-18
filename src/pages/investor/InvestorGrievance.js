import React from 'react';
import { Link } from 'react-router-dom';

const InvestorGrievance = () => {
  const grievanceReports = [
    {
      title: 'Investor Grievance Report for quarter ended 31st December 2024',
      date: '31st December 2024'
    },
    {
      title: 'Investor Grievance Report for quarter ended 30th September 2024',
      date: '30th September 2024'
    },
    {
      title: 'Investor Grievance Report for quarter ended 30th June 2024',
      date: '30th June 2024'
    },
    {
      title: 'Investor Grievance Report for quarter ended 31st March 2024',
      date: '31st March 2024'
    }
  ];

  const contactInfo = {
    shareTransfer: {
      title: 'BigShare Services Private Limited',
      role: 'Registrar and Share Transfer Agent',
      address: [
        '1st Floor, Bharat Tin Works Building,',
        'Opp. Vasant Oasis, Makwana Road, Marol',
        'Andheri East, Mumbai-400059 (Maharashtra)'
      ],
      tel: '022 62638200',
      fax: '02262638299',
      isin: 'INE899L01022'
    },
    investment: {
      title: 'Ujaas Energy Limited INVESTOR GRIEVANCE CELL',
      contact: 'Company Secretary and Compliance Officer – Mr. Karan Kapoor',
      address: [
        'No. 211/1, Opp. Sector –C & Metalman, Sanwer Road Industrial Area,',
        'Indore – 452015 (Madhya Pradesh)'
      ],
      phone: '0731-4715300 , 4715330',
      fax: '0731-4715344',
      email: 'cs@ujaas.com'
    }
  };

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
              Investor Grievance
            </h1>
            <div style={{ display: 'flex', gap: '0.5rem', color: 'white' }}>
              <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
              <span>{'>'}</span>
              <span>Investor Grievance</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
          {/* Left Column - Grievance Reports */}
          <div>
            {/* Reports Section */}
            <div style={{ marginBottom: '3rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {grievanceReports.map((report, index) => (
                  <div 
                    key={index}
                    style={{
                      backgroundColor: '#f5f5f5',
                      padding: '1rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      borderRadius: '4px'
                    }}
                  >
                    <div style={{ color: '#333' }}>{report.title}</div>
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

            {/* Contact Information Section */}
            <div>
              <h2 style={{ 
                textAlign: 'center', 
                fontSize: '1.5rem', 
                fontWeight: '600', 
                marginBottom: '2rem',
                color: '#333'
              }}>
                IN CASE OF ANY QUERIES / GRIEVANCE PLEASE CONTACT:
              </h2>

              {/* Two Column Layout for Contact Info */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                {/* Share Transfer Section */}
                <div>
                  <h3 style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: '600', 
                    marginBottom: '1rem',
                    color: '#333'
                  }}>
                    For Share Transfer, Dividend Related Queries
                  </h3>
                  <div style={{
                    backgroundColor: '#f5f5f5',
                    padding: '1.5rem',
                    borderRadius: '8px'
                  }}>
                    <h4 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>{contactInfo.shareTransfer.title}</h4>
                    <p style={{ 
                      backgroundColor: '#ffd700', 
                      padding: '0.5rem', 
                      marginBottom: '1rem',
                      fontWeight: '500'
                    }}>
                      {contactInfo.shareTransfer.role}
                    </p>
                    {contactInfo.shareTransfer.address.map((line, index) => (
                      <p key={index} style={{ marginBottom: '0.25rem' }}>{line}</p>
                    ))}
                    <p style={{ marginTop: '1rem' }}>Tel:{contactInfo.shareTransfer.tel}</p>
                    <p>Fax: {contactInfo.shareTransfer.fax}</p>
                    <p style={{ marginTop: '1rem' }}>ISIN {contactInfo.shareTransfer.isin}</p>
                  </div>
                </div>

                {/* Investment Queries Section */}
                <div>
                  <h3 style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: '600', 
                    marginBottom: '1rem',
                    color: '#333'
                  }}>
                    For Investment Related Queries
                  </h3>
                  <div style={{
                    backgroundColor: '#f5f5f5',
                    padding: '1.5rem',
                    borderRadius: '8px'
                  }}>
                    <h4 style={{ fontWeight: '600', marginBottom: '1rem' }}>{contactInfo.investment.title}</h4>
                    <p style={{ 
                      backgroundColor: '#ffd700', 
                      padding: '0.5rem', 
                      marginBottom: '1rem',
                      fontWeight: '500'
                    }}>
                      {contactInfo.investment.contact}
                    </p>
                    {contactInfo.investment.address.map((line, index) => (
                      <p key={index} style={{ marginBottom: '0.25rem' }}>{line}</p>
                    ))}
                    <p style={{ marginTop: '1rem' }}>{contactInfo.investment.phone}</p>
                    <p>{contactInfo.investment.fax}</p>
                    <p style={{ 
                      marginTop: '1rem', 
                      color: '#2b6cb0' 
                    }}>
                      {contactInfo.investment.email}
                    </p>
                  </div>
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

export default InvestorGrievance;