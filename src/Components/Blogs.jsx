// src/Components/Blogs.js
import React from 'react';
import { Link } from 'react-router-dom';

function Blogs() {
  const blogPosts = [
    {
      id: 1,
      title: "The Basics of Astrology",
      content: "Astrology is the study of the positions and movements of celestial bodies and their influence on human affairs. It is an ancient practice that dates back to Babylonian times. In this blog, we will explore the fundamental concepts of astrology..."
    },
    {
      id: 2,
      title: "Understanding Your Zodiac Sign",
      content: "Your zodiac sign is determined by the position of the sun at the time of your birth. There are twelve zodiac signs, each with its own unique traits and characteristics. This blog will help you understand your own zodiac sign and its significance..."
    },
    {
      id: 3,
      title: "How Gemstones Influence Your Life",
      content: "Gemstones have been used for centuries in astrology and healing practices. It is believed that wearing specific gemstones can influence your life and bring positive changes. In this blog, we will dive into the world of gemstones and their astrological importance..."
    }
    // Add more blog posts as needed
  ];

  return (
    <div className="blog-list">
      <h1>Astrology Blogs</h1>
      {blogPosts.map(post => (
        <div key={post.id} className="blog-preview">
          <h2>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </h2>
          <p>{post.content.substring(0, 150)}...</p> {/* Show the first 150 characters of content */}

          {/* Button Container */}
          <div className="button-container">
            <Link to={`/blog/${post.id}?lang=hindi`}>
              <button>Read In Hindi</button>
            </Link>
            <Link to={`/blog/${post.id}?lang=english`}>
              <button>Read In English</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blogs;
