import React, { Component } from 'react'
import Counter from './Counter'

class App extends Component {
  state = {
    initialValues: {
      one: 1,
      two: 2,
      three: 3
    }
  }

  render() {
    const { initialValues } = this.state
    return (
      <div style={{ textAlign: 'center' }}>
        <h1 className="slds-text-heading--large slds-p-top_large">
          This is an Electron Desktop App with an<br/>
          Embedded React counter component<br/>
          using Salesforce Lightning Design System<br/>
        </h1>
        <div className="slds-p-top_large"></div>
        <Counter initialValue={initialValues.one} />
        <Counter initialValue={initialValues.two} />
        <Counter initialValue={initialValues.three} />
      </div>
    )
  }
}

export default App