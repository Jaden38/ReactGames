// HomePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Common.css';
import '../styles/HomePage.css';

function HomePage({ setPlayerNames }) {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleStart = () => {
    if (player1 && player2) {
      setPlayerNames({ player1, player2 });
      navigate('/menu');
    } else {
      setError('Both player names are required.');
    }
  };

  return (
    <div className="container home-container">
      <h1>Welcome to the Game</h1>
      <input
        type="text"
        placeholder="Player 1 Name"
        value={player1}
        onChange={(e) => setPlayer1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Player 2 Name"
        value={player2}
        onChange={(e) => setPlayer2(e.target.value)}
      />
      <button onClick={handleStart}>Start</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default HomePage;
