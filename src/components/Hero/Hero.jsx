import React, { useContext, useState, useEffect } from "react"
import Container from "react-bootstrap/Container"
// import Fade from "react-reveal/Fade"
// import { Link as scroller } from "react-scroll"
import PortfolioContext from "../../context/context"

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);


useEffect(() => {
  if (window.innerWidth < 800) {
    setIsDesktop(true);
    setIsMobile(false);
  } else {
    setIsDesktop(false);
    setIsMobile(true);
  }
}, []);

return (
    <Container>
        Initial commit
    </Container>
);

};
export default Header;