import React, { useState } from 'react'
import dayjs from 'dayjs'
import '../../styles/reserve.scss'
import '../../styles/golbal.scss'
import SitterContainer from '../../components/reserve/SitterContainer'
import Header from '../../components/reserve/Header'
import Filters from '../../components/reserve/Filters'
import { sitterData } from '../../components/reserve/data.js'
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
    <>
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
      <div className="container">
        <div className="row">
          <div className="col-8">
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
          <form className="col-4 form-inline ">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="想找什麼呢？"
              aria-label="Search"
            />
            <button className="btn btn-info" type="submit">
              搜尋
            </button>
          </form>
        </div>
      </div>

      <SitterContainer filteredList={filteredList} />

      <Footer />
    </>
  )
}
