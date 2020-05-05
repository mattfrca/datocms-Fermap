import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const ConditionsUtilisation = ({data: { conditions }}) => {
  return (
  <Layout>
    <article className="sheet conditions__utilisation">
      <div className="sheet__inner">
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: conditions.conditionsDUtilisationNode.childMarkdownRemark.html,
          }}
        />
      </div>
    </article>
  </Layout>
)}

export default ConditionsUtilisation

export const query = graphql`
  query conditionsQuery {
    conditions: datoCmsConditionsDUtilisation {
        conditionsDUtilisationNode {
          childMarkdownRemark {
            html
          }
        }
      }
  }
`
