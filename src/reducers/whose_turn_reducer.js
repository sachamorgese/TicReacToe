import { NEXT_MOVE } from '../actions/main'

const initWhoseTurn =
  {
    isPlayerTurn: '',
  }


export default function whoseTurnReducer(state = initWhoseTurn, action) {
  switch (action.type) {
    case NEXT_MOVE:
      return {
        isPlayerTurn: !action.payload,
      }
    default:
      return state
  }
}
