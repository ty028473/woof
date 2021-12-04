import React, { useState, useEffect } from 'react'
import GlobalJsx from '../../components/member/GlobalJsx'
import RecordGlobalJsx from '../../components/member/RecordGlobalJsx'
import axios from 'axios'
import swal from 'sweetalert'
import { API_URL } from '../../configs/Config'

function RecordCancel() {
  const [memberRecordData, setMemberRecordData] = useState([
    {
      petSitterName: '',
      petSitterImage: '',
      district: '',
      address: '',
      start: '',
      end: '',
      price: 0,
      petName: '',
    },
  ])
  console.log('memberRecordData', memberRecordData)

  // 抓取會員訂單進行中資料
  useEffect(() => {
    async function getMemberRecordData() {
      let res = await axios.get(`${API_URL}/memberRecord/cancel`, {
        withCredentials: true,
      })
      setMemberRecordData(res.data)
    }
    getMemberRecordData()
  }, [])
  return (
    <>
      <GlobalJsx>
        <RecordGlobalJsx memberRecordData={memberRecordData} />
      </GlobalJsx>
    </>
  )
}

export default RecordCancel
