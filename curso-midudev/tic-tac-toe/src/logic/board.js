import { TURNS, WINNER_COMBOS } from '../constants.js'

export const checkWinnerFrom = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) { // Reccorre el array
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      } 
    }
    // No hay ganador
    return null
}

 // Revisar que no hay espacios vacíos en el tablero
 export const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square !== null)
}

export const changeTurn = (turn => {
  const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
  return newTurn
})