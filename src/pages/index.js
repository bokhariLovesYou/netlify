import React, {Component} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
// Icons
import IconOneSVG from "../images/icon-one.svg"
import IconTwoSVG from "../images/icon-two.svg"
import IconThreeSVG from "../images/icon-three.svg"
import IconFourSVG from "../images/icon-four.svg"
// Components
import Section from "../components/section.js"
import CurvyLargeBanner from "../components/curvyLargeBanner.js"
import ContentWithCTA from "../components/contentWithCTA.js"
import CenteredContent from "../components/CenteredContent.js"
import RepeatedInverseColumns from '../components/repeated-columns-component.js'
import TightHeading from '../components/tight-heading.js'
import SolidCurvySVGWrapped from '../components/solidCurvySVGWrapped.js'
import Wrap from '../components/wrap.js'
import ContentWithTextLink from '../components/contentWithTextLink.js'
import TestimonialCard from '../components/testimonialCard.js'
import TwoColumn from '../components/twoColumn.js'
import RepeatedArticle from '../components/repeated-article.js'
import TwoColumnImageDrop from '../components/twoColumnImageDrop.js'
import TitleAndDesc from '../components/titleAndDesc.js'
import SimilarProducts from '../components/similarProducts.js'
import CenteredCallOut from '../components/centeredCallOut.js'
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

  logger = (elem) => {
    ReactGA.event({
        category: elem,
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
        <SEO title="Netlify Analytics | Netlify" description="Run your entire platform right on your laptop. Preview it all – site generation, analytics, functions, and edge logic." keywords={[`Netlify`, `application`, `data`]} />
        <main id="analytics-page">
          <Section count="one" extraClass="inverse">
            <CurvyLargeBanner />
            <ContentWithCTA 
              heading={data.hero_heading}
              paragraph={data.hero_paragraph}
              buttonText={data.hero_button_text}
              buttonURL={data.hero_button_url}
              buttonClick={this.logger}
            />
          </Section>

          <Section count="two" extraClass="content-section section--after-curve">
            <CenteredContent 
              heading={data.section_two_heading}
              subTitle={data.section_two_subtitle}
              paragraph={data.section_two_paragraph}
            />
          </Section>

          <Section count="three" extraClass="content-section">
            <TightHeading heading="The benefits of Netlify Analytics"/>
            {this.state.columnObj.map( (elem, index) => 
              <RepeatedInverseColumns 
                key={index}
                headingOne={elem.headingOne}
                paragraphOne={elem.paragraphOne}
                svgOne={elem.svgOne}
                headingTwo={elem.headingTwo}
                paragraphTwo={elem.paragraphTwo}
                svgTwo={elem.svgTwo}
              />     
            )} 
          </Section>

          <section className="curvy-parent"> 
            <Section count="four" extraClass=" ">
              <SolidCurvySVGWrapped />
              <Wrap>
                <ContentWithTextLink 
                  childOneHeadingBefore={data.section_four_child_one_heading_before}
                  childOneHeadingAfter={data.section_four_child_one_heading_after}
                  childOneParagraph={data.section_four_child_one_paragraph}
                  childOneCtaURL={data.section_four_child_one_cta_url}
                  childOneCtaTEXT={data.section_four_child_one_cta_text}
                  docsClick={this.logger}
                />
                <TestimonialCard 
                  childTwoTestimonialText={data.section_four_child_two_testimonial}
                  childTwoTestimonialImage={data.section_four_child_two_testimonial_image}
                  childTwoTestimonialName={data.section_four_child_two_testimonial_name}
                  childTwoTestimonialTwitterHandle={'@kentcdodds'}
                />
                <TwoColumn 
                  childThreeImage={data.section_four_child_three_image} 
                  childThreeHeading={data.section_four_child_three_heading}>
                  {data.articleObj.map( (elem, index) => 
                    <RepeatedArticle
                      key={index}
                      heading={elem.heading}
                      desc={elem.desc}
                    />
                  )}
                </TwoColumn>
              </Wrap>
            </Section>

            <Section count="five" extraClass="inverse">
              <TwoColumnImageDrop 
                headingBefore={data.section_five_heading_before}
                headingAfter={data.section_five_heading_after}
                subTitle={data.section_five_subheading}
                paragraph={data.section_five_paragraph}
                image={data.section_five_image}
              />
            </Section>

            <Section count="six" extraClass=" ">
              <TitleAndDesc 
                heading={data.section_six_heading}
                paragraph={data.section_six_paragraph}
              />
              <SimilarProducts />
            </Section>

            <Section count="seven" extraClass="section-cta inverse">
              <CenteredCallOut 
                subFooterCTA={this.logger}
                heading={data.global_cta_heading}
                paragraph={data.global_cta_paragraph}
              />
            </Section>

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
            global_cta_heading
            global_cta_paragraph
          }
        }
      }
    }
  `


export default IndexPage
