import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './Home';

function App() {
  const [inputData, setInputData] = useState('');
  const [responseData, setResponseData] = useState('');
  const navigate = useNavigate(); // For programmatic navigation

  const sendData = async () => {
    try {
      const response = await fetch('http://localhost:5000/kya-khana-hai/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: inputData }),
      });

      const result = await response.json();
      setResponseData(result.received);

      // Navigate to Home after receiving response
      navigate('/Home');
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  return (
    <div>
      <h1>Cooking App</h1>
      <input
        type="text"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        placeholder="What would you like for today?"
      />
      <button onClick={sendData}>Let's go!</button>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default AppWrapper;
