type ADD_MOVE_TYPE = {
  type: 'add_move',
  payload: {
    index: number,
    sign: string,
    increaseTurn: boolean,
  }
}

type NEXT_MOVE_TYPE = {
  type: 'next_move',
}

type CHOOSE_SIGN_TYPE = {
  type: 'choose_sign',
  payload: {
    playerSign: string,
    cpuSign: string,
  }
}

type DECIDING_TYPE = {
  type: 'deciding'
}

type THINKING_TYPE = {
  type: 'thinking'
}

type WHO_STARTS_TYPE = {
  type: 'who_starts',
  payload: {
    starter: boolean,
    gameStarted: boolean,
  }
}

type ADD_MOVE_CPU_TYPE = {
  type: 'add_move_cpu',
  payload: {
    index: number,
    sign: string,
    increaseTurn: boolean,
    isPlayerTurn: boolean,
  },
}

type WINNER_TYPE = {
  type: 'winner',
  payload: Array<number>,
}

type START_NEW_GAME_TYPE = {
  type: 'start_new_game',
}

type DRAW_TYPE = {
  type: 'draw',
}

type TRAVEL_BACK_TYPE = {
  type: 'travel_back',
  payload: {
    oldTurnNumber: number,
    playerStarted: boolean,
  },
}

export type ACTION =
ADD_MOVE_CPU_TYPE | ADD_MOVE_TYPE | CHOOSE_SIGN_TYPE | DECIDING_TYPE | DRAW_TYPE | NEXT_MOVE_TYPE
| THINKING_TYPE | TRAVEL_BACK_TYPE | START_NEW_GAME_TYPE | WHO_STARTS_TYPE | WINNER_TYPE;
