import React, { useState } from "react";
import Board from "./components/board/Board";
import ScoreBoard from "./ScoreBoard/ScoreBoard";
import "./App.css";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsPlaying, setXIsPlaying] = useState(true);
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);
  const [tie, setTie] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleBoxClick = (boxID) => {
    const updatedBoard = board.map((value, id) => {
      if (id === boxID) {
        return xIsPlaying === true ? "X" : "O";
      } else {
        return value;
      }
    });
    setBoard(updatedBoard);
    setXIsPlaying(!xIsPlaying);
    const winner = checkWinner(updatedBoard);

    if (winner) {
      if (winner === "X") {
        setXScore(xScore + 1);
        setGameOver(true);
      } else {
        setOScore(oScore + 1);
        setGameOver(true);
      }
    }

    let filled = true;

    updatedBoard.map((item) => {
      if (item === null) {
        filled = false;
      }
    });

    if (filled && winner !== "X" && winner !== "Y") {
      filled = true;
      setTie(tie + 1);
    }
  };

  const checkWinner = (updatedBoard) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];

      if (
        updatedBoard[x] &&
        updatedBoard[x] === updatedBoard[y] &&
        updatedBoard[y] === updatedBoard[z]
      ) {
        console.log("winner");
        return updatedBoard[x];
      }
    }
  };

  const reset = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  };

  const restartGame = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
    setOScore(0);
    setXScore(0);
    setTie(0);
  };

  return (
    <div className="App">
      <ScoreBoard xScore={xScore} oScore={oScore} tie={tie} />
      <Board
        board={board}
        onClick={gameOver === true ? reset : handleBoxClick}
      />
      <button className="restartGame" onClick={reset}>
        Play Again
      </button>
      <br/>
      <button className="restartGame" onClick={restartGame}>
        Restart Game
      </button>
    </div>
  );
}

export default App;
