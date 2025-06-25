const generateHoroscope = (zodiac) => {
    const translations = {
      en: {
        Personal: `Today, as a ${zodiac}, you might feel...`,
        Career: `In your career, ${zodiac}s are likely to...`,
        Love: `Your love life as a ${zodiac} may...`,
        Health: `Health-wise, ${zodiac}s should focus on...`,
        Finance: `Financially, ${zodiac}s could experience...`,
      },
      hi: {
        Personal: `आज, एक ${zodiac} के रूप में, आप महसूस कर सकते हैं...`,
        Career: `अपने करियर में, ${zodiac}s संभवतः...`,
        Love: `आपके प्रेम जीवन में, ${zodiac} हो सकता है...`,
        Health: `स्वास्थ्य के लिहाज से, ${zodiac}s को ध्यान देना चाहिए...`,
        Finance: `आर्थिक रूप से, ${zodiac}s अनुभव कर सकते हैं...`,
      }
    };
  
    const getRandomPrediction = (category) => translations.en[category] + '\n' + translations.hi[category];
  
    return {
      Personal: getRandomPrediction('Personal'),
      Career: getRandomPrediction('Career'),
      Love: getRandomPrediction('Love'),
      Health: getRandomPrediction('Health'),
      Finance: getRandomPrediction('Finance'),
    };
  };
  
  module.exports = generateHoroscope;
  