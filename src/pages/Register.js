import React, { useState } from 'react';
import axios from 'axios';
import './Register.css'; // Importer le fichier CSS du composant

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    address:'',
    city:'',
    zipCode:'',

  });

  const { username, email, password,address,city,zipCode } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/register', formData);
      console.log('Registration successful:', response.data);
      // Rediriger l'utilisateur vers une page de connexion ou afficher un message de succès
    } catch (error) {
      console.error('Registration error:', error);
      // Afficher un message d'erreur à l'utilisateur
    }
  };

  return (
    <div className="form-container"> 
    {/* Ajout de la classe CSS pour le style */}
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" value={username} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={password} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="adress"> Address</label>
          <input type="adress" id="adress" name="address" value={address} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="City">City</label>
          <input type="City" id="City" name="City" value={city} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="zipCode">zipCode</label>
          <input type="zipCode" id="zipCode" name="zipCode" value={zipCode} onChange={handleChange} />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;