import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled , { injectGlobal } from 'styled-components'
import theme from '../../config/Theme'
import Header from './header'
import Footer from './footer'
import SEO from './SEO'


injectGlobal`
  ::selection {
    color: ${theme.colors.bg};
    background: ${theme.colors.primary};
  }
  blockquote {
    font-style: italic;
    position: relative;
  }
  blockquote:before {
    content: "";
    position: absolute;
    background: ${theme.colors.primary};
    height: 100%;
    width: 6px;
    margin-left: -1.6rem;
  }
  `

const LayoutContainer = styled.div`
  background-color: ${theme.colors.bg};
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <LayoutContainer>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'google-site-verification', content: 'fWMXXLKiaIWGo4gfO5EbkrptMQV5m1KW8G0U4xBSEec' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <SEO />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
        <Footer />
      </LayoutContainer>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
