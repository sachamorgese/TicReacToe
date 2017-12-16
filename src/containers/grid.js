import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { addMove, nextMove, cpuMove, chooseSign, decidingTime, whoStarts, sendWinner, sendDraw, newGame, travelBack }
  from '../actions/main'
import { Cross, Circle } from '../components/signs'
import { cpuTurn, choosingStarter } from '../js/game_functions'
import { winPat } from '../js/game_const'
import type { gridProps as Props } from '../flow_types/component_types'

const paragrapher = (props) => {
  if (props.winner.length > 0) {
    return props.turn[props.winner[0] + 1] === props.playerSign ? 'PLAYER WINS!' : 'CPU WINS!'
  }
  if (props.turnNumber >= 10) return 'Draw!'
  if (props.signSelection) return 'by Sacha Morgese!'
  if (props.deciding) return 'Deciding who starts...'
  if (props.turnNumber === 1) {
    return props.isPlayerTurn ? 'Player starts!' : 'CPU starts'
  }
  if (props.isPlayerTurn && props.turnNumber > 1) return 'Player\u0027s turn'
  if (props.thinking && props.turnNumber > 1) return 'CPU is thinking...'
}

class Grid extends Component<Props> {
  componentDidUpdate() {
    let draw = false
    let win = false
    if (this.props.winner.length === 0 && !this.props.draw && !this.props.thinking) {
      if (!this.props.deciding && this.props.turnNumber >= 10) {
        draw = true
        this.props.sendDraw()
        this.props.newGame()
      }
      if (this.props.turnNumber > 4) {
        const turn = ['', ...this.props.turn]
        const winner = winPat.filter((value) =>
          turn[value[0]] !== '' && turn[value[0]] === turn[value[1]] &&
          turn[value[0]] === turn[value[2]])
        if (winner.length > 0) {
          win = true
          this.props.sendWinner(winner[0])
          this.props.newGame()
        }
      }
      if (!draw && !win) {
        if (this.props.isPlayerTurn === false && !this.props.thinking && this.props.gameStarted) {
          const CPUMove = cpuTurn(this.props.turnNumber, this.props.turn, this.props.cpuSign, this.props.playerSign)
          this.props.cpuMove(CPUMove, this.props.cpuSign)
        }
        if (this.props.isPlayerTurn === '' && !this.props.deciding) {
          this.props.whoStarts(choosingStarter())
        }
      }
    }
  }
  clickHandler(index) {
    this.props.addMove(index, this.props.playerSign, true)
    this.props.nextMove(this.props.isPlayerTurn)
  }
  signClickHandler(sign) {
    this.props.chooseSign(sign)
  }
  timeTravel(i) {
    this.props.travelBack(i, this.props.turnNumber)
  }
  makeCell(value, index) {
    const classes = `square square${index}
    ${this.props.isPlayerTurn ? 'clickable' : ''}
    ${this.props.winner.indexOf(index) >= 0 ? 'winning-square' : ''}`
    return (
      <div
        key={index}
        className={classes}
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
            <Circle circleClass="" onClick={() => true} /> :
            <Cross crossClass="" onClick={() => true} />}
      </div>
    )
  }
  makeList(index) {
    const list = []
    for (let i = 1; i < index; i++) {
      const li = (
        <li key={i}>
          <div
            className={`timeTravel--button ${this.props.isPlayerTurn ? 'clickable' : ''}`}
            onClick={this.props.isPlayerTurn ? () => this.timeTravel(i) : null}
            onKeyDown={this.props.isPlayerTurn ? () => this.timeTravel(i) : null}>
            {i !== 1 ? `Turn ${i}` : 'Game Start'}
          </div>
        </li>)
      list.push(li)
    }
    return list
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
          <div className="grid-base selection-screen">
            <p className="picker">Pick one:</p>
            <Circle circleClass="circle" onClick={(e) => this.signClickHandler(e)} />
            <Cross crossClass="cross" onClick={(e) => this.signClickHandler(e)} />
          </div>
          }
          {!this.props.signSelection &&
          <div className="grid-base grid-container">
            {this.props.turn.map((v, i) => this.makeCell(v, i + 1))}
          </div>}
          <div className="bottom">
            <h3>{!this.props.signSelection && `Round ${this.props.gameNumber}`}</h3>
            <ul>
              {
                this.makeList(this.props.turnNumber)
              }
            </ul>
          </div>
        </div>
      )
    }
    return null
  }
}

function mapStateToProps(state) {
  const { turns, turnNumber, thinking } = state.turns
  const {
    playerSign, cpuSign, signSelection, winner, draw, gameStarted, gameNumber,
  } = state.games
  const { isPlayerTurn, deciding } = state.whoseTurn
  return {
    turnsObject: turns,
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
    draw,
    gameNumber,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addMove, nextMove, cpuMove, chooseSign, decidingTime, whoStarts, sendWinner, newGame, sendDraw, travelBack,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid)
