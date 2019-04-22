import React, {Component} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
// Icons
import IconOneSVG from "../images/icon-one.svg"
import IconTwoSVG from "../images/icon-two.svg"
import IconThreeSVG from "../images/icon-three.svg"
import IconFourSVG from "../images/icon-four.svg"
// Components
import HeroComponent from "../components/hero-component.js"
import SectionTwo from "../components/section-two-component.js"
import SectionThree from "../components/section-three-component.js"
import SectionFour from "../components/section-four-components.js"
import SectionFive from "../components/section-five-component.js"
import SectionSix from "../components/section-six-component.js"
import SectionSeven from "../components/section-seven-component.js"
// GraphQL
import { graphql } from 'gatsby'
// GA Tracking
import ReactGA from 'react-ga'

class IndexPage extends Component {

  state = { 
    columnObj: [
      {
        headingOne: 'Faster sites & applications',
        paragraphOne: 'Global distribution with automated prerendering makes for blazing fast site delivery. Smashing Magazine moved to Netlify for a 10x boost in performance.',
        svgOne: <IconOneSVG />,
        headingTwo: 'Faster sites & applications',
        paragraphTwo: 'Global distribution with automated prerendering makes for blazing fast site delivery. Smashing Magazine moved to Netlify for a 10x boost in performance.',
        svgTwo: <IconTwoSVG />
      },
      {
        headingOne: 'Faster sites & applications',
        paragraphOne: 'Global distribution with automated prerendering makes for blazing fast site delivery. Smashing Magazine moved to Netlify for a 10x boost in performance.',
        svgOne: <IconThreeSVG />,
        headingTwo: 'Faster sites & applications',
        paragraphTwo: 'Global distribution with automated prerendering makes for blazing fast site delivery. Smashing Magazine moved to Netlify for a 10x boost in performance.',
        svgTwo: <IconFourSVG />
      }
    ]  
  }

loggerHeroCTA = () => {
  ReactGA.event({
      category: 'button',
      action: 'click'
    })
}

 loggerDocsCTA = () => {
  ReactGA.event({
      category: 'docsButton',
      action: 'click'
    })
 } 

 loggerSubFooterCTA = () => {
  ReactGA.event({
      category: 'subFooterButton',
      action: 'click'
    })
 } 

  render () {

  if (typeof window !== 'undefined') {
    window.onscroll = function(ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            ReactGA.event({
                category: 'pageScrolled',
                action: 'scrolled'
              })
        }
    };
  }

  const data = this.props.data.allDataYaml.edges[0].node;   
  return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <main id="analytics-page">
          <HeroComponent
            heading={data.hero_heading}
            paragraph={data.hero_paragraph}
            buttonText={data.hero_button_text}
            buttonURL={data.hero_button_url}
            buttonClick={this.loggerHeroCTA}
          />
          <SectionTwo 
            heading={data.section_two_heading}
            subTitle={data.section_two_subtitle}
            paragraph={data.section_two_paragraph}
          />
          <SectionThree
            heading='The benefits of Netlify Analytics' 
            columnObj={this.state.columnObj}
          />
          <section className="curvy-parent"> 
            <SectionFour 
              childOneHeadingBefore={data.section_four_child_one_heading_before}
              childOneHeadingAfter={data.section_four_child_one_heading_after}
              childOneParagraph={data.section_four_child_one_paragraph}
              childOneCtaURL={data.section_four_child_one_cta_url}
              childOneCtaTEXT={data.section_four_child_one_cta_text}
              childTwoTestimonialText={data.section_four_child_two_testimonial}
              childTwoTestimonialImage={data.section_four_child_two_testimonial_image}
              childTwoTestimonialName={data.section_four_child_two_testimonial_name}
              childTwoTestimonialTwitterHandle={'@kentcdodds'}
              childThreeHeading={data.section_four_child_three_heading}
              childThreeImage={data.section_four_child_three_image}
              articleObj={data.articleObj}
              docsClick={this.loggerDocsCTA}
            />
            <SectionFive
              headingBefore={data.section_five_heading_before}
              headingAfter={data.section_five_heading_after}
              subTitle={data.section_five_subheading}
              paragraph={data.section_five_paragraph}
              image={data.section_five_image}
             />
            <SectionSix 
              heading={data.section_six_heading}
              paragraph={data.section_six_paragraph}
            />
            <SectionSeven
              subFooterCTA={this.loggerSubFooterCTA}
            />
          </section>
        </main>
      </Layout>
    );
  }
}

export const query = graphql`
    query {
      allDataYaml {
        edges {
          node {
            hero_heading
            hero_paragraph
            hero_button_text
            hero_button_url
            section_two_heading
            section_two_subtitle
            section_two_paragraph
            section_four_child_one_heading_before
            section_four_child_one_heading_after
            section_four_child_one_paragraph
            section_four_child_one_cta_url
            section_four_child_one_cta_text
            section_four_child_two_testimonial
            section_four_child_two_testimonial_image
            section_four_child_two_testimonial_name
            section_four_child_three_image
            section_four_child_three_heading
            section_five_heading_before
            section_five_heading_after
            section_five_subheading
            section_five_paragraph
            section_five_image
            section_six_heading
            section_six_paragraph
            articleObj {
              heading
              desc
            }
            columnObj {
              headingOne
              paragraphOne
              svgOne
              headingTwo
              paragraphTwo
              svgTwo
            }
          }
        }
      }
    }
  `


export default IndexPage
