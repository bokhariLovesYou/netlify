import React from "react"

const TitleAndDesc = props => (
  <div className="container">
    <div className="content small-width-content text-md-center mb-md-4 mb-lg-0">
      <h2>{props.heading}</h2>
      <p>{props.paragraph}</p>
    </div>
  </div>
)

export default TitleAndDesc
