import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Content = styled.article`
  padding: 1rem 2rem;
  background-color: white;
`

const Title = styled.h1`
  margin-bottom: 1rem;
`

const PostContent = styled.div`
  margin-top: 1rem;
`

const Post = props => {
  const postNode = props.data.markdownRemark
  const post = postNode.frontmatter

  return (
    <Layout>
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