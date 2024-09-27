import React from 'react'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import '../../styles/calender.scss'
import axios from 'axios'
import { API_URL } from '../../configs/Config'

function SitterSummary(props) {
  const [summaryData, setSummaryState] = useState()
  const { reserveId } = useParams()
  useEffect(async () => {
    let res = await axios.get(`${API_URL}/Reserve/${reserveId}`)

    setSummaryState(res.data)
  }, [])
  return (
    <>
      <table
        key={summaryData && summaryData.id}
        className="mt-3 my-2 summary-list-styled"
      >
        <tr>
          <td>
            <h3>簡介</h3>
            <p>{summaryData && summaryData.introduction}</p>
            <h3>技能</h3>
            <p>{summaryData && summaryData.skill}</p>
          </td>
        </tr>
      </table>
    </>
  )
}

export default SitterSummary
