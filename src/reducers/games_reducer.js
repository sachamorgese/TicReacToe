// @flow
import { CHOOSE_SIGN, WHO_STARTS, WINNER, START_NEW_GAME, DRAW } from '../actions'
import type ACTION from '../flow_types/action_types'
import type { State } from '../flow_types/state_types'

const initGamesState: State =
  {
    gameNumber: 1,
    playerSign: '',
    cpuSign: '',
    signSelection: true,
    winner: [],
    draw: false,
    gameStarted: false,
  }

export default function gamesReducer(state: State = initGamesState, action: ACTION) {
  switch (action.type) {
    case CHOOSE_SIGN:
      return {
        ...initGamesState,
        gameNumber: state.gameNumber,
        playerSign: action.payload.playerSign,
        cpuSign: action.payload.cpuSign,
        signSelection: false,
        gameStarted: state.gameStarted,
      }
    case WHO_STARTS:
      return { ...state, gameStarted: action.payload.gameStarted }
    case DRAW:
      return {
        ...state,
        draw: true,
        gameStarted: false,
      }
    case WINNER:
      return {
        ...state,
        winner: action.payload,
        gameStarted: false,
      }
    case START_NEW_GAME:
      return {
        ...initGamesState,
        playerSign: state.playerSign,
        cpuSign: state.cpuSign,
        gameNumber: state.gameNumber + 1,
        signSelection: false,
      }
    default:
      return state
  }
}
