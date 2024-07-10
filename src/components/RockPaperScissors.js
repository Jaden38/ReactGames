import React from 'react';
import '../styles/RockPaperScissors.css';

function RockPaperScissors({ playerNames, scores }) {
  return (
    <div className="container">
      <h1>Rock-Paper-Scissors</h1>
      <p>Coming Soon!</p>
      <div className="scoreboard">
        <p>{playerNames.player1}: {scores.rockPaperScissors[playerNames.player1]}</p>
        <p>{playerNames.player2}: {scores.rockPaperScissors[playerNames.player2]}</p>
      </div>
      <button onClick={() => window.history.back()}>Go Back</button>
    </div>
  );
}

export default RockPaperScissors;
