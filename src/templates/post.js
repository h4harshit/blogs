import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import theme from '../../config/Theme'
import '../utils/prismjs-theme.css'
import { media } from '../utils/media'
import SEO from  '../components/SEO'
import Header from '../components/header'
import Footer from '../components/footer'
import config from '../../config/SiteConfig'

const Content = styled.article`
  padding: 1rem 2rem;
  background-color: ${theme.colors.white};
`

const MetaData = styled.div`
 margin-top: 0;
 font-size: 12px;
 color: ${theme.colors.grey_dark};
`

const Title = styled.h4`
  margin-bottom: 2px;
  padding-top: 2rem;
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
    <div>
    <Header siteTitle={config.siteTitle} />
    <Layout>
      <SEO postPath={slug} postNode={postNode} postSEO />
      <Content>
        <Title>{post.title}</Title>
        <MetaData> {post.date} &mdash; {postNode.timeToRead} mins read </MetaData>
        <PostContent dangerouslySetInnerHTML={{ __html: postNode.html }} />
      </Content>
    </Layout>
    <Footer />
    </div>
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