import React, { useState } from 'react'
import PopupEvaluate from '../../components/member/PopupEvaluate'
import axios from 'axios'
import swal from 'sweetalert'
import { API_URL, PUBLIC_URL } from '../../configs/Config'
// css
import styles from '../../styles/record.module.scss'
import userGlobal from '../../styles/user-global.module.scss'

function PetSitterRecordGlobalJsx(props) {
  const { petSitterRecordData } = props
  console.log('petSitterRecordData', petSitterRecordData)

  return (
    <>
      {petSitterRecordData[0].petName === '' ? (
        <section>
          <div className={`row align-items-center ${userGlobal.no_data}`}>
            <div className="col text-center">
              <h3>您目前尚無訂單</h3>
            </div>
          </div>
        </section>
      ) : (
        petSitterRecordData.map((v) => {
          return (
            <section className="m-3" key={v.id}>
              <div className={`row ${userGlobal.data_block}`}>
                <div className="col-3 text-center">
                  <h5 className={userGlobal.title_font}>{v.memberName}會員</h5>
                  <img
                    src={`${PUBLIC_URL}${v.memberImage}`}
                    className={userGlobal.img_cover_square_sm}
                    alt="保母頭像"
                  />
                </div>
                <div className="col-2 text-right">
                  <ul
                    className={`${userGlobal.list_styled} ${userGlobal.title_font}`}
                  >
                    <br />
                    <li>寵物名稱</li>
                    <li>會面地址</li>
                    <li>預約開始</li>
                    <li>預約結束</li>
                    <li>金額</li>
                  </ul>
                </div>
                <div className="col-5 text-left">
                  <ul
                    className={`${userGlobal.list_styled} ${userGlobal.content_font}`}
                  >
                    <br />
                    <li>{v.petName}</li>
                    <li>
                      {v.district}
                      {v.address}
                    </li>
                    <li>{v.start}</li>
                    <li>{v.end}</li>
                    <li>{v.price}</li>
                  </ul>
                </div>
              </div>
            </section>
          )
        })
      )}
    </>
  )
}

export default PetSitterRecordGlobalJsx
