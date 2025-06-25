const generateHoroscope = require('../utils/horoscopeGenerator');

exports.getDailyHoroscope = (req, res) => {
  const { zodiac } = req.params;

  if (!zodiac) {
    return res.status(400).json({ error: 'Zodiac sign is required' });
  }

  try {
    const horoscope = generateHoroscope(zodiac);
    res.status(200).json({ horoscope });
  } catch (error) {
    console.error('Error generating horoscope:', error);
    res.status(500).json({ error: 'Error generating horoscope' });
  }
};
