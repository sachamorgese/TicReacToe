import React, { Component } from 'react'
import '../css/main.css'

const Helloer = () =>
  (
  <div>
    <h1>Hello</h1>
    <h2>Hello</h2>
    <h3>Hello</h3>
    <h4>Hello</h4>
    <h5>Hello</h5>
    <h6>Hello</h6>
  </div>
  )


class App extends Component {
  render() {
    return (
      <div className="App">
        <Helloer className="left" />
        <Helloer className="right" />
      </div>
    )
  }
}

export default App
