import React, { useState } from 'react'
import '../../styles/reserve.scss'
import '../../styles/golbal.scss'
import SitterContainer from '../../components/reserve/SitterContainer'
import Header from '../../components/reserve/Header'
import Filters from '../../components/reserve/Filters'

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
          </div>
          <div className="col-6">
            <div
              id="map-container-google-2"
              className="z-depth-1-half map-container"
              style={{ height: '1200px' }}
            >
              <iframe
                src="https://maps.google.com/maps?q=chicago&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0"
                style={{ border: '0' }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
