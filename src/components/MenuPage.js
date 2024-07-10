// MenuPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/MenuPage.css';

function MenuPage({ playerNames, scores, resetScores }) {
  const navigate = useNavigate();

  const handleReset = () => {
    resetScores();
    navigate('/');
  };

  return (
    <div className="container menu-container">
      <h1>Main Menu</h1>
      <ul>
        <li onClick={() => navigate('/tic-tac-toe')}>Tic-Tac-Toe</li>
        <li onClick={() => navigate('/rock-paper-scissors')}>Rock-Paper-Scissors</li>
      </ul>
      <h2>Scores</h2>
      <table>
        <thead>
          <tr>
            <th>Game</th>
            <th>{playerNames.player1}</th>
            <th>{playerNames.player2}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tic-Tac-Toe</td>
            <td>{scores.ticTacToe.player1}</td>
            <td>{scores.ticTacToe.player2}</td>
          </tr>
          <tr>
            <td>Rock-Paper-Scissors</td>
            <td>{scores.rockPaperScissors.player1}</td>
            <td>{scores.rockPaperScissors.player2}</td>
          </tr>
        </tbody>
      </table>
      <div className="menu-buttons">
        <button onClick={handleReset}>Reset</button>
        <button onClick={() => navigate('/')}>Go Back</button>
      </div>
    </div>
  );
}

export default MenuPage;
