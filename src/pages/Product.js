// import React from 'react';
// import './Product.css'; // Importer le fichier CSS du composant

// const Product = () => {
//   // Supposons que vous avez une liste de produits
//   const products = [
//     { id: 1, name: 'Product 1', price: 10 },
//     { id: 2, name: 'Product 2', price: 20 },
//     { id: 3, name: 'Product 3', price: 30 },
//   ];

//   return (
//     <div className="products-container"> {/* Ajout de la classe CSS pour le style */}
//       <h2>Products</h2>
//       <div className="product-list">
//         {products.map(product => (
//           <div key={product.id} className="product-item"> {/* Ajout de la classe CSS pour le style */}
//             <h3>{product.name}</h3>
//             <p>Price: ${product.price}</p>
//             {/* Ajoutez d'autres informations sur le produit ici, comme la description, l'image, etc. */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Product;
import React from 'react';
import ProductCard from '../components/ProductCard'; // Importer le composant ProductCard
import './Product.css';
import image1 from "../images/image1.png"
import image2 from "../images/image2.jpg"
import image3 from "../images/image3.jpg"
import image4 from "../images/image4.jpg";

const Product = () => {
  const product = [
    {
      id: 1,
      name: "Protein Powder",
      price: 29.99,
      image: image1
    },

    {
      id: 2,
      name: "Protein mass",
      price: 29.99,
      image: image2
    },
    {
      id: 3,
      name: "Creatine Monohydrate",
      price: 19.99,
      image: image3
    },
    {
      id: 4,
      name: "BCAA Supplement",
      price: 24.99,
      image: image4
    }
    
  ];
  return (
    
    <div className="products-container">
      <h2>Tout les produits</h2>
      <div className="small-container">
      <select>

            <option value="" >Default Shorting</option>
            <option value="">Short by price</option>
            <option value="">Short by popularity</option>
            <option value="">Short by rating</option>
            <option value="">Short by sale</option>

          </select>
          </div>
      <div className="product-list">
      {product.map(el=><ProductCard
       image={el.image}
       name={el.name}
       description={el.id}
       price={el.price}
      />)}
      
        {/* Ajouter d'autres ProductCard avec des produits différents */}
      </div>
      
    </div>
  );
};

export default Product;