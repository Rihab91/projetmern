import React from 'react';
import './ProductCard.css';

const ProductCard = ({ image, name, description, price }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        <p className="product-price">{price.toFixed(3)}dt</p>
        <button className="add-to-cart-button">Dans le panier</button>
      </div>
    </div>
  );
};

export default ProductCard;