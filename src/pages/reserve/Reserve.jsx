import React, { useState } from 'react'
import dayjs from 'dayjs'
import '../../styles/reserve.scss'
import '../../styles/golbal.scss'
import SitterContainer from '../../components/Reserve/SitterContainer'
import Header from '../../components/Reserve/Header'
import Filters from '../../components/Reserve/Filters'
import ResultInfo from '../../components/Reserve/ResultInfo'
import { sitterData } from '../../components/Reserve/data.js'
import NavBar from '../../components/golbal/NavBar'
import Footer from '../../components/golbal/Footer'

export default function App() {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [country, setCountry] = useState('選擇區域')
  const [price, setPrice] = useState('See All')

  const time = dayjs().format('HH:mm:ss')
  const dateFromFormat = dayjs(from).format(`YYYY-M-DD ${time}`)
  const dateFrom = new Date(dateFromFormat).getTime()
  const dateTo = new Date(to).getTime()

  const handleDateFrom = (e) => {
    setFrom(e.target.value)
  }

  const handleDateTo = (e) => {
    setTo(e.target.value)
  }

  const handlePrice = (e) => {
    setPrice(e.target.value)
  }

  const resultList = () => {
    const newList = sitterData

    return newList
  }

  let filteredList = resultList()

  return (
    <div className="App">
      <NavBar />
      <Header />

      <Filters
        from={from}
        handleDateFrom={handleDateFrom}
        to={to}
        handleDateTo={handleDateTo}
        price={price}
        handlePrice={handlePrice}
      />
      <div className="col-10 mx-auto">
        {/* <!--Google map--> */}
        <div
          id="map-container-google-1"
          className="z-depth-1-half map-container map-height"
        >
          <iframe
            src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="map-ifram map-height"
          ></iframe>
        </div>
      </div>
      <ResultInfo from={from} to={to} country={country} price={price} />
      <SitterContainer filteredList={filteredList} />
      <Footer />
    </div>
  )
}
