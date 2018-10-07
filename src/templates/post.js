import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import theme from '../../config/Theme'
import '../utils/prismjs-theme.css'
import { media } from '../utils/media'
import SEO from  '../components/SEO'

const Content = styled.article`
  padding: 1rem 2rem;
  background-color: white;
`

const Title = styled.h3`
  margin-bottom: 1rem;
  color: ${theme.colors.primary};
  @media ${media.phone} {
    font-size: 14px;
  }
  @media ${media.tablet} {
    font-size: 18px;
  }
`

const PostContent = styled.div`
  margin-top: 1rem;
  text-align: justify;
  @media ${media.phone} {
    font-size: 14px;
  }
  @media ${media.tablet} {
    font-size: 18px;
  }
`

const Post = props => {
  const { slug } = props.pageContext;
  const postNode = props.data.markdownRemark
  const post = postNode.frontmatter

  return (
    <Layout>
      <SEO postPath={slug} postNode={postNode} postSEO />
      <Content>
        <Title>{post.title}</Title>
        {post.date} &mdash; {postNode.timeToRead} mins read
        <PostContent dangerouslySetInnerHTML={{ __html: postNode.html }} />
      </Content>
    </Layout>
  )
}

export default Post

Post.propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    markdownRemark: PropTypes.object.isRequired,
  }).isRequired,
}


export const postQuery = graphql`
  query postBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
      }
      timeToRead
    }
  }
`