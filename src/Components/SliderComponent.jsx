import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../images/Banner1.png';
import image2 from '../images/Banner2.gif';
import image3 from '../images/Banner1.png';

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={{ width: '98%', margin: 'auto', marginTop: '20px', border:'5px' }}>
      <Slider {...settings}>
        <div>
          <img src={image1} alt="Slide 1" style={{ width: '100%' }} />
        </div>
        <div>
          <img src={image2} alt="Slide 2" style={{ width: '100%'}} />
        </div>
        <div>
          <img src={image3} alt="Slide 3" style={{ width: '100%' }} />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
