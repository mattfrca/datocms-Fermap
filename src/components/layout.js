/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/

import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";

import backgroundImageSun from '../images/Soleil_FERMAP_web_200.png';
import backgroundImageEarth from '../images/Planete_FERMAP_web_200.png';
import backgroundImageStars from '../images/Sky_200.png';


import "../styles/index.sass";

const TemplateWrapper = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          datoCmsSite {
            globalSeo {
              siteName
            }
            faviconMetaTags {
              ...GatsbyDatoCmsFaviconMetaTags
            }
          }
          datoCmsHome {
            seoMetaTags {
              ...GatsbyDatoCmsSeoMetaTags
            }
            introTextNode {
              childMarkdownRemark {
                html
              }
            }
            copyright
          }
          allDatoCmsSocialProfile(sort: { fields: [position], order: ASC }) {
            edges {
              node {
                profileType
                url
                locale
              }
            }
          }
        }
      `}
      render={data => (
        <div className={`container ${showMenu ? "is-open" : ""}`}>
          <HelmetDatoCms
            favicon={data.datoCmsSite.faviconMetaTags}
            seo={data.datoCmsHome.seoMetaTags}
          />
          <div className="container__sidebar">
            <div className="sun-bg sidebar__background" style={{backgroundImage: `url(${backgroundImageSun})`}}></div>
            <div className="stars-bg sidebar__background" style={{backgroundImage: `url(${backgroundImageStars})`}}></div>
            <div className="earth-bg sidebar__background" style={{backgroundImage: `url(${backgroundImageEarth})`}}></div>
            <div className="sidebar">
              <h4 className="sidebar__title">
                <Link to="/">{data.datoCmsSite.globalSeo.siteName.substr(0,6)}</Link>
                <p>{data.datoCmsSite.globalSeo.siteName.substr(9)}</p>
              </h4>
              <div
                className="sidebar__intro"
                dangerouslySetInnerHTML={{
                  __html:
                    data.datoCmsHome.introTextNode.childMarkdownRemark.html
                }}
              />
              <ul className="sidebar__menu">
                <li>
                  <Link to="/">Accueil</Link>
                </li>
                <li>
                  <Link to="/about">À propos</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to ="/offre-emploi">Offres d'emplois</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="container__body">
            <div className="container__mobile-header">
              <div className="sun-bg sidebar__background" style={{backgroundImage: `url(${backgroundImageSun})`}}></div>
              <div className="stars-bg sidebar__background" style={{backgroundImage: `url(${backgroundImageStars})`}}></div>
              <div className="earth-bg sidebar__background" style={{backgroundImage: `url(${backgroundImageEarth})`}}></div>
              <div className="mobile-header">
                <div className="mobile-header__menu">
                  <button
                    onClick={e => {
                      e.preventDefault();
                      setShowMenu(!showMenu);
                    }}
                  />
                </div>
                <div className="mobile-header__logo">
                  <Link to="/">{data.datoCmsSite.globalSeo.siteName.substr(0,6)}</Link>
                  <p>{data.datoCmsSite.globalSeo.siteName.substr(9)}</p>
                </div>
              </div>
            </div>
            {children}
            <footer>
              <p className="sidebar__social">
                {data.allDatoCmsSocialProfile.edges.filter(node => node.node.locale==='fr').map(({ node: profile }) => (
                  <a
                    key={profile.profileType}
                    href={profile.url}
                    target="blank"
                    className={`social social--${profile.profileType.toLowerCase()}`}
                  >
                    {" "}
                  </a>
                ))}
              </p>
              <div className="sidebar__copyright">
                {data.datoCmsHome.copyright}
              </div>
              <div className="links-utils">
                <Link to="/conditions-d-utilisation" id="conditions_utilisation">Conditions d'utilisations</Link>
                <Link to="/mentions-legales">Mentions Légales</Link>
              </div>
            </footer>
          </div>
        </div>
      )}
    />
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.array
};

export default TemplateWrapper;
/* eslint-enable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/
