import React from "react"

class TwoColumn extends React.Component {
  render () {
    const { children } = this.props; 
    return (
	    <div className="child-three content-box content inverse">
	      <div className="heading-box text-center">
	      <h2 className="inverse text-left text-md-center">{this.props.childThreeHeading}</h2>
	      </div>
	      <div className="row">
	        <div className="col-lg-6 order-lg-2">
	          <div className="image-box">
	            <img alt="netlify-analytics-dashboard" src={this.props.childThreeImage} />
	          </div>
	        </div>
	        <div className="col-lg-6 order-lg-1">
	          <div className="content-box">
	          	{children}
	          </div>
	        </div>
	      </div>
	    </div>
    )
  }
}

export default TwoColumn
