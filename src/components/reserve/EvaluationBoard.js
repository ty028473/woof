import React, { useEffect, useState } from 'react'
import '../../styles/calender.scss'
import { faStar, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { API_URL } from '../../configs/Config'
import axios from 'axios'

function Evalution(props) {
  const { personalData } = props
  let pet_sitter_id = personalData.pet_sitter_id
  const [evalutuion, setEvalutuion] = useState([])
  console.log(pet_sitter_id)

  useEffect(
    (e) => {
      async function evalutuion() {
        try {
          let res = await axios.get(
            `${API_URL}/Reserve/evalution/${personalData.pet_sitter_id}`
          )
          setEvalutuion(res.data)
          console.log(res.data)
        } catch (e) {
          console.log(e)

          // alert('找不到此保母的相簿')
        }
      }
      evalutuion()
    },
    [personalData.pet_sitter_id]
  )
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-between my-2">
          <div className="col-12  ">
            <h3>評價</h3>
          </div>
        </div>
      </div>
      <div className="container calendar-bg mt-2">
        <div className="row d-flex justify-content-center ">
          {evalutuion.map((item) => (
            <div className="container">
              <div className="row  m-4 ">
                <div className="col-2  my-2  ">
                  <img
                    src={item.image}
                    className="evaluation-img-cover"
                    alt="保母頭像"
                  />
                </div>
                <div className="col-9  my-2  ">
                  <div className="container">
                    <div className="row d-flex justify-content-start ">
                      <div className="col-3 pl-0 ">
                        <h5> {item.name}</h5>
                      </div>
                      <div className="col-5  ">
                        <h5> {item.create_time}</h5>
                      </div>
                    </div>
                  </div>
                  <p>
                    <FontAwesomeIcon icon={faStar} color="#fac42e" size="sm" />
                    {item.score}
                  </p>

                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Evalution
