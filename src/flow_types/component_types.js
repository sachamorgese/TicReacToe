import type { TurnType } from '../flow_types/state_types'

export type Signs = 'cross' | 'circle';

export type gridProps = {
  turnsObject: TurnType,
  turn: TurnType,
  turnNumber: number,
  playerSign: Signs,
  cpuSign: Signs,
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
