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

type circleProps = {
  circleClass: string,
  onClick: Function,
}

type crossProps = {
  crossClass: string,
  onClick: Function,
}

export type signProps = circleProps | crossProps
