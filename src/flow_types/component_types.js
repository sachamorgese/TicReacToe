export type gridProps = {
  turnsObject: {[string]: Array<string>},
  turn: {[string]: Array<string>},
  turnNumber: number,
  playerSign: 'cross' | 'circle',
  cpuSign: 'cross' | 'circle',
  isPlayerTurn: boolean,
  signSelection: boolean,
  deciding: boolean,
  thinking: boolean,
  winner: Array<number>,
  gameStarted: boolean,
  draw: boolean,
  gameNumber: boolean,
}

export type signProps = {

}
