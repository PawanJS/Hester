import React from "react"
import styled from "styled-components"
import Container from "../Ui/Container/Container.component"

import { FiYoutube } from "react-icons/fi"
import { FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterAddress>
          <FooterAddressTitle>Hester</FooterAddressTitle>
          <FooterAddressText>123 Demo Street</FooterAddressText>
          <FooterAddressText>New York, NY 10000</FooterAddressText>
          <FooterAddressText>(555) 555-555</FooterAddressText>
        </FooterAddress>
        <FooterSocial>
          <a href="https://www.pawanjs.xyz/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.pawanjs.xyz/" target="_blank" rel="noreferrer">
            <FiYoutube />
          </a>
        </FooterSocial>
        <FooterCopy>
          Designed by
          <a
            href="https://www.squarespace.com/"
            target="_blank"
            rel="noreferrer"
          >
            Squarespace
          </a>
          coded by
          <a href="https://www.pawanjs.xyz/" target="_blank" rel="noreferrer">
            Pawan JS
          </a>
        </FooterCopy>
      </Container>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.footer`
  background: #df7c6d;
  color: #fff;
  padding: 6.6vmax 4vw;

  & > div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 3rem;

    @media only screen and (max-width: 40em) {
      grid-template-columns: 1fr;
    }
  }
`

const FooterAddress = styled.div`
  grid-column: 1 / span 2;
`

const FooterAddressTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 500;
`

const FooterAddressText = styled.p`
  margin-top: 1.5rem;
`

const FooterSocial = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  a {
    color: #fff;
    font-size: 3rem;
    margin-right: 2rem;

    svg {
      width: 3rem;
      height: 3rem;
    }
  }
`

const FooterCopy = styled.p`
  justify-self: center;
  grid-column: 1/-1;

  a {
    color: #fff;
    transition: opacity 0.3s;
    margin: 0 0.5rem;

    &:hover {
      opacity: 0.8;
    }
  }
`
