import React from "react"

const TestimonialCard = props => (

	<div className="child-two testimonial-parent content-box content inverse">
	  <div className="testimonial-block">
	    <div className="">
	      <p>“{props.childTwoTestimonialText}”</p>
	      <div className="testimonial-row">
	        <div className="testimonial-image">
	          <div className="content">
	            <img alt="netlify-analytics-dashboard" src={props.childTwoTestimonialImage} />
	          </div>
	        </div>
	        <div className="testimonial-description">
	          <div class="content">
	            <h6>{props.childTwoTestimonialName},</h6>
	            <p>{props.childTwoTestimonialTwitterHandle}</p>
	          </div>
	        </div>
	      </div>
	    </div>
	  </div>
	</div>

)

export default TestimonialCard
