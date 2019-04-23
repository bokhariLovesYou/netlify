import React from "react"

const TwoColumnImageDrop = props => (
  <div className="container">
    <div className="row">
      <div className="col-lg-6 order-lg-2">
        <div className="content content-box">
          <h2 className="inverse">{props.headingBefore}<br />{props.headingAfter}</h2>
          <p>{props.subTitle}
          <br /><br />
          {props.paragraph}</p>
        </div>
      </div>
      <div className="col-lg-6 order-lg-1">
        <div className="image-box text-md-center">
          <img alt="netlify-analytics" src={props.image} />
        </div>
      </div>
    </div>
  </div>
)

export default TwoColumnImageDrop
