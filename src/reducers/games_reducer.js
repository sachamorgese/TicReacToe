import { CHOOSE_SIGN, WHO_STARTS } from '../actions/main'

const initGamesState =
  {
    gameNumber: 0,
    playerSign: '',
    cpuSign: '',
    signSelection: true,
    winner: [],
    gameStarted: false,
  }

export default function gamesReducer(state = initGamesState, action) {
  switch (action.type) {
    case CHOOSE_SIGN:
      return {
        gameNumber: state.gameNumber,
        playerSign: action.payload.playerSign,
        cpuSign: action.payload.cpuSign,
        signSelection: false,
        winner: [],
        gameStarted: state.gameStarted,
      }
    case WHO_STARTS:
      return { ...state, gameStarted: action.payload.gameStarted }
    default:
      return state
  }
}
