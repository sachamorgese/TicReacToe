import type { Signs } from './component_types'

export type TurnType = {[string]: Array<string>};

type gamesState = {
  gameNumber: number,
  playerSign: Signs,
  cpuSign: Signs,
  signSelection: boolean,
  winner: Array<number>,
  draw: boolean,
  gameStarted: boolean,
}

type turnsState = {
  turnNumber: number,
  turns: TurnType,
  thinking: boolean,
}

type whoseTurnState = {
  isPlayerTurn?: boolean,
  deciding: boolean
}

export type State =
  gamesState | turnsState | whoseTurnState
