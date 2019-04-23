import React from "react"

const SimilarProducts = props => (
	<div className="container">
		<div className="row">  
		  <div className="col-lg-4 mb-3">
		    <div className="content content-box">
		      <div className="custom-card card--dev">
		        <h3 className="inverse">Netlify Dev</h3>
		        <p>Run our entire platform right on your laptop. Preview it all — site generation, functions, and edge logic.</p>
		        <a className="cta-link" href="https://www.netlify.com/products/dev/">Learn More</a>
		      </div>
		    </div>
		  </div>
		  <div className="col-lg-4 mb-3 ">
		    <div className="content content-box">
		      <div className="custom-card card--build">
		        <h3>Netlify Build</h3>
		        <p>The Git workflow for web development. Build, deploy, and manage modern web projects.</p>
		        <a className="cta-link" href="https://www.netlify.com/products/build/">Learn More</a>
		      </div>
		    </div>
		  </div>
		  <div className="col-lg-4 mb-3">
		    <div className="content content-box">
		      <div className="custom-card card--edge">
		        <h3>Netlify Edge</h3>
		        <p>A new type of application delivery network custom designed for fast, responsive sites and modern workflows.</p>
		        <a className="cta-link" href="https://www.netlify.com/products/edge/">Learn More</a>
		      </div>
		    </div>
		  </div>
		</div>
	</div>
)

export default SimilarProducts
