import React, { useEffect } from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Swiper from 'swiper';
import Layout from "../components/layout"
import 'swiper/css/swiper.css'

const IndexPage = ({ data }) => {

  useEffect( () => {
    new Swiper('.swiper-container', {
      effect: 'coverflow',
      spaceBetween: 20,
      autoplay: {
        delay: 5000,
      },
      grabCursor: true,
      longSwipes: true,
      longSwipesRatio: 0.10,
      longSwipesMs: 50,
      shortSwipes: false,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
      rotate: 40,
      stretch: 0,
      depth: 800,
      modifier: 1,
      slideShadows : true,
      },
      pagination: {
      el: '.swiper-pagination',
      },
      loop: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },})
  }, []);
return (
  <Layout>
    <div className="showcase">
      {data.allDatoCmsWork.edges.filter(edge => edge.node.locale==='fr' && edge.node.affichage).map(({ node: work }) => (
        <div key={work.id} className="showcase__item">
          <Link to={`/works/${work.slug}`}>
            <figure className="card">
              <div className="card__image">
                <Img fluid={work.coverImage.fluid} alt={work.coverImage.alt} />
              </div>
              <figcaption className="card__caption">
                <h6 className="card__title">
                  {work.title}
                </h6>
                <div className="card__description">
                  <p>{work.excerpt}</p>
                </div>
              </figcaption>
            </figure>
          </Link>
        </div>
      ))}
    </div>
    <div className="swiper-container" style={{padding: '1em 0 2.5em', backgroundColor: '#1e2936', marginTop: '1em'}}>
      <h2 className="title">Quelques réalisations</h2>
      <div className="swiper-wrapper">
        {data.allDatoCmsHome.edges.filter(edge => edge.node.locale==='fr')[0].node.homePictures.map((pictures, index) => (
            <div key={index} className="swiper-slide"><Img fluid={pictures.fluid} imgStyle={{height: "auto", width: 'auto'}} alt={pictures.alt} /></div>
          ))}
      </div>
      <div className="swiper-pagination" style={{color: "#fff"}}></div>
      <div className="swiper-button-prev" style={{color: "#fff"}}></div>
      <div className="swiper-button-next" style={{color: "#fff"}}></div>
    </div>
    <div className="container-logos">
      <div className="logo_fabricant_francais">
        <Img fluid={data.allDatoCmsHome.edges.filter(edge => edge.node.locale==='fr')[0].node.logoFermapFabricantFrancais.fluid} />
      </div>
      <div className="logo_schuco">
        <Img fluid={data.allDatoCmsHome.edges.filter(edge => edge.node.locale==='fr')[0].node.logoSchucoPartner.fluid} />
      </div>
    </div>
  </Layout>
)}
export default IndexPage

export const query = graphql`
  query IndexQuery {
    allDatoCmsHome {
      edges {
        node {
          logoFermapFabricantFrancais {
            fluid(maxWidth: 400, imgixParams: { fm: "jpg", auto: "compress"}) {
              ...GatsbyDatoCmsSizes
            }
          }
          logoSchucoPartner {
            fluid(maxWidth: 400, imgixParams: { fm: "jpg", auto: "compress"}) {
              ...GatsbyDatoCmsSizes
            }
          }
          locale
          homePictures {
            alt
            fluid(maxWidth: 1000, imgixParams: { fm: "jpg", auto: "compress"}) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
    allDatoCmsWork(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          title
          affichage
          slug
          locale
          excerpt
          coverImage {
            alt
            fluid(maxWidth: 450, imgixParams: { fm: "png", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`
