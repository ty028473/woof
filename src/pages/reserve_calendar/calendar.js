import React from 'react'
import DemoApp from '../../components/calendar2/calendar'
import SitterDetail from '../../components/reserve/personal'
import SitterSummary from '../../components/reserve/summary'

import NavBar from '../../components/golbal/NavBar'
import Footer from '../../components/golbal/Footer'

function Reservecalendar(props) {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-6 my-4 ">
            <SitterDetail />
          </div>
          <div className="col-6 my-2 ">
            <SitterSummary />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-12  ">
            <h3>保母日曆</h3>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-12 my-4 ">
            <DemoApp />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Reservecalendar
