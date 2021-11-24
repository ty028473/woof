import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../styles/reserve.scss'

const SitterInfo = ({ item }) => {
  return (
    <div className="container ">
      <div key={item.id} className="row mb-2">
        <div className="col-5">
          <img className="sitter-img" src={item.image} alt={'img'} />
        </div>
        <div className="col-7">
          <h5 className="sitter-title">{item.name}</h5>
          <h6 className="sitter-description mb-0">
            {item.min}~{item.max}/步行 4hr
          </h6>
          <h6 className="sitter-description mb-2">{item.introduction}</h6>

          <div className="sitter-price-price">
            <div className="filters">
              <FontAwesomeIcon icon={faStar} className="sitter-icon" />
              <div>{item.score}</div>
            </div>
          </div>
          <Link
            to="/Reservecalendar"
            type="button"
            className="col-5 btn mt-1 btn-primary mx-2 btn-sm btn-woof"
          >
            詳細資訊
          </Link>
        </div>
      </div>
    </div>
  )
}
export default SitterInfo
