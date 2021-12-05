import React, { useState, useEffect } from 'react'
import GlobalJsx from '../../components/member/GlobalJsx'
import RecordGlobalJsx from '../../components/member/RecordGlobalJsx'
import axios from 'axios'
import swal from 'sweetalert'
import { API_URL } from '../../configs/Config'

// css
import styles from '../../styles/record.module.scss'

function RecordCarryOut() {
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
      let res = await axios.get(`${API_URL}/memberRecord/carryOut`, {
        withCredentials: true,
      })
      setMemberRecordData(res.data)
    }
    getMemberRecordData()
  }, [])
  return (
    <>
      <GlobalJsx>
        <RecordGlobalJsx memberRecordData={memberRecordData}>
          <button
            type="button"
            className={`btn btn-secondary btn-woof-Chat ${styles.record_button_position_01}`}
          >
            聊聊
          </button>
          <button
            type="button"
            className={`btn btn-info btn-woof ${styles.record_button_position}`}
          >
            取消
          </button>
        </RecordGlobalJsx>
      </GlobalJsx>
    </>
  )
}

export default RecordCarryOut
