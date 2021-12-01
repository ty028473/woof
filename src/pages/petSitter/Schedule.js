import React, { useState, useEffect } from 'react'
import GlobalJsx from '../../components/member/GlobalJsx'
import DemoApp from '../../components/calendar2/calendar'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { API_URL } from '../../configs/Config'

function Schedule() {
  const [personalData, setPersonalData] = useState({
    pet_sitter_id: '',
    district: '',
  })
  const { reserveId } = useParams()

  useEffect(async () => {
    let res = await axios.get(`${API_URL}/${reserveId}`)
    setPersonalData(res.data)
  }, [])
  return (
    <>
      <GlobalJsx>
        {/* 標題區塊 */}
        <section>
          <div>
            <h3>我的工作排程</h3>
            <p>自訂你的工作時間以及金額</p>
          </div>
        </section>
        <hr />
        {/* 內容區塊 1 */}
        <section>
          <div className="mt-3">
            <DemoApp personalData={personalData} />
          </div>
        </section>
      </GlobalJsx>
    </>
  )
}

export default Schedule
