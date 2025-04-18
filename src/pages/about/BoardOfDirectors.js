import React from 'react';
import { Link } from 'react-router-dom';

const BoardOfDirectors = () => {
  const directors = [
    {
      name: 'Mr. Shyam Sundar Mundra',
      position: 'Chairman & Managing Director',
      image: '/images/maleavtar.png',
      description: `Mr. Shyam Sundar Mundra, is the Founder, he is post graduate in Electrical Engineering & Business Administration. Start in 1976, His Started earlier a Proprietorship firm M/S Ujaas Engineering Works a proprietorship firm as an Electronic component Entity and was floated as Public Limited Company in 2011. Mr Mundra's core competency lies in the field of electrical Engineering, System designing, creating innovative system design. His knowledge of technical aspects & year wise experience has given the company an operational benefit to achieve objects of the business, the selection of product range, products process development of production practices and short focus on quality. He is actively involved in business and social work activities and initiatives.`
    },
    {
      name: 'Mr. Vikalp Mundra',
      position: 'Joint Managing Director',
      image: '/images/maleavtar.png',
      description: `Mr. Vikalp Mundra, a graduate in Electrical Engineering & post graduate in Financial Management. He joined business in 1994. The Company also enables company to mobilize into Power Transformer segment. He has taken various technical & managerial positions & actively guided day to day operations as Joint Managing Director having core competency in manufacturing process with complete administration.`
    },
    {
      name: 'Mr. Anurag Mundra',
      position: 'Joint Managing Director & CFO',
      image: '/images/maleavtar.png',
      description: `Mr. Anurag Mundra is a commerce graduate with a Post Graduate Diploma in Computer Application (PGDCA). He has joined to the company in 1999, Having Commercial Financial Analysis of More. He Anurag Mundra drives to forge the expertise in financial analyses and corporate finance headed to function credit rating for the company which leads to achieve over financial objectives over in year. His aptly balanced qualification in Finance and Technology helps him to devise with efficient treasury management, The good negotiation able & intensive knowledge of financial products to gaining favorable term for company.`
    },
    {
      name: 'Mrs. Yamini Karmarkar',
      position: 'Independent Director',
      image: '/images/maleavtar.png',
      description: `Dr. Yamini Karmarkar is an Associate Professor at Institute of Management Studies, Devi Ahilya University, Indore. Prior to this she taught at International School of Business & Media, Pune for 10 years. She has a teaching & research experience of over 20 years. Her areas of Interest are Security Analysis & Portfolio Organization Research Method. She has published several research papers in National & International Journals. Her research interests include capital markets to above areas. She is also involved in training and consultancy and has executed several programs for Middle Power, School Teaches College Professors and Corporate Executives.`
    },
    {
      name: 'Mr. Saloni Naidu',
      position: 'Advisor to the Board',
      image: '/images/maleavtar.png',
      description: `Mr. Saloni is a B.E. (Elect.) from Indian Institute of Technology (IIT). He has served various leadership positions in organizations like Central Bank, L&amp;T, Nokia and Oshi Metals. He has over 41 years of unmatched manufacturing, projects, management, engineering and general management. Over 30 years of International experience in the energy and utility space. He has been working as Power Plant development specialist overseas including staff management training/key people for world class key turnkeys. He has been active in various Industry organizations. He was president of Indian Electrical and Electronics Manufactures Association (IEEMA) and Transformer Manufactures Association of India (TMAI). He believes in industry focus in India.`
    },
    {
      name: 'Mr. Piyush Kumar Sinha',
      position: 'Independent Director',
      image: '/images/maleavtar.png',
      description: `Mr. Piyush Kumar Sinha is a Ph.D. from Gujarat Vidyapith University and a professor of Marketing in MICA-Ahmadabad. He has 34 experience of more than 25 year in teaching and training. He was the Professor of Marketing & Chairman of center for Media Studies Institute of Communications-Ahmadabad (MICA). He has been taught at the Indian Institute of Management-Bangalore and IICD-Jaipur/Development. He has contributed to academic and professional bodies and served as an External Examiner/Advisor for Media. He has several publications as papers, cases and books. The papers have been published in publication in prestigious journals like the International Journal of Rural and Consumer Studies. He has developed cases and contributed chapter to book on Management education and text book which has been published by Oxford University Press. During his professional life in the corporate world he worked as a Marketing Manager for Gujarat Gas and Ghana Gas.`
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
        }}>Board of Directors</h1>
        <div style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          gap: '0.5rem',
          alignItems: 'center'
        }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          <span>{'>'}</span>
          <span>Board of Directors</span>
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
        {/* Left Column - Directors Profiles */}
        <div style={{ flex: '2', minWidth: '300px' }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
          }}>
            {directors.map((director, index) => (
              <div key={index} style={{
                backgroundColor: '#fff',
                borderRadius: '8px',
                overflow: 'hidden',
                padding: '2rem',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}>
                <div style={{
                  display: 'flex',
                  gap: '2rem',
                  flexWrap: 'wrap',
                  marginBottom: '1.5rem'
                }}>
                  <img 
                    src={director.image}
                    alt={director.name}
                    style={{
                      width: '200px',
                      height: '200px',
                      objectFit: 'cover',
                      borderRadius: '8px'
                    }}
                  />
                  <div>
                    <h2 style={{ color: '#e67e22', marginBottom: '0.5rem' }}>{director.name}</h2>
                    <h3 style={{ color: '#333' }}>{director.position}</h3>
                  </div>
                </div>
                <div style={{ color: '#555', fontSize: '1.1rem', lineHeight: '1.8' }}>
                  <p>{director.description}</p>
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

export default BoardOfDirectors;