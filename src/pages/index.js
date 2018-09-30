import React from 'react'
import { Link, graphql } from 'gatsby'
import { css } from 'react-emotion'
import Layout from '../components/layout'
import styled from 'styled-components'

const Date = styled.span`
  color: #bbb;
`

const Excerpt = styled.p`
  text-align: justify;
`

const BlogContainer = styled.div`
  background-color: #eeeeee;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 11rem;
`

const Blog = styled.div`
  width: 80%;
`

export default ({ data }) => {
  return (
    <Layout>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <BlogContainer>
              <Blog>
                <Link
                  to={node.fields.slug}
                  className={css`
                    text-decoration: none;
                    color: inherit;
                    padding: 0 2rem;
                  `}
                >
                  <h3>
                    {node.frontmatter.title}{' '}
                    {/* <Date>&mdash; {node.frontmatter.date}</Date> */}
                  </h3>
                  <Excerpt>{node.excerpt}</Excerpt>
                </Link>
              </Blog>
            </BlogContainer>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD.MM.YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
