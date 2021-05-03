import React, { useContext, useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import PortfolioContext from "../../context/context";

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);


useEffect(() => {
  if (window.innerWidth > 800) {
    setIsDesktop(true);
    setIsMobile(false);
  } else {
    setIsDesktop(false);
    setIsMobile(true);
  }
}, []);

return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
          <span className="text-color-main">{title || 'Yves Molina'}{' '}
            {name || ''}</span>
            <br />
            {subtitle || "Développeur web et mobile"}
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'En savoir plus'}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
);

};
export default Header;