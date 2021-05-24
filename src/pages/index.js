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
        <title>{"Yves Molina Développeur"}</title>
        <html lang={"fr"} />
        <meta
          name="description"
          content={"Portfolio de développement - Yves Molina"}
        />
      </Helmet>

      <App />
    </>
  )
}
