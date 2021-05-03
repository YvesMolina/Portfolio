import React, { useState, useEffect } from "react";
import Hero from './Hero/Hero';
import About from './About/About';

import { PortfolioProvider } from "../context/context"
import { heroData, aboutData } from "../mock/data"

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});


  useEffect(() => {
    setHero({ ...heroData })
    setAbout({ ...aboutData });

  }, [])

  return (
    <PortfolioProvider value={{ hero, about }}>
      <Hero />
      <About />
    </PortfolioProvider>
  )
}

export default App
