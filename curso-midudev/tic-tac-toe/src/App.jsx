import { useState } from "react"
import { Square } from "./components/Square"
import { WinnerModal } from "./components/WinnerModal"
import { TURNS } from './constants.js'
import { changeTurn, checkEndGame, checkWinnerFrom } from "./logic/board"
import { Board } from "./components/Board"
import { resetGameFromStorage, saveGameToStorage } from "./logic/storage"

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameFromStorage()
  }

  const updateBoard = (index) => {
    // No sobreescribir
    if (board[index] || winner) return 

    // Actualización del tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // Cambio del turno
    const newTurn = changeTurn(turn)
    setTurn(newTurn)

    // Guardar partida
    saveGameToStorage({
      board: newBoard, 
      turn: newTurn
    })

    // Revisión del resultado
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <main className="board"> 
      <h1>tic tac toe</h1>
      <button onClick={resetGame}>Reset</button>
      <section className="game">
        <Board 
          board={board} 
          updateBoard={updateBoard}
        />
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}
export default App
