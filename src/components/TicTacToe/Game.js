// Game.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Board from './Board';
import calculateWinner from '../../utils/calculateWinner';
import '../../styles/Game.css';

export default function Game({ playerNames, updateScores, scores }) {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isDescending, setIsDescending] = useState(true);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  const navigate = useNavigate(); // Hook pour la navigation

  useEffect(() => {
    const winner = calculateWinner(currentSquares);
    if (winner) {
      console.log('Winner found:', winner); // Log to check the winner
      updateScores('ticTacToe', winner.player === 'X' ? 'player1' : 'player2');
    }
  }, [currentSquares, updateScores]);

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  function handleSortToggle() {
    setIsDescending(!isDescending);
  }

  const currentMoveDesc = currentMove === 0 ? "Go to game start" : `You are at move #${currentMove}`;

  const moves = history.map((squares, move) => {
    const desc = move ? `Go to move #${move}` : 'Go to game start';
    return (
      <li key={move}>
        {move === currentMove ? (
          <span>{currentMoveDesc}</span>
        ) : (
          <button onClick={() => jumpTo(move)}>{desc}</button>
        )}
      </li>
    );
  });

  if (!isDescending) {
    moves.reverse();
  }

  return (
    <div className="container game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} playerNames={playerNames} />
      </div>
      <div className="game-info">
        <button onClick={handleSortToggle}>
          Sort {isDescending ? 'ascending' : 'descending'}
        </button>
        <ol className="moves-list">{moves}</ol>
      </div>
      <div className="game-scores">
        <h3>Scores</h3>
        <p>{playerNames.player1}: {scores.ticTacToe.player1}</p>
        <p>{playerNames.player2}: {scores.ticTacToe.player2}</p>
        <button onClick={() => navigate('/menu')}>Go Back</button> {/* Bouton Quitter */}
      </div>
    </div>
  );
}
