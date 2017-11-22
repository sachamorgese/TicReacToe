import { CHOOSE_SIGN } from '../actions/main'

const initGamesState =
  {
    gameNumber: 0,
    playerSign: '',
    cpuSign: '',
  }

export default function gamesReducer(state = initGamesState, action) {
  console.log(action)
  switch (action.type) {
    case CHOOSE_SIGN:
      return {
        gameNumber: state.gameNumber,
        playerSign: action.payload.playerSign,
        cpuSign: action.payload.cpuSign,
      }
    default:
      return state
  }
}

