import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import App from './components/main'
import reducers from './reducers/main'

const createStoreWithMiddleware = applyMiddleware()(createStore)

export const store = createStoreWithMiddleware(reducers)

ReactDOM.render(
  // Provider connects react and redux
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'),
)
