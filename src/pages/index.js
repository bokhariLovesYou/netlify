import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import {
  Section,
  CurvyLargeBanner,
  ContentWithCTA,
  CenteredContent,
  TightHeading,
  SolidCurvySVGWrapped,
  Wrap,
  ContentWithTextLink,
  RepeatedInverseColumns,
  TestimonialCard,
  TwoColumn,
  RepeatedArticle,
  TwoColumnImageDrop,
  TitleAndDesc,
  SimilarProducts,
  CenteredCallOut,
} from '../components';
// GraphQL
import { graphql } from "gatsby"
// GA Tracking
import ReactGA from "react-ga"

class IndexPage extends Component {

  logger = elem => {
    ReactGA.event({
      category: elem,
      action: "click",
    })
  }

  render() {
    let counter = 0;
    if (typeof window !== "undefined") {
      window.onscroll = ev => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
          if (counter < 1) {
            ReactGA.event({
              category: "pageScrolled",
              action: "scrolled",
            })
            counter++;
          }
        }
      }
    }

    const data = this.props.data.allDataYaml.edges[0].node
    return (
      <Layout>
        <SEO
          title="Netlify Analytics"
          description="Run your entire platform right on your laptop. Preview it all – site generation, analytics, functions, and edge logic."
          keywords={[`Netlify`, `application`, `data`]}
        />
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

          <Section
            count="two"
            extraClass="content-section section--after-curve"
          >
            <CenteredContent
              heading={data.section_two_heading}
              subTitle={data.section_two_subtitle}
              paragraph={data.section_two_paragraph}
            />
          </Section>

          <Section count="three" extraClass="content-section">
            <TightHeading heading="The benefits of Netlify Analytics" />
              <RepeatedInverseColumns
                headingOne={data.columnObj[0].headingOne}
                paragraphOne={data.columnObj[0].paragraphOne}
                headingTwo={data.columnObj[0].headingTwo}
                paragraphTwo={data.columnObj[0].paragraphTwo}
                headingThree={data.columnObj[0].headingThree}
                paragraphThree={data.columnObj[0].paragraphThree}
                headingFour={data.columnObj[0].headingFour}
                paragraphFour={data.columnObj[0].paragraphFour}
              />
          </Section>

          <section className="curvy-parent">
            <Section count="four" extraClass=" ">
              <SolidCurvySVGWrapped />
              <Wrap>
                <ContentWithTextLink
                  childOneHeadingBefore={
                    data.section_four_child_one_heading_before
                  }
                  childOneHeadingAfter={
                    data.section_four_child_one_heading_after
                  }
                  childOneParagraph={data.section_four_child_one_paragraph}
                  childOneCtaURL={data.section_four_child_one_cta_url}
                  childOneCtaTEXT={data.section_four_child_one_cta_text}
                  docsClick={this.logger}
                />
                <TestimonialCard
                  childTwoTestimonialText={
                    data.section_four_child_two_testimonial
                  }
                  childTwoTestimonialImage={
                    data.section_four_child_two_testimonial_image
                  }
                  childTwoTestimonialName={
                    data.section_four_child_two_testimonial_name
                  }
                  childTwoTestimonialTwitterHandle={"@kentcdodds"}
                />
                <TwoColumn
                  childThreeImage={data.section_four_child_three_image}
                  childThreeHeading={data.section_four_child_three_heading}
                >
                  {data.articleObj.map((elem, index) => (
                    <RepeatedArticle
                      key={index}
                      heading={elem.heading}
                      desc={elem.desc}
                    />
                  ))}
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
    )
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
            headingTwo
            paragraphTwo
            headingThree
            paragraphThree
            headingFour
            paragraphFour
          }
          global_cta_heading
          global_cta_paragraph
        }
      }
    }
  }
`

export default IndexPage
