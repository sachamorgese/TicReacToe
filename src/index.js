import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import App from './components/main'
import reducers from './reducers/main'

const createStoreWithMiddleware = applyMiddleware()(createStore)

/* eslint-disable no-underscore-dangle */
export const store = createStoreWithMiddleware(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
/* eslint-enable */

ReactDOM.render(
  // Provider connects react and redux
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'),
)
