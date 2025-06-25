// src/Components/Home.js
import React from 'react';
import SliderComponent from './SliderComponent';
import LogoMarquee from './LogoMarquee';
import Header from './Header';
import Feature from './Feature';
import ZodiacHoroscope from './ZodiacHoroscope';
import Video from './Video';
import FAQ from './FAQ';
import Footer from './Footer';

function Home() {
  return (
    <div className='App'>
      <div style={{ marginTop: '70px' }}>
        <SliderComponent />
      </div>
      <LogoMarquee />
      <Header />
      <Video />
      <Feature />
      <ZodiacHoroscope />
      <FAQ />
      <Footer />
    </div>
    
  );
}

export default Home;
