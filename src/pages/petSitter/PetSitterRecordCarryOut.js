import React, { useState, useEffect } from 'react'
import GlobalJsx from '../../components/member/GlobalJsx'
import PetSitterRecordGlobalJsx from '../../components/member/PetSitterRecordGlobalJsx'
import axios from 'axios'

import { API_URL } from '../../configs/Config'

function PetSitterRecordCarryOut() {
  const [petSitterRecordData, setPetSitterRecordData] = useState([
    {
      id: 0,
      member_id: 0,
      order_status: 0,
      evaluation_states: 0,
      address: '',
      district: '',
      start: '',
      end: '',
      memberImage: '',
      memberName: '',
      petName: '',
      price: '',
    },
  ])
  console.log('petSitterRecordData', petSitterRecordData)

  // 抓取保母訂單進行中資料
  useEffect(() => {
    async function getPetSitterRecordData() {
      let res = await axios.get(`${API_URL}/petSitterRecord/carryOut`, {
        withCredentials: true,
      })
      setPetSitterRecordData(res.data)
    }
    getPetSitterRecordData()
  }, [])
  return (
    <>
      <GlobalJsx>
        <PetSitterRecordGlobalJsx petSitterRecordData={petSitterRecordData} />
      </GlobalJsx>
    </>
  )
}

export default PetSitterRecordCarryOut
