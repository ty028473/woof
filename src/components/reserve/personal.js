import React from 'react'

import '../../styles/calender.scss'
import { faStar, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SitterDetail(props) {
  return (
    <>
      <table className=" list-styled">
        <tr>
          <td>
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
              className="img-cover"
              alt="保母頭像"
            />
          </td>

          <td className="proflie-width ">
            <h3>審佳宜</h3>
            <FontAwesomeIcon icon={faStar} /> 4.7
            <br />
            <p className="evaluation-font">55則評價</p>
            <br />
            <FontAwesomeIcon icon={faMapMarker} /> 文山區
          </td>
        </tr>
      </table>
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
