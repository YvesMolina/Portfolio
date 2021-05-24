import React from "react"
import App from "../components/App"
import "bootstrap/dist/css/bootstrap.min.css"
import "../style/main.scss"
import { Helmet } from "react-helmet"

export default function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <html lang="fr" />
        <title>Yves Molina Développeur</title>
        <meta property="og:description" content="Portfolio de développement - Yves Molina"/>
        <meta property="og:image" itemProp="image" content="./images/project.jpg"/>
      </Helmet>

      <App />
    </>
  )
}
