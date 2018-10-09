import React from 'react'
import { Link } from 'gatsby'
import { css } from 'react-emotion'
import Layout from '../components/layout'
import styled from 'styled-components'
import theme from '../../config/Theme'
import Header from '../components/header'
import Footer from '../components/footer'
import config from '../../config/SiteConfig'

const Excerpt = styled.p`
  text-align: justify;
`
const LayoutContainer = styled.div`
  background-color: ${theme.colors.bg};
`

const LinkButtomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`
const LinkButtom = styled.div`
  min-width: 2.25em;
  border: 2px solid ${theme.colors.grey_dark};
  margin-left: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 0.75em;
  padding-right: 0.75em;
  border-radius: 0.5rem;
`
const DisabledLinkButtom = styled.div`
  color: ${theme.colors.grey_dark};
  opacity: 0.5;
`
const BlogContainer = styled.div`
  background-color: ${theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.4rem;
  margin-top: 2rem;
`
const Blog = styled.div`
  width: 80%;
`
const H4 = styled.h4`
  color: ${theme.colors.primary};
  margin-bottom: 1rem;
`

const Title = styled.div`
border-bottom: 4px solid ${theme.colors.grey_shade_1};
`

const NavLink = props => {
  if (!props.test) {
    return (
      <Link
        className={css`
          text-decoration: none;
          color: inherit;
        `}
        to={props.url}
      >
        {props.text}
      </Link>
    )
  } else {
    return <DisabledLinkButtom>{props.text}</DisabledLinkButtom>
  }
}

export default ({ data, pageContext }) => {
  const { group, index, first, last, pageCount } = pageContext
  const previousUrl = index - 1 === 1 ? '' : (index - 1).toString()
  const nextUrl = (index + 1).toString()

  return (
    <LayoutContainer>
      <Header siteTitle={config.siteTitle} />
      {group.map(({ node }) => (
        <Layout>
          <div key={node.id}>
            <BlogContainer>
              <Blog>
                <Link
                  to={node.fields.slug}
                  className={css`
                    text-decoration: none;
                    color: inherit;
                    padding: 0 0.5rem;
                  `}
                >
                  <Title>
                    <H4>{node.frontmatter.title} </H4>
                    {/* <Date>&mdash; {node.frontmatter.date}</Date> */}
                  </Title>
                </Link>
                <Excerpt>{node.excerpt}</Excerpt>
              </Blog>
            </BlogContainer>
          </div>
        </Layout>
      ))}
      <LinkButtomContainer>
        <LinkButtom>
          <NavLink test={first} url={previousUrl} text="Previous" />
        </LinkButtom>
        <LinkButtom>
          <NavLink test={last} url={nextUrl} text="Next page" />
        </LinkButtom>
      </LinkButtomContainer>
      <Footer />
    </LayoutContainer>
  )
}
