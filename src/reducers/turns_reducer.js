import { ADD_MOVE, ADD_MOVE_CPU, THINKING } from '../actions/main'

const initTurnsState =
  {
    turnNumber: 1,
    turns: {
      '1': ['', '', '', '', '', '', '', '', '',
      ],
    },
    thinking: false,
  }

export default function turnsReducer(state = initTurnsState, action) {
  switch (action.type) {
    case ADD_MOVE_CPU:
    case ADD_MOVE: {
      const { turnNumber, turns } = state
      const { index, sign } = action.payload
      const newTurnNumber = action.payload.increaseTurn ?
        state.turnNumber + 1 :
        state.turnNumber
      const previousTurn = [...turns[turnNumber]]
      previousTurn[index - 1] = sign
      const newTurns = { ...turns, [newTurnNumber]: previousTurn }
      return {
        turnNumber: newTurnNumber,
        turns: newTurns,
        thinking: false,
      }
    }
    case THINKING: {
      return { ...state, thinking: true }
    }
    default:
      return state
  }
}
