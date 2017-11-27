import React, { Component } from 'react'

import Grid from '../containers/grid'

if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update')
  whyDidYouUpdate(React)
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid />
      </div>
    )
  }
}

export default App
