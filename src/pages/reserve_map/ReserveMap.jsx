import React, { useState } from 'react'
import '../../styles/reserve.scss'
import '../../styles/golbal.scss'
import SitterContainer from '../../components/reserve/SitterContainer'
import SitterInfo from '../../components/reserve/SitterInfo'

import Header from '../../components/reserve/Header'
import Filters from '../../components/reserve/Filters'
import MyComponent from '../../components/reserve/Map'

import NavBar from '../../components/golbal/NavBar'
import Footer from '../../components/golbal/Footer'

export default function App() {
  return (
    <>
      <NavBar />
      <Header />

      <Filters />

      <div className="container ">
        <div className="row">
          <div className="col-6 overflow">
            <SitterInfo />
          </div>
          <div className="col-6 map-site ">
            <MyComponent />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
