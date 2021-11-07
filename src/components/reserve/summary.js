import React from 'react'

import '../../styles/calender.scss'
import { faStar, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SitterSummary(props) {
  return (
    <>
      <table className="mt-3 my-2 summary-list-styled">
        <tr>
          <td>
            <h3>簡介</h3>
            <p>
              本身體力也不錯，常帶雇主的狗狗出門散步耗體力。目前其中1位雇主的狗體重24公斤，愛爆衝，但因為之前有帶多隻毛孩外出的經驗及長時間固定運動，因此可以控制住比較活潑好動的狗狗。在遛毛孩的同時，也會不定時拍照及拍影片回傳給飼主，讓飼主放心。{' '}
            </p>
            <h3>技能</h3>
            <p>PCP寵物照護員認證(基礎)</p>
          </td>
        </tr>
      </table>
    </>
  )
}

export default SitterSummary
