import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addMove, nextMove } from '../actions/main'
import { Cross, Circle } from '../components/signs'
import { cpuTurn } from '../js/game_functions'

class Grid extends Component {
  componentDidUpdate() {
    if (!this.props.isPlayerTurn) {
      const CPUMove = cpuTurn(this.props.turnNumber, this.props.turn, this.props.cpuSign)
      this.props.addMove(CPUMove, this.props.cpuSign)
      this.props.nextMove(this.props.isPlayerTurn)
    }
  }
  clickHandler(index) {
    this.props.nextMove(this.props.isPlayerTurn)
    this.props.addMove(index, this.props.playerSign)
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
            <Circle /> :
            <Cross />}
      </div>
    )
  }
  render() {
    if (this.props) {
      return (
        <div className="grid-container">
          {this.props.turn.map((v, i) => this.makeCell(v, i + 1))}
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
  return bindActionCreators({ addMove, nextMove }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid)
