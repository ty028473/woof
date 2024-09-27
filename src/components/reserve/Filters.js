import React from 'react'

import '../../styles/reserve.scss'

export default function Filters(props) {
  const { price, handlePrice } = props
  return (
    <div className="container">
      <div className="row d-flex justify-content-start">
        <div className="col-2 filter-select">
          <div className="input-group m-3">
            <select
              className="custom-select"
              onChange={handlePrice}
              value={price}
            >
              <option selected>金額範圍</option>

              <option value={1}>0~500</option>
              <option value={2}>500~1000</option>
              <option value={3}>1000~2000</option>
            </select>
          </div>
        </div>
        <div className="col-2 filter-select">
          <div className="input-group m-3">
            <select className="custom-select">
              <option selected>篩選範圍</option>
              <option value="1">距離</option>
              <option value="2">星數</option>
              <option value="3">熱門</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}
