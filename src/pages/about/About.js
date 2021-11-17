import React from 'react'
import Footer from '../../components/golbal/Footer'
import AboutTop from '../../components/about/AboutTop'
import AboutDown from '../../components/about/AboutDown'
import NewNavBar from '../../components/golbal/NewNavBar'

function About(props) {
  return (
    <>
      <NewNavBar />
      <AboutTop />
      <AboutDown />
      <Footer />
    </>
  )
}

export default About
