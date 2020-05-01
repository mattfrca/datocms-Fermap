import React, { useEffect } from 'react'
import Slider from 'react-slick'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
import { graphql } from 'gatsby'
import Layout from "../components/layout"

export default ({ data }) => {
  useEffect(() => {
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
  return(
  <Layout>
    <article className="sheet">
      <HelmetDatoCms seo={data.datoCmsWork.seoMetaTags} />
      <div className="sheet__inner">
        <h1 className="sheet__title">{data.datoCmsWork.title}</h1>
        <p className="sheet__lead">{data.datoCmsWork.excerpt}</p>
        <div className="swiper-container sheet__slider">
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
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsWork.descriptionNode.childMarkdownRemark.html,
          }}
        />
      </div>
    </article>
  </Layout>
)}

export const query = graphql`
  query WorkQuery($slug: String!) {
    datoCmsWork(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      excerpt
      
      descriptionNode {
        childMarkdownRemark {
          html
        }
      }
      coverImage {
        url
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`
// gallery {
//         fluid(maxWidth: 200, imgixParams: { fm: "jpg", auto: "compress" }) {
//           src
//         }
//       }