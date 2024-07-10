// App.js
import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import MenuPage from './components/MenuPage';
import Game from './components/TicTacToe/Game';
import RockPaperScissors from './components/RockPaperScissors';
import './styles/App.css';

function App() {
  const [playerNames, setPlayerNames] = useState({ player1: '', player2: '' });
  const [scores, setScores] = useState({
    ticTacToe: { player1: 0, player2: 0 },
    rockPaperScissors: { player1: 0, player2: 0 },
  });

  useEffect(() => {
    const storedScores = localStorage.getItem('scores');
    if (storedScores) {
      setScores(JSON.parse(storedScores));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('scores', JSON.stringify(scores));
  }, [scores]);

  const updateScores = useCallback((game, winner) => {
    setScores((prevScores) => {
      const newScores = { ...prevScores };
      newScores[game][winner]++;
      return newScores;
    });
  }, []);

  const resetScores = useCallback(() => {
    setScores({
      ticTacToe: { player1: 0, player2: 0 },
      rockPaperScissors: { player1: 0, player2: 0 },
    });
    localStorage.removeItem('scores');
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage setPlayerNames={setPlayerNames} />} />
        <Route
          path="/menu"
          element={<MenuPage playerNames={playerNames} scores={scores} resetScores={resetScores} />}
        />
        <Route
          path="/tic-tac-toe"
          element={<Game playerNames={playerNames} updateScores={updateScores} scores={scores} />}
        />
        <Route
          path="/rock-paper-scissors"
          element={<RockPaperScissors playerNames={playerNames} scores={scores} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
