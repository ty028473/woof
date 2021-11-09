import React, { useState } from 'react'
import '../../styles/reserve.scss'
import '../../styles/golbal.scss'
import SitterContainer from '../../components/reserve/SitterContainer'
import Header from '../../components/reserve/Header'
import Filters from '../../components/reserve/Filters'
import Example from '../../components/reserve/Map'

import NavBar from '../../components/golbal/NavBar'
import Footer from '../../components/golbal/Footer'

export default function App() {
  return (
    <>
      <NavBar />
      <Header />

      <Filters />

      <div className="container">
        <div className="row">
          <div className="col-6">
            <SitterContainer />
            <SitterContainer />
            <SitterContainer />
            <SitterContainer />
            <SitterContainer />
            <SitterContainer />{' '}
          </div>
          <div className="col-6 mt-5 position-relative">
            <Example />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
