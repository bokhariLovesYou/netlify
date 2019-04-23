import React from "react"

const CenteredContent = props => (
  <div className="container">
    <div className="content content-box">
      <h2>{props.heading}</h2>
      <p className="sub-title">{props.subtitle}</p>
      <p>{props.paragraph}</p>
    </div>
  </div>
)

export default CenteredContent
