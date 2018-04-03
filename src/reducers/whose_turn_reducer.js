// @flow
import { ADD_MOVE_CPU, DECIDING, NEXT_MOVE, WHO_STARTS, WINNER, DRAW, TRAVEL_BACK } from '../actions/main'
import type ACTION from '../flow_types/action_types'
import type { State } from '../flow_types/state_types'

const initWhoseTurn: State =
  {
    deciding: false,
  }

export default function whoseTurnReducer(state: State = initWhoseTurn, action: ACTION) {
  switch (action.type) {
    case NEXT_MOVE:
      return {
        isPlayerTurn: !state.isPlayerTurn,
        deciding: false,
      }
    case DECIDING:
      return {
        isPlayerTurn: state.isPlayerTurn,
        deciding: true,
      }
    case WHO_STARTS:
      return {
        isPlayerTurn: action.payload.starter,
        deciding: false,
      }
    case ADD_MOVE_CPU:
      return {
        isPlayerTurn: state.isPlayerTurn != null ? action.payload.isPlayerTurn : null,
        deciding: false,
      }
    case TRAVEL_BACK: {
      return {
        isPlayerTurn: (action.payload.oldTurnNumber % 2 !== 0) === action.payload.playerStarted,
      }
    }
    case DRAW:
    case WINNER:
      return {
        deciding: false,
      }
    default:
      return state
  }
}
