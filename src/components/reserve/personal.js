import React from 'react'
import { useState, useEffect } from 'react'
import '../../styles/calender.scss'
import { faStar, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SitterDetail(props) {
  const {personalData,setPersonalData} = props

  return (
    <>
      {
        <table className=" list-styled">
          <tr key={personalData && personalData.id}>
            <td>
              <img
                className="profile-img-cover"
                src={personalData && personalData.image}
                alt="img"
              />
            </td>

            <td className="proflie-width ">
              <h3>{personalData && personalData.name}</h3>
              <FontAwesomeIcon icon={faStar} className="sitter-icon mr-1" />
              {personalData && personalData.score}
              <br />
              <p className="evaluation-font">
                {personalData && personalData.evaluation}
              </p>

              <FontAwesomeIcon icon={faMapMarker} className="mr-1" />
              {personalData && personalData.district}
              <br />
              <button
                type="button"
                className="btn btn-primary btn-sm btn-woof mr-1 mt-2"
              >
                收藏
              </button>
            </td>
          </tr>
        </table>
      }

      <button
        type="button"
        className="col-6 mt-3 btn btn-secondary btn-sm btn-woof"
      >
        聊聊
      </button>
    </>
  )
}

export default SitterDetail
