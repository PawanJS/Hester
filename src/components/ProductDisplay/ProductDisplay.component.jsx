import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const ProductDisplay = () => {
  return (
    <ProductDisplayContainer>
      <StaticImage
        style={{ width: "100%", height: "100%" }}
        src="../../assets/images/pink-image.jpg"
        alt="Product Display"
      />
    </ProductDisplayContainer>
  )
}

export default ProductDisplay

const ProductDisplayContainer = styled.section`
  height: 100vh;
`
