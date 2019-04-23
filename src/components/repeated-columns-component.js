import React, { Component } from "react"

class RepeatedInverseColumns extends Component {
  render() {
    let index = this.props.index

    return (
      <div className="p">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="content-box text-center">
                <div class="icon-svg-wrapper">{this.props.svgOne}</div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="content-box">
                <h3>{this.props.headingOne}</h3>
                <p>{this.props.paragraphOne}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 order-md-1">
              <div className="content-box text-center">
                <div class="icon-svg-wrapper">{this.props.svgTwo}</div>
              </div>
            </div>
            <div className="col-md-8 order-md-0">
              <div className="content-box">
                <h3>{this.props.headingTwo}</h3>
                <p>{this.props.paragraphTwo}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RepeatedInverseColumns
