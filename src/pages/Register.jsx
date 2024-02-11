import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [fullname, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
const navigate=useNavigate()
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3001/v1/user', { fullname, email, password });
      console.log(res.data); // Assuming the response contains user data or token
      // Redirect user to login page
      navigate('/login')
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className='auth'>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <input
          required
          type="text"
          placeholder='Username'
          value={fullname}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          required
          type="email"
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          required
          type="password"
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
        {error && <h3>{error}</h3>}
        <span>Do you have an account? <Link to="/login"><p>Login</p></Link></span>
      </form>
    </div>
  );
};

export default Register;
