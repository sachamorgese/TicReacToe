// @flow
import { ADD_MOVE, ADD_MOVE_CPU, THINKING, START_NEW_GAME, TRAVEL_BACK } from '../actions/main'
import type ACTION from '../flow_types/action_types'

type turnsState = {
  turnNumber: number,
  turns: {[string]: Array<string>},
  thinking: boolean,
}

const initTurnsState =
  {
    turnNumber: 1,
    turns: {
      '1': ['', '', '', '', '', '', '', '', '',
      ],
    },
    thinking: false,
  }

export default function turnsReducer(state: turnsState = initTurnsState, action: ACTION) {
  switch (action.type) {
    case ADD_MOVE_CPU:
    case ADD_MOVE: {
      const { turnNumber, turns } = state
      const { index, sign } = action.payload
      const newTurnNumber = action.payload.increaseTurn ?
        state.turnNumber + 1 :
        state.turnNumber
      const previousTurn = [...turns[`${turnNumber}`]]
      previousTurn[index - 1] = sign
      const newTurns = { ...turns, [newTurnNumber]: previousTurn }
      return {
        turnNumber: newTurnNumber,
        turns: newTurns,
        thinking: false,
      }
    }
    case START_NEW_GAME: {
      return { ...initTurnsState }
    }
    case THINKING: {
      return { ...state, thinking: true }
    }
    case TRAVEL_BACK: {
      const turns = {}
      for (let i = 1; i <= action.payload.oldTurnNumber; i++) {
        turns[i] = state.turns[`${i}`]
      }
      return {
        ...state,
        turnNumber: action.payload.oldTurnNumber,
        turns,
      }
    }
    default:
      return state
  }
}
