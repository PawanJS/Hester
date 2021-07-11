import React from "react"
import styled from "styled-components"
import { Button } from "../Ui/Button/Button.component"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <HeroContainer>
      <HeroImage>
        <StaticImage
          style={{
            imageRendering: "pixelated",
            objectPosition: "50.835% 37.639%",
            height: "100%",
          }}
          src="../../assets/images/hero.jpg"
          alt="Pickle hero image"
        />
      </HeroImage>
      <Overlay></Overlay>
      <HeroText>
        <h1>Pickle Perfection</h1>
        <Button primary="true" to="/shop">
          Shop Now
        </Button>
      </HeroText>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
  min-height: 100vh;
`

const HeroImage = styled.figure`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const HeroText = styled.div`
  position: absolute;
  top: 57%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;

  h1 {
    font-size: clamp(4rem, calc(3rem + 2vw), 6.8rem);
    font-weight: 700;
    color: #fff;
    margin-bottom: 3rem;
  }
`
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #df7c6d;
  opacity: 0.15;
  z-index: 10;
`
