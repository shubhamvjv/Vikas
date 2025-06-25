// src/Components/BlogDetail.js
import React from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';

function BlogDetail() {
  const { id } = useParams(); // Get the blog post ID from the URL
  const location = useLocation(); // Get the current location (to access query parameters)
  const queryParams = new URLSearchParams(location.search); // Parse query parameters
  const lang = queryParams.get('lang') || 'english'; // Default to 'english' if no language is specified

  const blogPosts = [
    {
      id: 1,
      titleEnglish: "The Basics of Astrology",
      titleHindi: "ज्योतिष शास्त्र की बुनियादी बातें",
      contentEnglish: "Astrology is the study of the positions and movements of celestial bodies and their influence on human affairs. It is an ancient practice that dates back to Babylonian times. In this blog, we will explore the fundamental concepts of astrology...",
      contentHindi: "ज्योतिष शास्त्र ग्रहों की स्थिति और गति का अध्ययन है और इसका मानव जीवन पर प्रभाव पड़ता है। यह एक प्राचीन प्रथा है जो बाबिलोनियाई काल से शुरू हुई थी। इस ब्लॉग में हम ज्योतिष शास्त्र के मौलिक सिद्धांतों की चर्चा करेंगे..."
    },
    {
      id: 2,
      titleEnglish: "Understanding Your Zodiac Sign",
      titleHindi: "अपनी राशि चिन्ह को समझना",
      contentEnglish: "Your zodiac sign is determined by the position of the sun at the time of your birth. There are twelve zodiac signs, each with its own unique traits and characteristics. This blog will help you understand your own zodiac sign and its significance...",
      contentHindi: "आपका राशि चक्र चिन्ह आपके जन्म के समय सूर्य की स्थिति द्वारा निर्धारित होता है। बारह राशि चिन्ह होते हैं, प्रत्येक का अपना अद्वितीय गुण और लक्षण होते हैं। यह ब्लॉग आपको आपके खुद के राशि चक्र चिन्ह और इसके महत्व को समझने में मदद करेगा..."
    },
    {
      id: 3,
      titleEnglish: "How Gemstones Influence Your Life",
      titleHindi: "रत्नों का आपके जीवन पर प्रभाव",
      contentEnglish: "Gemstones have been used for centuries in astrology and healing practices. It is believed that wearing specific gemstones can influence your life and bring positive changes. In this blog, we will dive into the world of gemstones and their astrological importance...",
      contentHindi: "रत्नों का उपयोग सदियों से ज्योतिष शास्त्र और चिकित्सा प्रथाओं में किया जाता रहा है। यह माना जाता है कि विशिष्ट रत्न पहनने से आपके जीवन पर प्रभाव पड़ता है और सकारात्मक बदलाव आते हैं। इस ब्लॉग में हम रत्नों की दुनिया और उनके ज्योतिष शास्त्र में महत्व पर चर्चा करेंगे..."
    }
  ];

  // Find the blog post by ID
  const blogPost = blogPosts.find(post => post.id === parseInt(id));

  return (
    <div className="blog-detail">
      {blogPost ? (
        <>
          <h1>{lang === 'hindi' ? blogPost.titleHindi : blogPost.titleEnglish}</h1>
          <p>{lang === 'hindi' ? blogPost.contentHindi : blogPost.contentEnglish}</p>
          
          {/* Button Container for Language Selection */}
          
        </>
      ) : (
        <p>Blog post not found!</p>
      )}
    </div>
  );
}

export default BlogDetail;
