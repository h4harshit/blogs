import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import theme from '../../config/Theme'

const HeaderContainer = styled.div`
  display: flex;
  min-height: 20rem;
  background-image: url('https://raw.githubusercontent.com/h4harshit/blogs/master/src/images/home.png');
`
const LinkContainer = styled.h2`
  padding-left: 2rem;
`

const MenuOptions = styled.div`
  padding: 0.5rem;
  padding-left: 2rem;
  position: fixed;
  top: 0;
  background-color: ${theme.colors.bg};
  width: 100%;
  overflow: hidden;

  -webkit-box-shadow: 0px 1px 1px ${theme.colors.primary};
  -moz-box-shadow: 0px 1px 1px ${theme.colors.primary};
  box-shadow: 0px 1px 1px ${theme.colors.primary};
`
const MenuItem = styled.div`
  color: #4a4a4a;
  cursor: pointer;
`

const Header = ({ siteTitle }) => (
  <div>
    <MenuOptions>
      <MenuItem>
        {/* <LinkContainer> */}
        <Link
          to="/"
          style={{
            // color: 'white',
            textDecoration: 'none',
          }}
        >
          Home
        </Link>
        {/* </LinkContainer> */}
      </MenuItem>
    </MenuOptions>
    <HeaderContainer>
      <LinkContainer>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {/* <MenuOption>Home</MenuOption> */}
          {/* {"Home"} */}
        </Link>
      </LinkContainer>
    </HeaderContainer>
  </div>
)

export default Header
