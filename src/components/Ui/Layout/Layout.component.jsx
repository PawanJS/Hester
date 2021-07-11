import React from "react"
import Header from "../../Header/Navigation.component"
import { GlobalStyle } from "../../../assets/Styles/GlobalStyles"
import "../../../assets/Styles/styles.scss"
import Footer from "../../Footer/Footer.component"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
