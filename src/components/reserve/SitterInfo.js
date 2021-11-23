import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import sitter from '../../local-json/sitterData.json'
import '../../styles/reserve.scss'
import axios from 'axios'

export default function SitterInfo(props) {
  const [sitterData, setSitterState] = useState([])

  useEffect(async () => {
    let res = await axios.get('http://localhost:8801/api/reserve/')

    setSitterState(res.data)
    console.log(res.data)
  }, [])

  // const range = {
  //   1: '0~500',
  //   2: '500~1000',
  //   3: '1000~2000',
  // }
  return (
    <div className="container ">
      {sitterData &&
        sitterData.map(({ image, name, min, max, introduction, score, id }) => (
          <div key={id} className="row mb-2">
            <div className="col-5">
              <img className="sitter-img" src={image} alt={'img'} />
            </div>
            <div className="col-7">
              <h5 className="sitter-title">{name}</h5>
              <h6 className="sitter-description mb-0">
                {min}~{max}/步行 4hr
              </h6>
              <h6 className="sitter-description mb-2">{introduction}</h6>

              <div className="sitter-price-price">
                <div className="filters">
                  <FontAwesomeIcon icon={faStar} className="sitter-icon" />
                  <div>{score}</div>
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
        ))}
    </div>
  )
}
