import { combineReducers } from 'redux'

// Function used to combine multiple reducers
const rootReducer = combineReducers({
  // dummy: dummy in ES6
  dummy
})

// Dummy reducer just to make sure the app works
function dummy(state = {}, action) {
  switch (action.type) {
    default:
      return state
  }
}

export default rootReducer
