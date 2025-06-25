import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
// Ensure your CSS file is linked

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    // Email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage('Please enter a valid email address.');
      setIsError(true);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.status === 200) {
        setMessage(data.message);
        setIsError(false);
      } else if (response.status === 409) {
        setMessage('This email is already subscribed. Please enter another Email');
        setIsError(true);
      } else {
        setMessage('An error occurred while subscribing. Please try again later.');
        setIsError(true);
      }
    } catch (error) {
      console.error('Error during subscription:', error);
      setMessage('Unable to connect to the server. Please try again later.');
      setIsError(true);
    }

    setEmail('');
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Vikas Jyotish Kendra</h3>
          <p>Providing expert astrology services to guide you through life's challenges. Consult with our experienced astrologer for personalized readings and remedies.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Our Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul>
            <li><a href="tel:+1234567890">+1 234 567 890</a></li>
            <li><a href="mailto:info@vikasjyotishkendra.com">info@vikasjyotishkendra.com</a></li>
            <li>Address: 123, Main Street, Jaipur</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://www.instagram.com/astro_guru_pt.ghanshyam_sharma/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://www.youtube.com/@Acharya_Ghanshyam_Sharma" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="footer-section subscribe-section">
          <h4>Subscribe to our Newsletter</h4>
          <form onSubmit={handleSubscribe}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
          {message && (
            <p className={`subscribe-message ${isError ? 'error' : 'success'}`}>{message}</p>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Vikas Jyotish Kendra. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
