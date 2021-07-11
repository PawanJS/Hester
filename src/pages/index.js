import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/Ui/Layout/Layout.component"
import Hero from "../components/Hero/Hero.component"
import Products from "../components/Products/Products.component"
import ProductDisplay from "../components/ProductDisplay/ProductDisplay.component"
import ProductInformation from "../components/ProductInformation/ProductInformation.component"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Products />
    <ProductDisplay />
    <ProductInformation />
  </Layout>
)

export default IndexPage
