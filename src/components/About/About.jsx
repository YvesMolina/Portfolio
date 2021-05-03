import React, { useContext, useState, useEffect } from "react"
import Fade from "react-reveal/Fade"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Title from "../Title/Title"
import AboutImg from "../Image/AboutImg"
import PortfolioContext from "../../context/context"
import { Link } from "react-scroll";


const About = () => {
  const { about } = useContext(PortfolioContext)
  const {
    img,
    paragraphOne,
    paragraphTwo,
    paragraphThree,
    resume,
    projects,
    cta
  } = about

  const [isDesktop, setIsDesktop] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (window.innerWidth > 800) {
      setIsDesktop(true)
      setIsMobile(false)
    } else {
      setIsDesktop(false)
      setIsMobile(true)
    }
  }, [])

  return (
    <section id="about">
      <Container>
        <Title title="A propos de moi" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade
              left={isDesktop}
              bottom={isMobile}
              duration={1000}
              delay={1000}
              distance="30px"
            >
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'Je suis actuellement en formation professionnalisante à "LDNR Formations" pour obtenir un titre professionnel deniveau III Développeur Web et Web mobile. Je poursuis mes études en Pré-Msc à Epitech dès Septembre 2021, et je recherche une Alternance à partir de Janvier 2022.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    "Je vais suivre un stage de développement web de juin à août 2021. Cette première expérience professionnelle en entreprise me permettra de rejoindre une équipe agile et mettre en application mes acquis et les enrichir au travers de missions techniques."}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree ||
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit."}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      CV
                    </a>
                  </span>
                )}
                {projects && (
                  <span className="d-flex mt-3">
                    <Link to="about" smooth duration={1000}>
                      {cta || "En savoir plus"}
                    </Link>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
