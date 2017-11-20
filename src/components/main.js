import React, { Component } from 'react'

import Grid from '../containers/grid'

import '../css/main.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>TicReacToe!</h1>
          <h3>FreeCodeCamp project</h3>
          <div id="info-box">
            <p>by Sacha Morgese!</p>
          </div>
        </div>
        <Grid className="grid-container" />
      </div>
    )
  }
}

export default App
