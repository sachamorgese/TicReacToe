const initGamesState =
  {
    gameNumber: 0,
    playerSign: 'circle',
    cpuSign: 'cross',
  }

export default function gamesReducer(state = initGamesState, action) {
  return state
}
