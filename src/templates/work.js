import React, { useEffect } from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
import { Link, graphql } from 'gatsby'
import Layout from "../components/layout"

export default ({ data }) => {
  
let htmlArray = [
  data.datoCmsWork.description1Node.childMarkdownRemark.html,
  data.datoCmsWork.description2Node.childMarkdownRemark.html,
  data.datoCmsWork.description3Node.childMarkdownRemark.html,
  data.datoCmsWork.description4Node.childMarkdownRemark.html,
  data.datoCmsWork.description5Node.childMarkdownRemark.html,
  data.datoCmsWork.description6Node.childMarkdownRemark.html
];
let picturesArray= [
  data.datoCmsWork.image1,
  data.datoCmsWork.image2,
  data.datoCmsWork.image3,
  data.datoCmsWork.image4,
  data.datoCmsWork.image5,
  data.datoCmsWork.image6,
]
const htmlTitleArray = [...htmlArray.map((el) => {
  let firstAppearence = el.indexOf('<p>')
  return (
    el.substr(0, firstAppearence)
    )
  })]
const htmlTextArray = [...htmlArray.map((el) => {
  let firstAppearence = el.indexOf('<p>')
  return (
    el.substr( firstAppearence)
    )
  })]
    
let indexSlide = 0;
let descriptionCurrent = htmlTextArray[indexSlide];
    
useEffect(() => {
  let descriptionElement = document.getElementById('descriptionCurrent')
  
  let mySwiper = new Swiper('.swiper-container', {
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
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },})
mySwiper.on('slideChange', () => {
  indexSlide = mySwiper.realIndex % 6
  descriptionCurrent = htmlTextArray[indexSlide]
  descriptionElement.innerHTML = descriptionCurrent;
})
}, [])

  return(
  <Layout>
    <article className="sheet">
      <HelmetDatoCms seo={data.datoCmsWork.seoMetaTags} />
      <div className="sheet__inner">
        <h1 className="sheet__title">{data.datoCmsWork.title}</h1>
        <p className="sheet__lead">{data.datoCmsWork.excerpt}</p>
        {data.datoCmsWork.multiplesPages ? 
          <div className="swiper-container sheet__slider">
            <div className="swiper-wrapper">
              {[Array(data.datoCmsWork.nombreDeSlides).fill(1).map((x,index) => {
                return (
                <div className="swiper-slide" key={index}>
                  <Img fluid={picturesArray[index].fluid} alt={picturesArray[index].alt} style={{height: '100%', width: 'auto',minWidth:'300px', margin: '0 auto'}} imgStyle={{height: '100%'}} />
                  <div
                    className="sheet__body"
                    dangerouslySetInnerHTML={{
                      __html: htmlTitleArray[index]
                    }}
                  />
                </div>
              )})]
              }
            </div>
            <div className="swiper-button-prev" style={{color: "#000"}}></div>
            <div className="swiper-button-next" style={{color: "#000"}}></div>
          </div> :
          <div className="sheet__gallery">	
            <Img fluid={data.datoCmsWork.image1.fluid} alt={data.datoCmsWork.image1.alt} style={{width: '90%', maxWidth: '1000px', margin: '0 auto 1em'}} />	
          </div>}
          <div className="view-products">
            <Link to="/formulaire-documentation">Voir la documentation complète de nos gammes</Link>
          </div>
          <div
            id="descriptionCurrent"
            className="sheet__body"
            dangerouslySetInnerHTML={{
              __html: descriptionCurrent ? descriptionCurrent : data.datoCmsWork.descriptionNode.childMarkdownRemark.html,
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
      multiplesPages
      nombreDeSlides
      descriptionNode {
        childMarkdownRemark {
          html
        }
      }
      description1Node {
        childMarkdownRemark {
          html
        }
      }
      description2Node {
        childMarkdownRemark {
          html
        }
      }
      description3Node {
        childMarkdownRemark {
          html
        }
      }
      description4Node {
        childMarkdownRemark {
          html
        }
      }
      description5Node {
        childMarkdownRemark {
          html
        }
      }
      description6Node {
        childMarkdownRemark {
          html
        }
      }
      image1 {
        alt
        url
        fluid(maxWidth: 400, maxHeight: 400, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      image2 {
        alt
        url
        fluid(maxWidth: 400, maxHeight: 400, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      image3 {
        alt
        url
        fluid(maxWidth: 400, maxHeight: 400, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      image4 {
        alt
        url
        fluid(maxWidth: 400, maxHeight: 400, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      image5 {
        alt
        url
        fluid(maxWidth: 400, maxHeight: 400, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      image6 {
        alt
        url
        fluid(maxWidth: 400, maxHeight: 400, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      coverImage {
        alt
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