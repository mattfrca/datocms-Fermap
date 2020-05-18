import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import Layout from "../components/layout"

const Offers = ({ data: { offers } }) => {
    const text = offers.offreNode.childMarkdownRemark.html;
    let arrayOffers = [];
    let pos = text.indexOf('<h2>');
    while ( pos != -1 ) {
        arrayOffers.push(text.substring(pos, text.indexOf('<h2>', pos + 1) === -1? text.length : text.indexOf('<h2>', pos + 1)))
        pos = text.indexOf('<h2>', pos + 1);
    }

    return(
    <Layout>
        <article className="sheet offers">
        <HelmetDatoCms seo={offers.seoMetaTags} />
        <div className="sheet__inner">
            <h1 className="sheet__title">Nos offres d'emplois</h1>
            {offers.postesDisponible ? <p id="offer__infos">Pour postuler, veuillez nous contacter via <a href="mailto:info@fermap.fr">info@fermap.fr</a></p> : ''}
            {offers.postesDisponible ?
            arrayOffers.map(offer => 
                <div
                    className="card__offers"
                    dangerouslySetInnerHTML={{
                        __html: offer,
                    }}
                />)
                
                : 
                <div
                className="no__offer"
                dangerouslySetInnerHTML={{
                    __html: offers.texteSansOffreNode.childMarkdownRemark.html,
                }}
                />
                }
            </div>
        </article>
    </Layout>
)}

export default Offers

export const query = graphql`
  query OffersQuery {
    offers: datoCmsOffreEmploi {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      postesDisponible
      offreNode {
        childMarkdownRemark {
          html
        }
      }
      texteSansOffreNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
