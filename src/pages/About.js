import React from 'react';
import './About.css'; // Importer le fichier CSS du composant
import { IoFitnessSharp } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri"; // Importer vos images
import { IoIosFitness } from "react-icons/io";

const About = () => {
  return (
    <div className="about-container">
    <h2>Qui sommes nous ?</h2>
    <div className="card-container">
      <div className="card">
      <img src={IoFitnessSharp} alt="Icon 1" />
        <h3>Our Mission</h3>
        
        <p>Notre mission chez "MuscleRock-Nutrition" est d'inspirer et d'accompagner nos clients dans leur parcours de remise en forme en leur fournissant des produits de haute qualité et des ressources éducatives pour les aider à atteindre leurs objectifs de santé et de fitness. Nous nous engageons à promouvoir un mode de vie sain et actif, en mettant l'accent sur la qualité, la transparence et le service client exceptionnel.</p>
      </div>
      <div className="card">
      <img src={RiTeamFill} alt="Icon 2" />
        <h3 >Our Team</h3>
        
        <p>L'équipe de "MuscleRock-Nutrition" est composée de passionnés de fitness et de nutrition, dévoués à aider nos clients à réussir dans leur parcours de musculation et de remise en forme. Nos experts en nutrition sont là pour fournir des conseils personnalisés et des recommandations basées sur des preuves scientifiques, afin d'aider nos clients à prendre des décisions éclairées en matière de santé et de bien-être.</p>
      </div>
      <div className="card">
      <img src={IoIosFitness} alt="Icon 3" />
        <h3>Our Values</h3>
        <p>Chez "MuscleRock-Nutrition", nous sommes guidés par des valeurs de qualité, d'intégrité et de respect. Nous nous engageons à fournir des produits de la plus haute qualité, fabriqués avec des ingrédients purs et efficaces. Nous croyons en la transparence totale en ce qui concerne nos produits, nos pratiques commerciales et notre service client. Nous valorisons également la diversité, l'inclusion et le bien-être de nos clients, de notre équipe et de notre communauté dans son ensemble.</p>
      </div>
    </div>
  </div>
  );
};

export default About;