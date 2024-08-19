// src/App.js
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Login from './components/Login';
import Signup from './components/Signup';
import SuccessPage from './components/SuccessPage';
import './styles.css';

const App = () => {
  return (
    <>
      <nav>
        <Link to="/">Login</Link>
        <Link to="/signup">Signup</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </>
  );
};

export default App;