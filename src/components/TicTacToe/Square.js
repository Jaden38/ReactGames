// Square.js
import React from 'react';

function Square({ value, onSquareClick, highlight }) {
  const className = highlight ? 'square square-winning' : 'square';
  return (
    <button onClick={onSquareClick} className={className}>
      {value}
    </button>
  );
}

export default Square;
