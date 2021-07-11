import * as React from "react"

import Layout from "../components/Ui/Layout/Layout.component"
import Seo from "../components/seo"
import Container from "../components/Ui/Container/Container.component"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <Container>
      <h1>404: Not Found</h1>
      <p>Sorry this page Does not exist, Please go back to the home page!</p>
    </Container>
  </Layout>
)

export default NotFoundPage
