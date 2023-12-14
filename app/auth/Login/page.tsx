'use client'
import React, { useState,  } from 'react';
 
const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
 
  const validateLoginForm = () => {
    if (!email || !password) {
    //   setError('Please enter both email and password');
    //   return false;
    alert('Please enter both email and password!');
    return false;
    }
    return true;
  };
 
  const handleLogin = () => {
    if (validateLoginForm()) {
     alert('Success!');
    }
  };
 
  return (
    <div>
        <center>
      <h1>Login</h1>
      <form>
        <label>Email: </label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Password: </label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      </center>
    </div>
  );
};
 
export default Login;