import React from 'react';

const Home = () => {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", padding: '20px', color: '#333' }}>
      {/* Hero Section */}
      <section style={{ textAlign: 'center', marginBottom: '40px', animation: 'fadeIn 2s ease-in', width: '90vw', margin: '0 auto' }}>
        <h1 style={{ fontSize: '36px', color: '#0066cc', marginBottom: '10px' }}>Blue Hope</h1>
        <h2 style={{ fontSize: '20px', color: '#555', marginBottom: '20px' }}>Empowering India's Clean Energy Future</h2>
        <img
          src="/images/hero.webp"
          alt="Solar Energy"
          style={{ 
            width: '100%',
            maxWidth: '1200px',
            height: '400px',
            objectFit: 'cover',
            borderRadius: '8px', 
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' 
          }}
        />
      </section>

      {/* About Section */}
      <section style={{ marginBottom: '40px', animation: 'fadeIn 2s ease-in 1s' }}>
        <h3 style={{ color: '#004080', marginBottom: '10px' }}>Leading the Solar Revolution</h3>
        <p>
          At Blue Hope, we redefine the way the world harnesses the sun. With a legacy of innovation and a future-focused vision, 
          we deliver scalable, sustainable energy solutions that power industries, communities, and progress.
        </p>
        <p>
          As one of India's first companies to commission a solar power plant under the Renewable Energy Certificate (REC) mechanism, 
          we continue to lead the clean energy transition with excellence and integrity.
        </p>
      </section>

      {/* Focus Areas Section */}
      <section style={{ marginBottom: '40px', animation: 'slideIn 2s ease-in-out' }}>
        <h3 style={{ color: '#004080', marginBottom: '10px' }}>Our Focus Areas</h3>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div style={{ textAlign: 'center', width: '30%' }}>
            <img
              src="/images/rooftop.jpg"
              alt="Rooftop Solar Solutions"
              style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', marginBottom: '15px' }}
            />
            <p><strong>Rooftop Solar Solutions</strong></p>
          </div>
          <div style={{ textAlign: 'center', width: '30%' }}>
            <video
              src="/images/clip.mp4"
              alt="Solar Parks"
              style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', marginBottom: '15px' }}
              autoPlay
              loop
              muted
              playsInline
            />
            <p><strong>Solar Parks</strong></p>
          </div>
          <div style={{ textAlign: 'center', width: '30%' }}>
            <img
              src="/images/escooter.jpg"
              alt="Electric Mobility"
              style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', marginBottom: '15px' }}
            />
            <p><strong>Electric Mobility</strong></p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section style={{ marginBottom: '40px', animation: 'fadeIn 2s ease-in 2s' }}>
        <h3 style={{ color: '#004080', marginBottom: '10px' }}>Our Impact</h3>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          <li style={{ marginBottom: '20px' }}><strong>200+ MW</strong> Solar Capacity Installed</li>
          <li style={{ marginBottom: '20px' }}><strong>30,000+</strong> Happy Solar Customers</li>
          <li style={{ marginBottom: '20px' }}><strong>500+ Acres</strong> of Developed Solar Parks</li>
          <li style={{ marginBottom: '20px' }}><strong>10+ Years</strong> of Industry Leadership</li>
        </ul>
      </section>

      {/* Why Blue Hope Section */}
      <section style={{ marginBottom: '40px', animation: 'slideIn 2s ease-in-out 1s' }}>
        <h3 style={{ color: '#004080', marginBottom: '10px' }}>Why Blue Hope?</h3>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          <li style={{ marginBottom: '25px' }}><strong>Trusted Expertise:</strong> A decade of pioneering leadership in solar energy with a commitment to quality and innovation.</li>
          <li style={{ marginBottom: '25px' }}><strong>Growth-Centric Vision:</strong> Aligning with India’s national solar mission and global sustainability goals, offering investors unmatched growth opportunities.</li>
          <li style={{ marginBottom: '25px' }}><strong>Sustainable Impact:</strong> Every project contributes to a greener planet, empowering communities and shaping a cleaner future.</li>
        </ul>
      </section>

      {/* Investor Section */}
      <section style={{ marginBottom: '40px', animation: 'fadeIn 2s ease-in 3s' }}>
        <h3 style={{ color: '#004080', marginBottom: '10px' }}>For Our Investors</h3>
        <p>
          At Blue Hope, we believe in creating value that endures. Our investment opportunities are designed for those who wish to 
          participate in India's renewable energy growth story with transparency, reliability, and rewarding returns.
        </p>
        <button style={{ backgroundColor: '#ff9900', color: '#fff', padding: '10px 20px', border: 'none', marginTop: '10px', cursor: 'pointer' }}>
          Explore Investor Relations →
        </button>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', fontSize: '14px', marginTop: '40px', color: '#777' }}>
        <nav>
          <a href="#about" style={{ color: '#777', margin: '0 10px' }}>About Us</a> | 
          <a href="#solutions" style={{ color: '#777', margin: '0 10px' }}>Solutions</a> | 
          <a href="#investors" style={{ color: '#777', margin: '0 10px' }}>Investor Relations</a> | 
          <a href="#careers" style={{ color: '#777', margin: '0 10px' }}>Careers</a> | 
          <a href="#contact" style={{ color: '#777', margin: '0 10px' }}>Contact</a>
        </nav>
        <div style={{ marginTop: '10px' }}>
          <a href="#" style={{ color: '#777', margin: '0 10px' }}>LinkedIn</a> | 
          <a href="#" style={{ color: '#777', margin: '0 10px' }}>Twitter</a> | 
          <a href="#" style={{ color: '#777', margin: '0 10px' }}>Instagram</a>
        </div>
      </footer>

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes slideIn {
            from { transform: translateX(-100%); }
            to { transform: translateX(0); }
          }
        `}
      </style>
    </div>
  );
};

export default Home;
