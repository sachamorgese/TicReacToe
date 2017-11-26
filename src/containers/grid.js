import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import '../css/main.css'

import { addMove, nextMove, cpuMove, chooseSign, decidingTime, whoStarts } from '../actions/main'
import { Cross, Circle } from '../components/signs'
import { winPat, cpuTurn, choosingStarter } from '../js/game_functions'

const paragrapher = (props) => {
  if (props.winner.length !== 0) return true
  if (props.turnNumber >= 10) return 'Draw!'
  if (props.signSelection) return 'by Sacha Morgese!'
  if (props.deciding) return 'Deciding who starts...'
  if (props.turnNumber === 1) {
    return props.isPlayerTurn ? 'Player starts!' : 'CPU starts'
  }
  if (props.isPlayerTurn && props.turnNumber > 1) return 'Player\u0027s turn'
  if (props.thinking && props.turnNumber > 1) return 'CPU is thinking...'
}

class Grid extends Component {
  componentDidUpdate() {
    if (this.props.isPlayerTurn === '' && !this.props.deciding) {
      this.props.whoStarts(choosingStarter())
    }
    if (this.props.isPlayerTurn === false && !this.props.thinking && this.props.gameStarted) {
      const CPUMove = cpuTurn(this.props.turnNumber, this.props.turn, this.props.cpuSign, this.props.playerSign)
      this.props.cpuMove(CPUMove, this.props.cpuSign)
    }
    if (winPat) return true
    // if (this.props.turnNumber > 4) {
    //   const turn = ['', ...this.props.turn]
    //   const winner = winPat.filter((value) =>
    //     turn[value[0]] !== '' && turn[value[0]] === turn[value[1]] &&
    //     turn[value[0]] === turn[value[2]])
    //   if (winner)(console.log('WINNER!'))
    // }
  }
  clickHandler(index) {
    this.props.nextMove(this.props.isPlayerTurn)
    this.props.addMove(index, this.props.playerSign, true)
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
      const paragraph = (paragrapher(this.props))
      return (
        <div>
          <div className="header">
            <h1>TicReacToe!</h1>
            <h3>A game made with React!</h3>
            <div id="info-box">
              <p>{paragraph}</p>
            </div>
          </div>
          {this.props.signSelection &&
          <div className="selection-screen">
            <p className="picker">Pick one:</p>
            <Circle circleClass="circle" onClick={(e) => this.signClickHandler(e)} />
            <Cross crossClass="cross" onClick={(e) => this.signClickHandler(e)} />
          </div>
          }
          {!this.props.signSelection &&
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
  const { turns, turnNumber, thinking } = state.turns
  const {
    playerSign, cpuSign, signSelection, winner, gameStarted,
  } = state.games
  const { isPlayerTurn, deciding } = state.whoseTurn
  return {
    turn: turns[turnNumber],
    turnNumber,
    playerSign,
    cpuSign,
    isPlayerTurn,
    signSelection,
    deciding,
    thinking,
    winner,
    gameStarted,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addMove, nextMove, cpuMove, chooseSign, decidingTime, whoStarts,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid)
