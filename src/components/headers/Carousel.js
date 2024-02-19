import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importez les styles CSS du carousel
import SlideImage from '../../images/carous.jpg';
import SlideImage1 from '../../images/carouselimage.jpg';
import SlideImage2 from '../../images/prise-de-masse.webp';
function CustomCarousel() {
  return (
    <Carousel autoPlay infiniteLoop >
      <div className='caroussel'>
        <img src={SlideImage} alt=" " />
        <p className="legend"></p>
      </div>
      <div>
        <img src={SlideImage1} alt=" " />
        <p className="legend"></p>
      </div>
      <div>
        <img src={SlideImage2} alt=" " />
        <p className="legend"></p>
      </div>
    </Carousel>
  );
}

export default CustomCarousel;