// @flow
import type { ACTION } from '../flow_types/action_types'

/* eslint-disable no-use-before-define */
type ThunkAction = (dispatch: Dispatch) => any;
type Dispatch = (action: ACTION | ThunkAction) => any;
/* eslint-enable no-use-before-define */

export const ADD_MOVE = 'add_move'
export const NEXT_MOVE = 'next_move'
export const CHOOSE_SIGN = 'choose_sign'
export const DECIDING = 'deciding'
export const WHO_STARTS = 'who_starts'
export const THINKING = 'thinking'
export const ADD_MOVE_CPU = 'add_move_cpu'
export const WINNER = 'winner'
export const START_NEW_GAME = 'start_new_game'
export const DRAW = 'draw'
export const TRAVEL_BACK = 'travel_back'

export function addMove(index: number, sign: string, increaseTurn: boolean) {
  return {
    type: ADD_MOVE,
    payload: {
      index,
      sign,
      increaseTurn,
    },
  }
}

function addMoveCpu(index, sign) {
  return {
    type: ADD_MOVE_CPU,
    payload: {
      index,
      sign,
      increaseTurn: true,
      isPlayerTurn: true,
    },
  }
}

export function cpuMove(index: number, sign: string) {
  return (dispatch: Dispatch) => {
    dispatch(thinking())
    setTimeout(() => {
      dispatch(addMoveCpu(index, sign))
    }, 1000)
  }
}

export function nextMove() {
  return {
    type: NEXT_MOVE,
  }
}

export function chooseSign(sign: string) {
  const payload = {
    playerSign: sign,
    cpuSign: sign === 'circle' ? 'cross' : 'circle',
  }
  return {
    type: CHOOSE_SIGN,
    payload,
  }
}

export function decidingTime() {
  return {
    type: DECIDING,
  }
}

export function thinking() {
  return {
    type: THINKING,
  }
}

export function whoStarts(starter: string) {
  return (dispatch: Dispatch) => {
    dispatch(decidingTime())
    setTimeout(() => {
      dispatch(start(starter))
    }, 1000)
  }
}

function start(starter) {
  const payload = {
    starter: starter === 'player',
    gameStarted: true,
  }
  return {
    type: WHO_STARTS,
    payload,
  }
}

export function sendWinner(winner: Array<number>) {
  return {
    type: WINNER,
    payload: winner,
  }
}

export function sendDraw() {
  return {
    type: DRAW,
  }
}

function startNewGame() {
  return {
    type: START_NEW_GAME,
  }
}

export function newGame() {
  return (dispatch: Dispatch) => {
    setTimeout(() => {
      dispatch(startNewGame())
    }, 3000)
  }
}

export function travelBack(oldTurnNumber: number, currentTurnNumber: number) {
  const playerStarted = currentTurnNumber % 2 !== 0
  return {
    type: TRAVEL_BACK,
    payload: {
      oldTurnNumber,
      playerStarted,
    },
  }
}
