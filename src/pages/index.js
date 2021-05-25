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
          <link rel="canonical" href="https://ymolina.com" />
          <meta
            name="description"
            content="Portfolio présentant mon expérience en développement et mes projets"
          />
          <meta
            property="og:image"
            itemProp="image"
            content="static/ed9c2a929c5c070ebfd92b3521b8c6cc/cd6c3/project.webp"
          />
        </Helmet>
        <App />
      </div>
    )
  }
}

export default Home
