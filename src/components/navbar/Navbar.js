
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from "../../images/logo.png"
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaSearch } from 'react-icons/fa'; // Importer les icônes du panier et de recherche
import './Navbar.css'; // Importer votre fichier CSS pour la navbar
const Navbar=()=>{
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = () => {
    // Logique de recherche ici, par exemple rediriger vers une page de résultats de recherche avec le terme de recherche
    console.log('Search term:', searchTerm);
  };
  return (
    <>
    <nav className="navbar">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className="logo" />
        MuscleRock-Nutrution
   
          <input
            type="text"
            placeholder="Search products"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}><FaSearch /></button>
    
        </Link>
        
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Accueil</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Product">Tout les produits</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Sale">Nos promotions</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/About">About As</Link>
          </li>
        
          <li className="nav-item">
            <Link className="nav-link" to="/Contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <FaShoppingCart className="cart-icon" />
              Panier
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Menu">Menu</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">Register</Link>
          </li>
        </ul>
      </div>
    </nav>

    
  </>
  )
}

export default Navbar