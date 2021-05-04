import React, { useContext, useState, useEffect } from "react"
import Fade from "react-reveal/Fade"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Title from "../Title/Title"
import AboutImg from "../Image/AboutImg"
import PortfolioContext from "../../context/context"
import { Link } from "react-scroll"

const About = () => {
  const { about } = useContext(PortfolioContext)
  const { img, paragraphOne, paragraphTwo, resume, projects } = about

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
        <Title title="À propos de moi" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <div className="about-wrapper__info">
              <Fade
                left={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={600}
                distance="30px"
              >
                <p className="about-wrapper__info-text">{paragraphOne}</p>
              </Fade>
              <Fade
                left={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={720}
                distance="30px"
              >
                <p className="about-wrapper__info-text">{paragraphTwo}</p>
              </Fade>
                <span className="d-flex mt-3">
                  <Fade bottom
                duration={1000}
                delay={840}
                distance="30px">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      CV
                    </a>
                  </Fade>
              <Fade
                bottom
                duration={1000}
                delay={960}
                distance="30px"
              >
                  <Link to="projects" smooth duration={1000}>
                    <span className="cta-btn cta-btn--projects">
                      {projects}
                    </span>
                  </Link>
              </Fade>
                </span>
            </div>
          </Col>
          <Col md={6} sm={12}>
            <Fade
              right={isDesktop}
              bottom={isMobile}
              duration={1000}
              delay={600}
              distance="30px"
            >
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
