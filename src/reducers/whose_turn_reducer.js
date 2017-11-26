import { ADD_MOVE_CPU, DECIDING, NEXT_MOVE, WHO_STARTS } from '../actions/main'

const initWhoseTurn =
  {
    isPlayerTurn: '',
    deciding: false,
  }

export default function whoseTurnReducer(state = initWhoseTurn, action) {
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
        isPlayerTurn: action.payload.isPlayerTurn,
        deciding: false,
      }
    default:
      return state
  }
}
