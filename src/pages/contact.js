import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Layout from "../components/layout"

const Contact = ({data: { contact }}) => {
  return (
  <Layout>
    {/* <article className="sheet legals">
      <HelmetDatoCms seo={legal.seoMetaTags} />
      <div className="sheet__inner">
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: legal.ContactNode.childMarkdownRemark.html,
          }}
        />
      </div>
    </article> */}
  </Layout>
)}

export default Contact

export const query = graphql`
  query contactQuery {
    contact: datoCmsMentionsLegale {
      mentionsLegalesNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
