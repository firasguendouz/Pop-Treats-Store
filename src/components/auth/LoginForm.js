// LoginForm.js

import React, { useState } from 'react';

function LoginForm({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }), // Sending email instead of username
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      onLoginSuccess(data); // Handle login success (e.g., save token, navigate to another page)
    } catch (error) {
      console.error('Error logging in:', error);
      setErrorMessage('Failed to login. Please check your credentials and try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
