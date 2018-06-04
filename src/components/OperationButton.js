import React from 'react'

const OperationButton = ({
  onClickEvent,
  label
}) => (
  <div>
    <button onClick={onClickEvent}
            className="slds-button slds-button_brand"
            style={{
              width: 150,
              height: 50,
              margin: 5
            }}>
      {label}
    </button>
  </div>
)

export default OperationButton