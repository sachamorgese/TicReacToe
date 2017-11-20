import { combineReducers } from 'redux'
import { ADD_MOVE } from '../actions/main'

const initTurnsState =
  {
    turnNumber: 1,
    turns: {
      '1': ['', '', '', '', '', '', '', '', '',
      ],
    },
  }
const initGamesState =
  {
    gameNumber: 0,
    playerSign: '',
    cpuSign: '',
  }

function turnsReducer(state = initTurnsState, action) {
  switch (action.type) {
    case ADD_MOVE: {
      const { turnNumber, turns } = state
      const { index, sign } = action.payload
      const newTurnNumber = turnNumber + 1
      const previousTurn = [...turns[turnNumber]]
      previousTurn[index - 1] = sign
      const newTurns = { ...turns, [newTurnNumber]: previousTurn }
      return {
        turnNumber: newTurnNumber,
        turns: newTurns,
      }
    }
    default:
      return state
  }
}

function gamesReducer(state = initGamesState, action) {
  return state
}

const rootReducer = combineReducers({
  turnsReducer,
  gamesReducer,
})


export default rootReducer
