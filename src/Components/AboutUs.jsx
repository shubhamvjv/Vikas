import React from "react";
import acharyaImg from "../images/image2.jpeg"; // Head member image
import renuImg from "../images/renu.jpeg"; // Team member image
import vikasImg from "../images/vikas.jpeg"; // Team member image


const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-header">
        <h1>About Us</h1>
        <p>Learn more about our journey, mission, and team.</p>
      </div>

      <div className="about-section">
        <h2>Our Mission</h2>
        <p>
          At Vikas Jyotish Kendra, we aim to bring light and guidance to people's lives through 
          the ancient wisdom of astrology, vastu, and spiritual practices.
        </p>
      </div>

      {/* Head Member Section */}
      <div className="head-member">
        <img src={acharyaImg} alt="Acharya Ghanshyam Sharma" />
        <h3>Acharya Ghanshyam Sharma</h3>
        <p>Founder & Chief Astrologer</p>
      </div>

      <div className="team-section">
        <h2>Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={renuImg} alt="Renu Sharma" />
            <h3>Renu Sharma</h3>
            <p>Lead Astrologer</p>
          </div>
          <div className="team-member">
            <img src={vikasImg} alt="Vikas Sharma" />
            <h3>Vikas Sharma</h3>
            <p>Vastu Expert</p>
          </div>
        </div>
      </div>

      <div className="contact-section">
        <h2>Contact Us</h2>
        <p>
          Feel free to reach out to us for consultations or queries. We are always here to help!
        </p>
        <a href="tel:+917014086686">Call Now</a>
      </div>
    </div>
  );
};

export default AboutUs;
