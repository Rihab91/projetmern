import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; 

const ProductCarousel = () => {
  // Définissez vos produits
  const products = [
    { id: 1, name: 'Product 1', image: 'https://via.placeholder.com/300' },
    { id: 2, name: 'Product 2', image: 'https://via.placeholder.com/300' },
    { id: 3, name: 'Product 3', image: 'https://via.placeholder.com/300' },
    // Ajoutez autant de produits que nécessaire
  ];

  // Configuration du carrousel
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      swipeable={true}
      draggable={true}
      showDots={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={['tablet', 'mobile']}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
 
      {products.map(product => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <p>{product.name}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;