import React, { useState } from 'react';

function ZodiacHoroscope() {
  const [selectedZodiac, setSelectedZodiac] = useState('');
  const [horoscope, setHoroscope] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const zodiacSigns = [
    'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
    'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces',
  ];

  // Backend API URL (assuming your backend is running on port 5000)
  const API_URL = 'http://localhost:5000/api/horoscope';

  const fetchHoroscope = (zodiac) => {
    setLoading(true);
    setError('');
    setHoroscope(null); // Clear previous horoscope

    // Fetch the horoscope data from the backend API
    fetch(`${API_URL}/${zodiac.toLowerCase()}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch horoscope: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setHoroscope(data.horoscope); // Expecting an object with detailed horoscope
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching horoscope:', err);
        setError('Error fetching horoscope data. Please try again later.');
        setLoading(false);
      });
  };

  const handleZodiacClick = (zodiac) => {
    setSelectedZodiac(zodiac);
    fetchHoroscope(zodiac);
  };

  return (
    <div className="horoscope-container">
      <h1>Know What Your Zodiac Sign Says About You</h1>
      <p>
        Click on your Zodiac sign to know about your Personality, Career, Love,
        Health, and Financial predictions for the day in both Hindi and English.
      </p>
      <div className="zodiac-boxes">
        {zodiacSigns.map((sign) => (
          <div
            key={sign}
            className="zodiac-box"
            onClick={() => handleZodiacClick(sign)}
          >
            <h2>{sign}</h2>
          </div>
        ))}
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {selectedZodiac && horoscope && (
        <div className="horoscope-details">
          <h2>{selectedZodiac} Horoscope</h2>
          <div>
            <h3>Personal:</h3>
            <p><strong>English:</strong> {horoscope.Personal.en}</p>
            <p><strong>Hindi:</strong> {horoscope.Personal.hi}</p>
          </div>
          <div>
            <h3>Career:</h3>
            <p><strong>English:</strong> {horoscope.Career.en}</p>
            <p><strong>Hindi:</strong> {horoscope.Career.hi}</p>
          </div>
          <div>
            <h3>Love:</h3>
            <p><strong>English:</strong> {horoscope.Love.en}</p>
            <p><strong>Hindi:</strong> {horoscope.Love.hi}</p>
          </div>
          <div>
            <h3>Health:</h3>
            <p><strong>English:</strong> {horoscope.Health.en}</p>
            <p><strong>Hindi:</strong> {horoscope.Health.hi}</p>
          </div>
          <div>
            <h3>Finance:</h3>
            <p><strong>English:</strong> {horoscope.Finance.en}</p>
            <p><strong>Hindi:</strong> {horoscope.Finance.hi}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ZodiacHoroscope;
