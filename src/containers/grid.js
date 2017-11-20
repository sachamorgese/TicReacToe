import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addMove } from '../actions/main'
import { Cross, Circle } from '../components/signs'

class Grid extends Component {
  makeCell(value, index) {
    return (
      <div
        key={index}
        className={`square square${index}`}
        onClick={value === '' ?
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
  clickHandler(index) {
    this.props.addMove(index, 'cross')
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
  const { turns, turnNumber } = state.turnsReducer
  return { turn: turns[turnNumber] }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addMove }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid)
