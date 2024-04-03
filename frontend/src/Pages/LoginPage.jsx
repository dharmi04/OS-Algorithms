// Login.js
import React, { useState } from 'react';
import axios from 'axios';

import '../assets/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        Email: email,
        Password: password
      });
      console.log(email, password)
      console.log(response.data); // handle successful login
      window.location.href = '/landing';
    } catch (error) {
      setError(error.response.data.error); // handle login error
    }
  };

  return (
    <div className="new">
      <h1>Login</h1>
      <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
    </div>
    
  );
};

export default Login;