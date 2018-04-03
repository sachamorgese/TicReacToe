// @flow

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import App from './components/index'
import reducers from './reducers/index'

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore)

export const store = createStoreWithMiddleware(reducers)

const root = document.getElementById('root')

if (root) {
  ReactDOM.render(
    // Provider connects react and redux
    <Provider store={store}>
      <App />
    </Provider>
    , root,
  )
}
