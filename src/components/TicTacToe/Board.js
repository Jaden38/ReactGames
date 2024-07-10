// Board.js
import React from 'react';
import Square from './Square';
import calculateWinner from '../../utils/calculateWinner'; // Import de la fonction calculateWinner

function Board({ xIsNext, squares, onPlay, playerNames }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner.player === 'X' ? playerNames.player1 : playerNames.player2}`;
  } else {
    status = `Next player: ${xIsNext ? playerNames.player1 : playerNames.player2}`;
  }

  return (
    <>
      <div className="status">{status}</div>
      {[0, 1, 2].map((row) => (
        <div className="board-row" key={row}>
          {[0, 1, 2].map((col) => {
            const i = row * 3 + col;
            return (
              <Square
                key={i}
                value={squares[i]}
                onSquareClick={() => handleClick(i)}
                highlight={winner && winner.squares && winner.squares.includes(i)}
              />
            );
          })}
        </div>
      ))}
    </>
  );
}

export default Board;
