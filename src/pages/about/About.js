import React from 'react'

import NavBar from '../../components/golbal/NavBar'
import Footer from '../../components/golbal/Footer'
import AboutTop from '../../components/about/AboutTop'
import AboutDown from '../../components/about/AboutDown'

function About(props) {
  return (
    <>
      <NavBar />
      <AboutTop />
      <AboutDown />
      <Footer />
    </>
  )
}

export default About
