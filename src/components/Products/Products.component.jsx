import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Container from "../Ui/Container/Container.component"
import { Button } from "../Ui/Button/Button.component"

const Products = () => {
  const data = useStaticQuery(graphql`
    query productsQuery {
      allProductsJson {
        edges {
          node {
            alt
            id
            link
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

  function getProducts(data) {
    const productsArray = []

    data.allProductsJson.edges.forEach(item => {
      productsArray.push(
        <ProductLink key={item.node.id} to={item.node.link}>
          <GatsbyImage
            image={item.node.img.childImageSharp.gatsbyImageData}
            alt={item.node.alt}
          />
        </ProductLink>
      )
    })

    return productsArray
  }

  return (
    <ProductContainer>
      <Container>
        <ProductTitle>Only the Highest Quality Ingredients</ProductTitle>
        <ProductText>
          In fact, we grow most of them ourselves on our 17-acre farm!
        </ProductText>
        <ProductImageContainer>
          {getProducts(data)}
          <Button
            to="/shop"
            css={`
              margin-top: 5rem;
              grid-column: 1 / -1;
              justify-self: center;
            `}
          >
            Shop Now
          </Button>
        </ProductImageContainer>
      </Container>
    </ProductContainer>
  )
}

export default Products

const ProductContainer = styled.section`
  text-align: center;
  padding: 0 4vw 6.6vmax;
`

const ProductTitle = styled.h2`
  font-size: clamp(2.5rem, calc(2rem + 1.5vw), 3.8rem);
  font-weight: 500;

  @media only screen and (max-width: 40em) {
    font-size: 2.5rem;
  }
`

const ProductText = styled.p`
  margin-top: 3rem;
`

const ProductImageContainer = styled.div`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media only screen and (max-width: 49em) {
    grid-template-columns: 1fr;
  }
`

const ProductLink = styled(Link)``
