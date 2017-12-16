type gamesState = {
  gameNumber: number,
  playerSign: 'cross' | 'circle',
  cpuSign: 'cross' | 'circle',
  signSelection: boolean,
  winner: Array<number>,
  draw: boolean,
  gameStarted: boolean,
}

type turnsState = {
  turnNumber: number,
  turns: {[string]: Array<string>},
  thinking: boolean,
}

type whoseTurnState = {
  isPlayerTurn: boolean,
  deciding: boolean
}

export type State =
  gamesState | turnsState | whoseTurnState
