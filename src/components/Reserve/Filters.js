import React from 'react'
import dayjs from 'dayjs'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Filters(props) {
  const {
    country,
    handleCountry,
    date,
    handleDate,
    time,
    handleTimefrom,
    price,
    handlePrice,
    distance,
    handleDistance,
    handleClear,
  } = props

  const todayDate = new Date()
  const today = dayjs(todayDate).format('YYYY-MM-DD')

  return (
    <div className="filter-container">
      <div className="filter-select">
        <label>
          交易地區
          <button className="icon-btn" onClick={handleClear}></button>
        </label>

        <select
          className="input-filters"
          onChange={handleCountry}
          value={country}
        >
          <option value="地區範圍">地區範圍</option>
          <option value="中正區">中正區</option>
          <option value="大同區">大同區</option>
          <option value="中山區">中山區</option>
          <option value="松山區">松山區</option>
          <option value="大安區">大安區</option>
          <option value="萬華區">萬華區</option>
          <option value="信義區">信義區</option>
          <option value="士林區">士林區</option>
          <option value="北投區">北投區</option>
          <option value="內湖區">內湖區</option>
          <option value="南港區">南港區</option>
          <option value="文山區">文山區</option>
        </select>
      </div>

      <div className="filter-select">
        <label>預約日期:</label>
        <input
          className="input-filters"
          type="date"
          value={date}
          onChange={handleDate}
          autoComplete="off"
        />
      </div>

      <div className="filter-select">
        <label>預約時間:</label>
        <input
          className="input-filters"
          type="time"
          value={time}
          onChange={handleTimefrom}
          autoComplete="off"
        />
      </div>

      <div className="filter-select">
        <label>金額:</label>
        <select className="input-filters" onChange={handlePrice} value={price}>
          <option value="金額範圍">金額範圍</option>
          <option value={1}>See All</option>
          <option value={2}>0~500</option>
          <option value={3}>500~1000</option>
          <option value={4}>1000~2000</option>
        </select>
      </div>
      <div className="filter-select">
        <label>距離:</label>
        <select
          className="input-filters"
          onChange={handleDistance}
          value={distance}
        >
          <option value="距離">距離</option>
          <option value="星數">星數</option>
          <option value="熱門">熱門</option>
        </select>
      </div>
      <div className="filter-select">
        <label className="text-hidden">.</label>
        <FontAwesomeIcon icon={faMapMarker} />
      </div>
    </div>
  )
}
