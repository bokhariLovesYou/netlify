import React, { Component } from "react"
import IconOneSVG from "../images/icon-one.svg"
import IconTwoSVG from "../images/icon-two.svg"
import IconThreeSVG from "../images/icon-three.svg"
import IconFourSVG from "../images/icon-four.svg"

class RepeatedInverseColumns extends Component {
  render() {
    
    return (
    <div>  
      <div className="p">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="content-box text-center">
                <div className="icon-svg-wrapper"><IconOneSVG /></div>
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
                <div className="icon-svg-wrapper"><IconTwoSVG /></div>
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

      <div className="p">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="content-box text-center">
                <div className="icon-svg-wrapper"><IconThreeSVG /></div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="content-box">
                <h3>{this.props.headingThree}</h3>
                <p>{this.props.paragraphThree}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 order-md-1">
              <div className="content-box text-center">
                <div className="icon-svg-wrapper"><IconFourSVG /></div>
              </div>
            </div>
            <div className="col-md-8 order-md-0">
              <div className="content-box">
                <h3>{this.props.headingFour}</h3>
                <p>{this.props.paragraphFour}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default RepeatedInverseColumns
