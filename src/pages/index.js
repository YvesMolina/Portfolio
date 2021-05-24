import React from "react"
import App from "../components/App"
import "bootstrap/dist/css/bootstrap.min.css"
import "../style/main.scss"
import { Helmet } from "react-helmet"

class Home extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <html lang="fr" />
          <title>Yves Molina Développeur</title>
          <description>test</description>
          <meta name="description" content="My description2"/>
          <meta
            property="og:description"
            content="Portfolio de développement - Yves Molina"
          />
          <meta
            property="og:image"
            itemProp="image"
            content="./images/project.jpg"
          />
        </Helmet>
        <App />
      </div>
    )
  }
}

export default Home
