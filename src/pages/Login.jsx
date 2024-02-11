import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3001/v1/user/login', { email, password });
      console.log(res.data); // Assuming the response contains user data or token
      // Redirect user to dashboard or home page
      navigate('/');
    } catch (err) {
      setError('Invalid username or password.');
    }
  };

  const clearInputFields = () => {
    setEmail('');
    setPassword('');
    // Clear input fields using refs
    emailInputRef.current.value = '';
    passwordInputRef.current.value = '';
  };

  return (
    <div className='auth'>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          ref={emailInputRef}
          required
          type="email"
          placeholder='Email'
          value={email}
          name='email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          ref={passwordInputRef}
          required
          type="password"
          placeholder='Password'
          value={password}
          name='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && <h3>{error}</h3>}
        <span>Don't have an account yet? <Link to="/register"><p>Register</p></Link></span>
        <span>Go back to Home page <Link to="/"><p>Home</p></Link></span>
      </form>
    </div>
  );
};

export default Login;



