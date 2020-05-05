import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Layout from "../components/layout"

const MentionsLegales = ({data: { legal }}) => {
  return (
  <Layout>
    <article className="sheet legals">
      <HelmetDatoCms seo={legal.seoMetaTags} />
      <div className="sheet__inner">
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: legal.mentionsLegalesNode.childMarkdownRemark.html,
          }}
        />
      </div>
    </article>
  </Layout>
)}

export default MentionsLegales

export const query = graphql`
  query legalQuery {
    legal: datoCmsMentionsLegale {
      mentionsLegalesNode {
        childMarkdownRemark {
          html
        }
      }
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`
