import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import '../css/main.css'

import { addMove, nextMove, chooseSign } from '../actions/main'
import { Cross, Circle } from '../components/signs'
import { cpuTurn } from '../js/game_functions'

class Grid extends Component {
  componentDidMount() {
    if (this.props.isPlayerTurn === false) {
      const CPUMove = cpuTurn(this.props.turnNumber, this.props.turn, this.props.cpuSign, this.props.playerSign)
      this.props.addMove(CPUMove, this.props.cpuSign, this.props.playerSign)
      this.props.nextMove(this.props.isPlayerTurn)
    }
  }
  componentDidUpdate() {
    if (this.props.isPlayerTurn === false) {
      const CPUMove = cpuTurn(this.props.turnNumber, this.props.turn, this.props.cpuSign, this.props.playerSign)
      this.props.addMove(CPUMove, this.props.cpuSign, this.props.playerSign)
      this.props.nextMove(this.props.isPlayerTurn)
    }
  }
  clickHandler(index) {
    this.props.nextMove(this.props.isPlayerTurn)
    this.props.addMove(index, this.props.playerSign)
  }
  signClickHandler(sign) {
    this.props.chooseSign(sign)
  }
  makeCell(value, index) {
    return (
      <div
        key={index}
        className={`square square${index}`}
        onClick={
          this.props.isPlayerTurn &&
          value === '' ?
          () => this.clickHandler(index) :
        null
        }
        onKeyDown={value === '' ?
          () => this.clickHandler(index) :
          null
        }>
        {!value ? '' :
          value === 'circle' ?
            <Circle circleClass="" /> :
            <Cross crossClass="" />}
      </div>
    )
  }
  render() {
    if (this.props) {
      return (
        <div>
          <div className="header">
            <h1>TicReacToe!</h1>
            <h3>A game made with React!</h3>
            <div id="info-box">
              <p>by Sacha Morgese!</p>
            </div>
          </div>
          {this.props.isPlayerTurn === '' &&
          <div className="selection-screen">
            <p className="picker">Pick one:</p>
            <Circle circleClass="circle" onClick={(e) => this.signClickHandler(e)} />
            <Cross crossClass="cross" onClick={(e) => this.signClickHandler(e)} />
          </div>
          }
          {this.props.isPlayerTurn !== '' &&
          <div className="grid-container">
            {this.props.turn.map((v, i) => this.makeCell(v, i + 1))}
          </div>}
        </div>
      )
    }
    return null
  }
}

function mapStateToProps(state) {
  const { turns, turnNumber } = state.turns
  const { playerSign, cpuSign } = state.games
  const { isPlayerTurn } = state.whoseTurn
  return {
    turn: turns[turnNumber],
    turnNumber,
    playerSign,
    cpuSign,
    isPlayerTurn,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addMove, nextMove, chooseSign }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid)
