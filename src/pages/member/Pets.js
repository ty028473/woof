import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import GlobalJsx from '../../components/member/GlobalJsx'
import moment from 'moment'
import axios from 'axios'
import swal from 'sweetalert'
import { API_URL, PUBLIC_URL } from '../../configs/Config'
// css
import userGlobal from '../../styles/user-global.module.scss'

// icon
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Pets() {
  const [petData, setPetData] = useState([
    {
      id: 0,
      name: '',
      gender: 0,
      birthday: 0,
      information: '',
      image: '',
    },
  ])
  console.log(petData)
  // 抓取寵物資料
  useEffect(() => {
    async function getPetData() {
      let res = await axios.get(`${API_URL}/pet`, { withCredentials: true })
      setPetData(res.data)
    }
    getPetData()
  }, [petData.length])

  return (
    <>
      <GlobalJsx>
        {/*標題區塊*/}
        <section>
          <div className="row align-items-center">
            <div className="col">
              <h3>寵物資料一覽</h3>
              <p>管理你的寵物資料</p>
            </div>
            <div className="col text-right">
              <Link to="/member/pets/add" className="btn btn-primary btn-woof">
                新增寵物
              </Link>
            </div>
          </div>
        </section>
        <hr />
        {/*功能區塊*/}

        {petData.length === 0 || petData[0].name === '' ? (
          <section>
            <div className={`row align-items-center ${userGlobal.no_data}`}>
              <div className="col text-center">
                <h3>您目前尚無寵物</h3>
              </div>
            </div>
          </section>
        ) : (
          petData.map((v, index) => {
            // 顯示性別
            let handleGender
            if (v.gender === 1) {
              handleGender = '公'
            } else if (v.gender === 2) {
              handleGender = '母'
            } else {
              handleGender = '不顯示'
            }
            return (
              <section className="m-4">
                <div
                  className={`row my-3 position-relative ${userGlobal.data_block}`}
                  key={v.id}
                >
                  {/* <div className="col-3 text-right"> */}
                  <div className={`col-3 position-relative`}>
                    <div className={userGlobal.img_center}>
                      <img
                        src={`${PUBLIC_URL}${v.image}`}
                        className={userGlobal.img_cover_square_sm}
                        alt="寵物頭像"
                      />
                    </div>
                  </div>

                  <div className="col-3 text-center">
                    <ul
                      className={`${userGlobal.list_styled} ${userGlobal.title_font}`}
                    >
                      <li className="fontsize">寵物名稱</li>
                      <li>寵物性別</li>
                      <li>寵物歲數</li>
                      <li>詳細資料</li>
                    </ul>
                  </div>
                  <div className="col-6 text-left">
                    <ul
                      className={`${userGlobal.list_styled} ${userGlobal.content_font}`}
                    >
                      <li>{v.name}</li>
                      <li>{handleGender}</li>
                      <li>{moment().format('YYYY') - v.birthday}</li>
                      <li>{v.information}</li>
                    </ul>
                  </div>

                  <Link
                    to={{ pathname: '/member/pets/update', state: { data: v } }}
                  >
                    <div className={userGlobal.icon_edit}>
                      <FontAwesomeIcon
                        icon={faEdit}
                        size="lg"
                        className={userGlobal.icon_cursor}
                      />
                    </div>
                  </Link>

                  <div className={userGlobal.icon_trash}>
                    <FontAwesomeIcon
                      icon={faTrash}
                      size="lg"
                      className={userGlobal.icon_cursor}
                      onClick={async () => {
                        try {
                          let res = await axios.post(
                            `${API_URL}/pet/deletePet`,
                            v,
                            {
                              withCredentials: true,
                            }
                          )

                          swal({
                            title: '寵物刪除成功',
                            text: ' ',
                            icon: 'success',
                            buttons: false,
                            timer: 1000,
                          }).then(() => {
                            let deletePet = [...petData]
                            deletePet.splice(index, 1)
                            console.log('index', index)
                            setPetData(deletePet)
                          })
                        } catch (err) {
                          console.log(err)
                        }
                      }}
                    />
                  </div>
                </div>
              </section>
            )
          })
        )}
      </GlobalJsx>
    </>
  )
}

export default Pets
