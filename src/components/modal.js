import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from '../index'

class Modal extends Component {
  componentDidMount() {
    // Create a floating element div
    this.modalTarget = document.createElement('div')
    // Assign it the class "modal"
    this.modalTarget.className = 'modal'
    // Append it to the body of the page
    document.body.appendChild(this.modalTarget)
    // Call the render method
    this.modalRender()
  }

  componentWillUnmount() {
    // Removes everything inside the modal
    ReactDOM.umountComponentAtNode(this.modalTarget)
    // Removes the modal from the body
    document.body.removeChild(this.modalTarget)
  }

  modalRender() {
    // ReactDOM.render is called in the exact same way we call it for the app
    // but this time there is no need to get the element by ID since we already
    // have the element (we just created it)
    ReactDOM.render(
      // this.props.children references all the components passed into this component
      // basically everything inside our component.
      <Provider store={store}>
        <div>{this.props.children}</div>
      </Provider>,
      this.modalTarget,
    )
  }

  render() {
    // Basically return nothing, empty
    return <noscript />
  }
}

export default Modal
