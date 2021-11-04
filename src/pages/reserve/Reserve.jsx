import React, { useState } from 'react'
import dayjs from 'dayjs'
import '../../components/Reserve/styles.css'
import '../../styles/golbal.scss'
import HotelContainer from '../../components/Reserve/HotelContainer'
import Header from '../../components/Reserve/Header'
import Filters from '../../components/Reserve/Filters'
import ResultInfo from '../../components/Reserve/ResultInfo'
import { hotelsData } from '../../components/Reserve/data.js'

export default function App() {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [country, setCountry] = useState('選擇區域')
  const [price, setPrice] = useState('Todos los precios')
  const [size, setSize] = useState('Todos los tamaños')

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

  const handleCountry = (e) => {
    setCountry(e.target.value)
  }

  const handlePrice = (e) => {
    setPrice(e.target.value)
  }

  const handleSize = (e) => {
    setSize(e.target.value)
  }

  const handleClear = () => {
    setFrom('')
    setTo('')
    setCountry('Todos los paises')
    setPrice('Todos los precios')
    setSize('Todos los tamaños')
  }

  const resultList = () => {
    const newList = hotelsData
      .filter((hotel) => {
        if (dateFromFormat !== '' && to !== '') {
          return (
            dateFrom >= hotel.availabilityFrom && dateTo <= hotel.availabilityTo
          )
        }
        return hotel
      })
      .filter((hotel) => {
        if (country !== 'Todos los paises') {
          return hotel.country === country
        }
        return hotel
      })
      .filter((hotel) => {
        const priceNumber = parseInt(price, 10)
        if (price !== 'Todos los precios') {
          return hotel.price === priceNumber
        }
        return hotel
      })
      .filter((hotel) => {
        if (size !== 'Todos los tamaños') {
          if (size === 'Pequeño') {
            return hotel.rooms <= 10
          } else if (size === 'Mediano') {
            return hotel.rooms > 10 && hotel.rooms <= 19
          } else if (size === 'Grande') {
            return hotel.rooms > 20
          }
        }
        return hotel
      })
    return newList
  }

  let filteredList = resultList()

  return (
    <div className="App">
      <Header />
      <Filters
        from={from}
        handleDateFrom={handleDateFrom}
        to={to}
        handleDateTo={handleDateTo}
        country={country}
        handleCountry={handleCountry}
        price={price}
        handlePrice={handlePrice}
        size={size}
        handleSize={handleSize}
        handleClear={handleClear}
      />
      <ResultInfo
        from={from}
        to={to}
        country={country}
        price={price}
        size={size}
      />
      <HotelContainer filteredList={filteredList} />
    </div>
  )
}
