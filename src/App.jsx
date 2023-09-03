import { useState } from 'react';
import "./App.css";
import Square from "./components/Square";
export default function board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  function handleClick() {
    const nextSquares = squares.slice();
    
  }
  return (
    <>
      <div className="board-row">
        <Square value = {squares[0]} onSquareClick={handleClick} />
        <Square value = {squares[1]} />
        <Square value = {squares[2]} />
      </div>
      <div className="border-row">
        <Square value = {squares[3]} />
        <Square value = {squares[4]} />
        <Square value = {squares[5]} />
      </div>
      <div className="board-row">
        <Square value = {squares[6]} />
        <Square value = {squares[7]} />
        <Square value = {squares[8]} />
      </div>
    </>
  );
}
