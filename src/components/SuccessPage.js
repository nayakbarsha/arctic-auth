import React from 'react';
import { useNavigate,useLocation } from 'react-router-dom';

const SuccessPage = () => {
  const navigate = useNavigate();
  const location = useLocation();  // Access location to get the state
  const { type } = location.state || {};  // Destructure type from location.state


  const handleLogout = () => {
    // Add your logout logic here
    // For example, clear authentication tokens or user session

    // Redirect to login page
    navigate('/');
    navigate('/success', { state: { type: 'signup' } });
  };

  // Determine the text based on the type of success page
  const successMessage = type === 'signup' 
    ? 'Signup Successful' 
    : 'Login Successful';

  const welcomeMessage = type === 'signup' 
    ? 'Thank you for signing up! You can now log in.' 
    : 'Welcome! You have successfully logged in.';


  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1>{successMessage}</h1>
        <p>{welcomeMessage}</p>
        <button onClick={handleLogout} style={styles.button}>Logout</button>
      </div>
    </div>
  );
};

// CSS styles in JavaScript
const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5'
  },
  content: {
    textAlign: 'center'
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer'
  }
};

export default SuccessPage;