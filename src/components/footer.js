import React from 'react'
import styled from 'styled-components'
import theme from '../../config/Theme'

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #e67070;
  height: 9rem;
  color: ${theme.colors.bg}
`
const H3 = styled.h3`
margin-bottom: 1rem;
`
const H4 = styled.h4`
`

const Footer = () => (
  <FooterContainer>
        <H3>Say hello!</H3>
        <H4>h4harshits@gmail.com</H4>
  </FooterContainer>
)

export default Footer
