import React from 'react'
import { Link, graphql } from 'gatsby'
import { css } from 'react-emotion'
import Layout from '../components/layout'
import styled from 'styled-components'

const Date = styled.span`
color: #bbb;
`

export default ({ data }) => {
  return (
    <Layout>
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              className={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3>
                {node.frontmatter.title}{' '}
                <Date>
                &mdash; {node.frontmatter.date}
                </Date>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
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
