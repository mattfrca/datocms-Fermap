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
      grabCursor: true,
      longSwipes: true,
      longSwipesRatio: 0.15,
      longSwipesMs: 100,
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
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },})
  }, [])
return (
  <Layout>
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">Slide 1</div>
        <div className="swiper-slide">Slide 2</div>
        <div className="swiper-slide">Slide 3</div>
        <div className="swiper-slide">Slide 4</div>
        <div className="swiper-slide">Slide 5</div>
        <div className="swiper-slide">Slide 6</div>
        <div className="swiper-slide">Slide 7</div>
        <div className="swiper-slide">Slide 8</div>
        <div className="swiper-slide">Slide 9</div>
        <div className="swiper-slide">Slide 10</div>
      </div>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
    <div className="showcase">
      {data.allDatoCmsWork.edges.filter(edge => edge.node.locale==='fr' && edge.node.affichage).map(({ node: work }) => (
        <div key={work.id} className="showcase__item">
          <Link to={`/works/${work.slug}`}>
            <figure className="card">
              <Link to={`/works/${work.slug}`} className="card__image">
                <Img fluid={work.coverImage.fluid} />
              </Link>
              <figcaption className="card__caption">
                <h6 className="card__title">
                  <Link to={`/works/${work.slug}`}>{work.title}</Link>
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
  </Layout>
)}
export default IndexPage

export const query = graphql`
  query IndexQuery {
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
            fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`
