import React, { Component } from 'react'
import OperationButton from './OperationButton'

class Counter extends Component {
  state = {
    value: 0
  }

  _onIncrement() {
    this.setState({
      value: this.state.value + 1
    })
  }

  _onDecrement() {
    this.setState({
      value: this.state.value - 1
    })
  }

  componentDidMount() {
    this.setState({
      value: this.props.initialValue
    })
  }

  render() {
    const { value } = this.state
    
    return (
      <div style={{ display: 'inline-block' }}>
        <OperationButton onClickEvent={this._onIncrement.bind(this)} label="Increment" />
        <h1 className="slds-text-heading--large">{value}</h1>
        <OperationButton onClickEvent={this._onDecrement.bind(this)} label="Decrement" />
      </div>
    )
  }
}

export default Counter