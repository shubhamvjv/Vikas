import React from 'react';
import firstindia from '../images/firstindia.jpg';
import Newsindia from '../images/Newsindia.png';
import ZeeNews from '../images/ZeeNews.png';
import News18 from '../images/News18.png';
// You can now remove this import if you are adding styles in index.css

const LogoMarquee = () => {
  return (
    <div className="logo-marquee">
      <div className="logo-container">
        <img src={firstindia} alt="Logo 1" className="logo" />
        <img src={Newsindia} alt="Logo 2" className="logo" />
        <img src={ZeeNews} alt="Logo 3" className="logo" />
        <img src={News18} alt="Logo 3" className="logo" />
        <img src={firstindia} alt="Logo 1" className="logo" />
        <img src={Newsindia} alt="Logo 2" className="logo" />
        <img src={ZeeNews} alt="Logo 3" className="logo" />
        <img src={News18} alt="Logo 3" className="logo" />
        <img src={firstindia} alt="Logo 1" className="logo" />
        <img src={Newsindia} alt="Logo 2" className="logo" />
        <img src={ZeeNews} alt="Logo 3" className="logo" />
        <img src={News18} alt="Logo 3" className="logo" />
        {/* Add more logos as needed */}
      </div>
      
    </div>
  );
};

export default LogoMarquee;
