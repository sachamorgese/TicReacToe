export const ADD_MOVE = 'add_move'
export const NEXT_MOVE = 'next_move'
export const CHOOSE_SIGN = 'choose_sign'

export function addMove(index, sign) {
  return {
    type: ADD_MOVE,
    payload: {
      index,
    },
  }
}

export function nextMove(playerTurn) {
  return {
    type: NEXT_MOVE,
    payload: playerTurn,
  }
}

export function chooseSign(sign) {
  return {
    type: CHOOSE_SIGN,
    payload: sign,
    playerSign: sign,
    cpuSign: sign === 'circle' ? 'cross' : 'circle',
  }
}
