import React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { Button } from "../Ui/Button/Button.component"
import Container from "../Ui/Container/Container.component"

const ProductInformation = () => {
  const data = useStaticQuery(graphql`
    query productInformationQuery {
      allProductInformationJson {
        edges {
          node {
            alt
            id
            img {
              childImageSharp {
                gatsbyImageData(blurredOptions: { width: 100 })
              }
            }
          }
        }
      }
    }
  `)

  function getProductInfo(data) {
    const productInfoArray = []

    data.allProductInformationJson.edges.forEach(item => {
      productInfoArray.push(
        <GatsbyImage
          key={item.node.id}
          image={item.node.img.childImageSharp.gatsbyImageData}
          alt={item.node.alt}
        />
      )
    })

    return productInfoArray
  }

  return (
    <ProductInformationContainer>
      <Container>
        <ProductTitle>What’s the Dill?</ProductTitle>
        <ProductText>
          Sign up with your email address to receive news and updates.
        </ProductText>
        <Button as={ButtonNewsletter}>Subscribe</Button>
        <ProductsContainer>{getProductInfo(data)}</ProductsContainer>
      </Container>
    </ProductInformationContainer>
  )
}

export default ProductInformation

const ProductInformationContainer = styled.section`
  padding: 6.6vmax 4vw;
  text-align: center;
`

const ProductTitle = styled.h1`
  font-size: clamp(2.5rem, calc(2rem + 1.5vw), 3.8rem);
  font-weight: 500;

  @media only screen and (max-width: 40em) {
    font-size: 2.5rem;
  }
`

const ProductText = styled.p`
  margin-top: 3rem;
`

const ButtonNewsletter = styled.button`
  margin-top: 4rem;
`

const ProductsContainer = styled.div`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;

  @media only screen and (max-width: 49em) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 35em) {
    grid-template-columns: 1fr;
  }
`
