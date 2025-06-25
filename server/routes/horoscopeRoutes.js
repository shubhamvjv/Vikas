const express = require('express');
const router = express.Router();
const { getDailyHoroscope } = require('../controllers/horoscopeController');

// Route to fetch daily horoscope
router.get('/:zodiac', getDailyHoroscope);

module.exports = router;
