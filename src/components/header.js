import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  display: flex;
  background: #e67070;
  height: 5rem;
  padding-top: 1.5rem;  
  margin-bottom: 2rem;
`
const LinkContainer = styled.h2`
  padding-left: 2rem;
`

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <LinkContainer>
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        {siteTitle}
      </Link>
    </LinkContainer>
  </HeaderContainer>
)

export default Header
