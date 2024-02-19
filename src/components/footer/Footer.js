import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
    <div className="container">
       <div className="row">
      
  
        <div className="footer-col-2">

          <p>
           NOS COORDONNÉES
          </p>
          <ul>
            <li>HMANZAH 2,X20</li>
            <li>+216 26219630</li>
          </ul>
        </div>
  
        <div className="footer-col-3">
          <h3>SERVICE CLIENTS</h3>
          <ul>
            <li>Mon compte</li>
            <li>Payer</li>
            <li>Commander des cadeaux</li>
            <li>Procedure de réclamation</li>
            <li> Programme de fidélité </li>
          </ul>
        </div>
  
        <div className="footer-col-4">
          <h3>Follow us</h3>
          <ul>
            <li>Facebook</li>
            <li>Tik Tok</li>
            <li>Instagram</li>
            <li>YouTube</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="copyright">Copyright &copy; 2021 - MUSCLE-Rock Nutrition</p>
    </div>
  </div>
  );
};

export default Footer;