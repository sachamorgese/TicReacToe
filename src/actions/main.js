export const ADD_MOVE = 'add_move'
export const NEXT_MOVE = 'next_move'

export function addMove(index, sign) {
  return {
    type: ADD_MOVE,
    payload: {
      index,
      sign,
    },
  }
}

export function nextMove(playerTurn) {
  return {
    type: NEXT_MOVE,
    payload: playerTurn,
  }
}
