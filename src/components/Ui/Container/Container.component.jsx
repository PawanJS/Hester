import React from "react"
import styled from "styled-components"

const Container = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>
}

export default Container

const ContainerWrapper = styled.div`
  max-width: 140rem;
  width: 100%;
  margin: 0 auto;
`
