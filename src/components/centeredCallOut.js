import React from "react"

const CenteredCallOut = props => (
  <div className="container">
    <div className="content content-box">
      <h2 className="inverse">{props.heading}</h2>
      <p>{props.paragraph}</p>
      <a
        onClick={() => props.subFooterCTA.buttonClick("subFooterButton")}
        href="#"
      >
        <button type="button" className="global-button">Get started for free</button>
      </a>
    </div>
  </div>
)

export default CenteredCallOut
