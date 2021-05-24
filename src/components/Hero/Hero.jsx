import React, { useContext, useState, useEffect } from "react"
import Container from "react-bootstrap/Container"
import Fade from "react-reveal/Fade"
import { Link } from "react-scroll"
import PortfolioContext from "../../context/context"

const Header = () => {
  const { hero } = useContext(PortfolioContext)
  const { name, status } = hero

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
    <section id="hero" className="jumbotron">
      <Container>
        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1200}
          delay={500}
          distance="30px"
        >
          <h1 className="hero-title">
            <span className="text-color-hero">{name}</span>
          </h1>
        </Fade>
        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1500}
          delay={1500}
          distance="30px"
        >
          <h1 className="hero-status">{status}</h1>
        </Fade>
        <Fade bottom duration={1000} delay={2500} distance="30px">
          <p className="hero-cta">
            <Link to="about" smooth duration={1000}>
              {/* Other style with "Know more" button and gradient animation
             <span className="cta-btn cta-btn--hero">
                {scrollButton}
            </span> */}
              <i
                className="fa fa-chevron-circle-down scrollIcon"
                width="0"
                aria-hidden="true"
                target="_blank"
                rel="noopener noreferrer"
              />
            </Link>
          </p>
        </Fade>
      </Container>
    </section>
  )
}
export default Header
