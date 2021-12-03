import React, { useState } from 'react'
import { useEffect } from 'react'
import '../../styles/reserve.scss'
import '../../styles/golbal.scss'
import SitterInfo from '../../components/reserve/SitterInfo'

import HeaderFilter from '../../components/reserve/Header'
import Filters from '../../components/reserve/Filters'
import MyComponent from '../../components/reserve/Map'

import NewNavBar from '../../components/golbal/NewNavBar'
import Footer from '../../components/golbal/Footer'
import { API_URL } from '../../configs/Config'
import axios from 'axios'
import dayjs from 'dayjs'

const isSameOrAfter = require('dayjs/plugin/isSameOrAfter')
const isSameOrBefore = require('dayjs/plugin/isSameOrBefore')
dayjs.extend(isSameOrAfter)
dayjs.extend(isSameOrBefore)
export default function App() {
  const [sitterData, setSitterData] = useState([])

  useEffect(async () => {
    let res = await axios.get(`${API_URL}/Reserve/`)

    setSitterData(res.data)
  }, [])
  const [allData, setData] = useState(sitterData)
  //creat a function ,
  const districtDropDown = () => {
    return [...new Set(sitterData.map((item) => item.district))]
  }

  const handleFilterName = (name) => {
    const filteredData = sitterData.filter((item) => {
      if (item.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())) {
        return item
      }
    })
    setData(filteredData)
  }
  const handleFilterDistricts = (district) => {
    const filteredData = sitterData.filter((item) => {
      if (item.district === district) {
        return item
      }
    })
    setData(filteredData)
  }
  const handleFilterStart = (start, field) => {
    const filteredData = sitterData.filter((item) => {
      if (field === 'start' && dayjs(item.start).isSameOrBefore(dayjs(start))) {
        return item
      }
    })
    setData(filteredData)
  }
  const handleFilterEnd = (end, field) => {
    const filteredData = sitterData.filter((item) => {
      if (field === 'end' && dayjs(item.end).isSameOrAfter(dayjs(end))) {
        return item
      }
    })
    setData(filteredData)
  }
  return (
    <>
      <NewNavBar />
      <HeaderFilter
        districts={districtDropDown()}
        onNameFilter={handleFilterName}
        onDistrictFilter={handleFilterDistricts}
        onStartFilter={handleFilterStart}
        onEndFilter={handleFilterEnd}
      />

      <div className="container mt-4">
        <div className="row">
          <div className="col-6 overflow">
            {allData.map((item) => (
              <SitterInfo item={item} key={item.id} />
            ))}
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
