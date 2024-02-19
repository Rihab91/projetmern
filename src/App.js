
import './App.css';
import Navbar from './components/navbar/Navbar';
import {Routes,Route,BrowserRouter} from "react-router-dom"
import Home from "./pages/home/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Product from "./pages/Product"
import Sale from "./pages/Sale"
import Menu from './pages/Menu';
import Login from "./pages/Login"
import Register from "./pages/Register"
import Footer from '../src/components/footer/Footer'; // Importer le composant Footer
import { BrowserRouter as Router } from 'react-router-dom';
// import Carousel from './components/headers/ProductCarousel';
import React from 'react';
// import ProductCarousel from './components/headers/ProductCarousel';
import productsData from './pages/Product'; 
import CustomCarousel from './components/headers/Carousel.js'; 

import Navbaar from "../src/components/headers/Navbar2.js"; 
import ProductCarousel from "./components/headers/ProductCarousel/ProductCarousel.js";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Navbaar /> 

        <FooterWrapper>
        <Routes>
       <Route path='/' element={<><Home/>         <CustomCarousel /> 
</>} />
       <Route path='/about' element={<About/>} />
       <Route path='/contact' element={<Contact/>} />
       <Route path='/product' element={
       <>
       <Product/>      <ProductCarousel/>
       </>
       
} />
       <Route path='/sale' element={<Sale/>} />
       <Route path='/menu' element={<Menu/>} />
       <Route path='/login' element={<Login/>} />
       <Route path='/register' element={<Register/>} />
        </Routes>
        {/* Afficher le composant de header */}
        {/* <Home /> Afficher le composant de page d'accueil */}
        <main>
      
      </main>
        </FooterWrapper>
      </header>
    </div>
  );
}
const FooterWrapper = ({ children }) => {
  return (
   
      <div>
        {children}
        <Footer />
      </div>
 
  );
};

export default App;

