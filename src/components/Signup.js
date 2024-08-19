import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, mobile }),
      });

      if (response.ok) {
        const data = await response.text(); // Adjust this based on what your backend returns
        console.log('Registered successfully:', data);
        navigate('/success', { state: { type: 'signup' } });
      } else {
        const errorData = await response.data(); // or response.text(), depending on your backend
        console.error('Signup failed:', errorData);
        alert('Signup failed: ' + (errorData.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('An error occurred during signup.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Mobile:</label>
        <input
          type="tel" // Changed from 'mobile' to 'tel'
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />
      </div>
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;