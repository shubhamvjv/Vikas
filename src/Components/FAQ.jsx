import React, { useState } from 'react';
  // Assuming you will create the corresponding CSS for styling

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is astrology?',
      answer: 'Astrology is the study of the positions and movements of celestial bodies, and how they influence human affairs and natural events. It provides insights into an individual’s personality, life path, and relationships.'
    },
    {
      question: 'How accurate is astrology?',
      answer: 'Astrology is based on ancient knowledge, and while its accuracy can vary from person to person, it can offer valuable guidance and insights into one’s life. Many people find it helpful for making decisions and understanding themselves better.'
    },
    {
      question: 'What are zodiac signs?',
      answer: 'Zodiac signs are 12 different constellations in the sky, each associated with a particular set of characteristics. Each person is born under a particular zodiac sign based on the position of the sun at the time of their birth.'
    },
    {
      question: 'How can astrology help me?',
      answer: 'Astrology can help you understand your strengths, weaknesses, relationships, career choices, and even timing for important events. It offers a personalized roadmap for your life based on your birth chart.'
    },
    {
      question: 'What is a birth chart?',
      answer: 'A birth chart, also known as a natal chart, is a map of the sky at the exact moment of your birth. It shows the positions of the planets, sun, and moon, which influence various aspects of your personality and life.'
    },
    {
      question: 'What is Vedic astrology?',
      answer: 'Vedic astrology, also known as Jyotish Shastra, is an ancient system of astrology that originated in India. It focuses on the alignment of celestial bodies and their influence on an individual’s life based on their birth chart.'
    },
    {
      question: 'How do I find my zodiac sign?',
      answer: 'Your zodiac sign is determined by the position of the sun at the time of your birth. You can easily find it by entering your birthdate into an online astrology tool or simply looking it up in a zodiac table.'
    },
    {
      question: 'What are the different types of astrology?',
      answer: 'There are several types of astrology, including Western astrology, Vedic astrology, Chinese astrology, and Mayan astrology. Each system has its own approach and tools for interpreting celestial influences.'
    },
    {
      question: 'What is the role of gemstones in astrology?',
      answer: 'In astrology, gemstones are believed to carry the vibrational energy of planets and can be used to enhance specific planetary influences in an individual’s life. Wearing the right gemstone can help bring balance and harmony.'
    },
    {
      question: 'How do I choose the right gemstone for myself?',
      answer: 'Choosing the right gemstone involves considering your zodiac sign, planetary positions in your birth chart, and specific areas of your life where you need guidance or improvement. Consult with an astrologer for personalized advice.'
    },
    {
      question: 'What is numerology?',
      answer: 'Numerology is the study of the mystical significance of numbers and their influence on human life. It is based on the belief that numbers can reveal insights about your personality, strengths, challenges, and life purpose.'
    },
    {
      question: 'Can astrology predict my future?',
      answer: 'Astrology can provide insights into future trends and life events based on your birth chart. While it cannot predict specific events with 100% accuracy, it can guide you on the best times for action and help you prepare for challenges ahead.'
    },
    {
      question: 'What is a Kundli?',
      answer: 'A Kundli is a Vedic birth chart that represents the position of the planets at the time of a person’s birth. It is used in Vedic astrology to analyze various aspects of a person’s life, including marriage, career, health, and relationships.'
    },
    {
      question: 'How can I consult with an astrologer?',
      answer: 'You can consult with an astrologer through in-person meetings, phone calls, or online consultations. Many astrologers offer personalized readings via websites, where you can book a session and get a detailed analysis of your life.'
    }
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleAnswer(index)}
            >
              <h3>{faq.question}</h3>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
