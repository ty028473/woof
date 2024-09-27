import React, { useState, useEffect } from 'react'
import GlobalJsx from '../../components/member/GlobalJsx'
import PetSitterRecordGlobalJsx from '../../components/member/PetSitterRecordGlobalJsx'
import axios from 'axios'
import { API_URL } from '../../configs/Config'

function PetSitterRecordCancel() {
  const [petSitterRecordData, setPetSitterRecordData] = useState([
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
  console.log('petSitterRecordData', petSitterRecordData)

  // 抓取保母訂單進行中資料
  useEffect(() => {
    async function getPetSitterRecordData() {
      let res = await axios.get(`${API_URL}/petSitterRecord/cancel`, {
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

export default PetSitterRecordCancel
