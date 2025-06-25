import React from 'react';

function AboutSection() {
  return (
    <div style={styles.container}>
      {/* Left Section */}
      <div style={styles.leftSection}>
        <iframe
          width="100%"
          height="300"
          src="https://www.youtube.com/embed/7SFQGK64CdU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p style={styles.callToAction}>Click Here to Watch</p>
      </div>

      {/* Right Section */}
      <div style={styles.rightSection}>
        <h2 style={styles.heading}>Astrology: Your Guide to Life's Journey & Path to Success!</h2>
        <p>
          We believe astrology is pure science, and we aim to create a social
          impact through our resources such as astrology charts, kundalis, and
          more. We strive to be a part of your daily life by offering services
          like face reading, numerology, and palmistry.
        </p>
        <p style={styles.legacy}>
          <span style={styles.legacyBadge}>50+ Years Of Legacy</span> With Horoscope, Kundali, And Predictions
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontWeight: 'bold',
    color: '#333', // Make sure text color is solid
    fontSize: '24px', // Adjust font size as necessary
    marginTop: '20px', // Add margin to create space between the video and heading
    marginBottom: '10px', // Optional: add margin at the bottom
    textShadow: 'none', // Remove any text shadow if present
    background: 'none', // Remove background if any
    padding: '0', // Ensure no extra padding
  },
  leftSection: {
    flex: 1,
    marginRight: '20px',
    textAlign: 'center',
  },
  rightSection: {
    flex: 2,
    padding: '10px',
    minWidth: '300px',
  },
  callToAction: {
    fontWeight: 'bold',
    marginTop: '10px',
    color: '#b22222',
  },
  legacy: {
    marginTop: '20px',
    fontWeight: 'bold',
    color: '#b22222',
  },
  legacyBadge: {
    background: '#ff5722',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '5px',
    marginRight: '10px',
  },
};


export default AboutSection;
