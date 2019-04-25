import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="four-oh-four">
	    <div className="container text-center pt-5 pb-5 inverse">
		    <h1 className="inverse">NOT FOUND</h1>
		    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
	    </div>
    </div>
  </Layout>
)

export default NotFoundPage
