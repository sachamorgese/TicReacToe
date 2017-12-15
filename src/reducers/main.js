// @flow

import { combineReducers } from 'redux'
import turnsReducer from '../reducers/turns_reducer'
import gamesReducer from '../reducers/games_reducer'
import whoseTurnReducer from '../reducers/whose_turn_reducer'

const rootReducer = combineReducers({
  turns: turnsReducer,
  games: gamesReducer,
  whoseTurn: whoseTurnReducer,
})

export default rootReducer
