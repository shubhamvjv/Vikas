import React, { useState } from "react";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[6-9]\d{9}$/; // Validates a 10-digit number starting with 6-9
    return phoneRegex.test(phone);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation checks
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setStatus("All fields are required.");
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    if (!validatePhone(formData.phone)) {
      setStatus("Please enter a valid 10-digit mobile number.");
      return;
    }

    setStatus("Submitting...");
    setSuccessMessage("");

    try {
      const response = await axios.post("http://localhost:5000/api/contact", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      });

      if (response.status === 200) {
        setStatus("");
        setSuccessMessage("Our team will get in touch with you shortly!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        setTimeout(() => {
          setSuccessMessage("");
        }, 5000);
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatus("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="contact-us-container">
      <div className="contact-us-header">
        <h1>Contact Us</h1>
        <p>We’re here to assist you. Reach out to us for consultations or queries.</p>
      </div>

      <div className="contact-form">
        <h2>Get in Touch</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
          <label htmlFor="phone">Your Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
        {status && <p className="status">{status}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>

      <div className="contact-info">
        <h3>Contact Information</h3>
        <p>
          Phone: <a href="tel:+919876543210">+91 70140 86686</a>
        </p>
        <p>
          Email: <a href="mailto:info@jyotishkendra.com">info@jyotishkendra.com</a>
        </p>
      </div>

      <div className="map-container">
        <h3>Find Us Here</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.9122788914474!2d75.81939907543814!3d26.8745279766699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6bf983b9719%3A0xcda1330ce714eadd!2sVikas%20Jyotish%20Kendra!5e0!3m2!1sen!2sin!4v1735403013980!5m2!1sen!2sin"
          width="1000"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Vikas Jyotish Kendra Location"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
