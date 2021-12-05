import React, { useState } from 'react'
import PopupEvaluate from '../../components/member/PopupEvaluate'
import axios from 'axios'
import swal from 'sweetalert'
import { API_URL, PUBLIC_URL } from '../../configs/Config'
// css
import styles from '../../styles/record.module.scss'
import userGlobal from '../../styles/user-global.module.scss'

function RecordGlobalJsx(props) {
  const { memberRecordData } = props
  console.log('memberRecordData', memberRecordData)
  const [modalShow, setModalShow] = useState(false)

  return (
    <>
      {memberRecordData[0].petName === '' ? (
        <section>
          <div className={`row align-items-center ${userGlobal.no_data}`}>
            <div className="col text-center">
              <h3>您目前尚無訂單</h3>
            </div>
          </div>
        </section>
      ) : (
        memberRecordData.map((v) => {
          return (
            <section className="m-3" key={v.id}>
              <div className={`row ${userGlobal.data_block}`}>
                <div className="col-3 text-center">
                  <h5 className={userGlobal.title_font}>
                    {v.petSitterName}保母
                  </h5>
                  <img
                    src={`${PUBLIC_URL}${v.petSitterImage}`}
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
                <div className="col-4 text-left">
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
                {v.order_status === 2 && (
                  <div className={`col-3 ${styles.record_button}`}>
                    {/* {props.children} */}
                    <button
                      type="button"
                      className={`btn btn-secondary btn-woof-Chat ${styles.record_button_position}`}
                      onClick={() => {
                        setModalShow(true)
                        localStorage.removeItem('evaluationData')
                        localStorage.setItem(
                          'evaluationData',
                          JSON.stringify(v)
                        )
                      }}
                    >
                      評價
                    </button>
                    <PopupEvaluate
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                  </div>
                )}
                {v.order_status === 1 && (
                  <div className={`col-3 ${styles.record_button}`}>
                    {/* {props.children} */}
                    <button
                      className={`btn btn-primary btn-woof ${styles.record_button_position_01}`}
                      onClick={async () => {
                        try {
                          let res = await axios.post(
                            `${API_URL}/memberRecord/finish`,
                            v,
                            {
                              withCredentials: true,
                            }
                          )
                          swal({
                            title: '完成訂單 將通知保母',
                            text: ' ',
                            icon: 'success',
                            buttons: false,
                            timer: 1000,
                          }).then(() => {
                            window.location.reload()
                          })
                        } catch (err) {
                          console.log(err)
                        }
                      }}
                    >
                      完成
                    </button>
                    <button
                      className={`btn btn-info btn-woof ${styles.record_button_position}`}
                      onClick={async () => {
                        try {
                          let res = await axios.post(
                            `${API_URL}/memberRecord/cancelOrder`,
                            v,
                            {
                              withCredentials: true,
                            }
                          )
                          swal({
                            title: '已取消訂單 將通知保母',
                            text: ' ',
                            icon: 'success',
                            buttons: false,
                            timer: 1000,
                          }).then(() => {
                            window.location.reload()
                          })
                        } catch (err) {
                          console.log(err)
                        }
                      }}
                    >
                      取消
                    </button>
                  </div>
                )}
              </div>
            </section>
          )
        })
      )}
    </>
  )
}

export default RecordGlobalJsx
