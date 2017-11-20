export const ADD_MOVE = 'add_move'

export function addMove(index, sign) {
  return {
    type: ADD_MOVE,
    payload: {
      index,
      sign,
    },
  }
}
