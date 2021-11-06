import React from 'react'
import DemoApp from '../../components/calendar2/calendar'
import NavBar from '../../components/golbal/NavBar'
import Footer from '../../components/golbal/Footer'

function Reserve(props) {
  return (
    <>
      <div>
        <NavBar />
        <DemoApp />
        <Footer />
      </div>
    </>
  )
}

export default Reserve
