import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div style={{ padding: "60px 20px", fontFamily: "Arial, sans-serif", backgroundColor: "#f4f8fb" }}>
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        style={{ textAlign: "center", fontSize: "40px", color: "#0a3d62", marginBottom: "50px" }}
      >
        About Blue Hope
      </motion.h1>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1.5 }}
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center", maxWidth: "1200px", margin: "0 auto" }}
      >
        <img 
          src="/images/hero.webp" 
          alt="Solar Energy Solutions" 
          style={{ width: "100%", borderRadius: "12px" }} 
        />

        <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#333" }}>
          Blue Hope is a pioneer in renewable energy solutions, dedicated to transforming how India and the world utilize sustainable resources. Founded with a vision to light up every home with clean energy, Blue Hope has been at the forefront of innovation, delivering cutting-edge solar projects across industries.
        </p>

        <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#333" }}>
          With decades of experience, Blue Hope is committed to shaping a cleaner future through technology, passion, and excellence. Our team of experts ensures seamless project execution, from ideation to commissioning.
        </p>

        <img 
          src="/images/hero.webp" 
          alt="Innovation in Solar Energy" 
          style={{ width: "100%", borderRadius: "12px" }} 
        />

        <img 
          src="/images/hero.webp" 
          alt="Future of Energy" 
          style={{ width: "100%", borderRadius: "12px" }} 
        />

        <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#333" }}>
          Join us on our journey towards a sustainable tomorrow. At Blue Hope, we believe that every ray of sun can be a spark of change. Together, let's build a brighter, greener future.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
