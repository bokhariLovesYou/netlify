import React from "react"

const ContentWithCTA = props => (
  <div className="container">
    <div className="content content-box">
      <h1 className="inverse">{props.heading}</h1>
      <p>{props.paragraph}</p>
      <a onClick={() => props.buttonClick("button")} href={props.buttonURL}>
        <button type="button" className="global-button">{props.buttonText}</button>
      </a>
    </div>
  </div>
)

export default ContentWithCTA
