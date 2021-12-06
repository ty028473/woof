import React, { useState, useEffect } from 'react'
import GlobalJsx from '../../components/member/GlobalJsx'
import RecordGlobalJsx from '../../components/member/RecordGlobalJsx'
import PopupEvaluate from '../../components/member/PopupEvaluate'
import axios from 'axios'
import swal from 'sweetalert'
import { API_URL } from '../../configs/Config'

// css
import styles from '../../styles/record.module.scss'

function RecordComplete() {
  const [modalShow, setModalShow] = useState(false)
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

  // 抓取會員訂單完成資料
  useEffect(() => {
    async function getMemberRecordData() {
      let res = await axios.get(`${API_URL}/memberRecord/complete`, {
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
            className={`btn btn-secondary btn-woof-Chat ${styles.record_button_position}`}
            onClick={() => setModalShow(true)}
          >
            評價
          </button>
          <PopupEvaluate show={modalShow} onHide={() => setModalShow(false)} />
        </RecordGlobalJsx>
      </GlobalJsx>
    </>
  )
}

export default RecordComplete
