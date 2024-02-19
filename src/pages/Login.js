import React, { useRef, useState } from 'react';
import './Login.css'; // Importer le fichier CSS du composant
import {UserLogin} from "../redux/Slices/UserSlice"
import { useDispatch } from 'react-redux';
const Login = () => {
  const email=useRef()
  const password=useRef()
  const dispatch=useDispatch()
  // const [formData, setFormData] = useState({
  //   email: '',
  //   password: '',
  // });
  // const [error, setError] = useState('');

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post('/api/login', formData);
  //     console.log('Login successful:', response.data);
  //   } catch (error) {
  //     console.error('Login error:', error);
  //     setError('Invalid email or password. Please try again.');
  //   }
  // };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={(event)=>{
        event.preventDefault()
        dispatch(UserLogin({
          email:email.current.value,
          password:password.current.value
        }))
      }}>
        <h2>Login</h2>
        {/* {error && <div className="error-message"></div>} */}
        <div>
          <label htmlFor="email" >Email</label>
          <input type="email" id="email" name="email"  ref={email}/>
        </div>
        <div>
          <label htmlFor="password" >Password</label>
          <input type="password" id="password" name="password" ref={password} />
        </div>
        <button type="submit" >Login</button>
      </form>
    </div>
  );
};

export default Login;