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
            content="./static/590c105651e00370ac7f421b3e7cb6ef/f0ff6/profile.jpg"
          />
        </Helmet>
        <App />
      </div>
    )
  }
}

export default Home
