import React, { useState, useEffect, useRef } from 'react'
import GlobalJsx from '../../components/member/GlobalJsx'
import axios from 'axios'
import swal from 'sweetalert'
import { API_URL, PUBLIC_URL } from '../../configs/Config'

// css
import styles from '../../styles/member.module.scss'
import userGlobal from '../../styles/user-global.module.scss'

function Member() {
  const [memberData, setMemberData] = useState({
    email: '',
    name: '',
    phone: '',
    birthday: '',
    gender: '',
    image: '',
    totalBonus: 0,
    useBonus: 0,
    orderTimes: 0,
  })
  console.log('Member', memberData)

  // 圖片處理
  const fileInputRef = useRef()
  const [preview, setPreview] = useState('')
  const [uploadImage, setuploadImage] = useState(null)

  // 抓取會員資料
  useEffect(() => {
    async function getMemberData() {
      let res = await axios.get(`${API_URL}/member`, { withCredentials: true })
      setMemberData(res.data)
    }
    getMemberData()
  }, [])

  // 表單更新資料
  function handleChage(e) {
    setMemberData({ ...memberData, [e.target.name]: e.target.value })
  }

  function handleUpload(e) {
    const file = e.target.files[0]

    if (file && file.type.substr(0, 5) === 'image') {
      setuploadImage(file)
      setMemberData({ ...memberData, [e.target.name]: file })
    } else {
      setuploadImage(null)
    }
  }

  useEffect(() => {
    if (uploadImage) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result)
      }
      reader.readAsDataURL(uploadImage)
    } else {
      setPreview(null)
    }
  }, [uploadImage])

  // 送回後端
  async function handleSubmit(e) {
    e.preventDefault()
    try {
      let formData = new FormData()
      formData.append('name', memberData.name)
      formData.append('phone', memberData.phone)
      formData.append('birthday', memberData.birthday)
      formData.append('gender', memberData.gender)
      formData.append('image', memberData.image)
      let res = await axios.post(`${API_URL}/member/updateMember`, formData, {
        withCredentials: true,
      })
      swal({
        title: '會員資料修改成功',
        text: ' ',
        icon: 'success',
        buttons: false,
        timer: 1000,
      })
      // window.location.reload()
    } catch (err) {
      // 抓取錯誤訊息
      const errorsData = err.response.data.errors
      const errorsArray = errorsData.map((v) => v.msg)
      const errorShow = errorsArray.join(' ')

      swal({
        title: errorShow,
        text: ' ',
        icon: 'error',
        buttons: false,
        timer: 1000,
      })
    }
  }
  return (
    <>
      <GlobalJsx>
        {/* 標題區塊 */}
        <section>
          <div>
            <h3>我的檔案</h3>
            <p>管理你的檔案以保護你的帳戶</p>
          </div>
        </section>
        <hr />
        {/* 內容區塊 1 */}
        <section>
          <div className="mt-3">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-2 text-center">
                  <ul
                    className={`${userGlobal.list_styled} ${userGlobal.title_font}`}
                  >
                    <li className="my-4">
                      <label htmlFor="email">帳號</label>
                    </li>
                    <li className="my-4">
                      <label htmlFor="name">姓名</label>
                    </li>
                    <li className="my-4">
                      <label htmlFor="phone">電話</label>
                    </li>
                    <li className="my-4">
                      <label htmlFor="birthday">生日</label>
                    </li>
                    <li className="my-4">
                      <label htmlFor="gender">性別</label>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul className={userGlobal.list_styled}>
                    <li className="my-4">
                      <div className="from-group">
                        <input
                          id="email"
                          name="email"
                          type="text"
                          className={`form-control-plaintext ${styles.font_color}`}
                          value={memberData.email}
                        />
                      </div>
                    </li>
                    <li className="my-4">
                      <div className="from-group">
                        <input
                          id="name"
                          name="name"
                          type="text"
                          className="form-control"
                          value={memberData.name}
                          onChange={handleChage}
                        />
                      </div>
                    </li>
                    <li className="my-4">
                      <div className="from-group">
                        <input
                          id="phone"
                          name="phone"
                          type="text"
                          className="form-control"
                          value={memberData.phone}
                          onChange={handleChage}
                        />
                      </div>
                    </li>
                    <li className="my-4">
                      <div className="from-group">
                        <input
                          id="birthday"
                          name="birthday"
                          type="date"
                          className="form-control"
                          value={memberData.birthday}
                          onChange={handleChage}
                        />
                      </div>
                    </li>
                    <li className="my-4">
                      <div className="from-group">
                        <select
                          id="gender"
                          name="gender"
                          className="form-control"
                          value={memberData.gender}
                          onChange={handleChage}
                        >
                          <option value="1">男</option>
                          <option value="2">女</option>
                          <option value="3">不顯示</option>
                        </select>
                      </div>
                    </li>
                  </ul>

                  <button className="btn btn-primary btn-woof">送出</button>
                </div>
                <div className="col-4 text-center">
                  <div>
                    {uploadImage ? (
                      <img
                        src={preview}
                        className={userGlobal.img_cover_lg}
                        alt="會員大頭像"
                      />
                    ) : (
                      <img
                        src={`${PUBLIC_URL}${memberData.image}`}
                        className={userGlobal.img_cover_lg}
                        alt="會員預設頭像"
                      />
                    )}

                    <br />
                    <br />
                    <div className="from-group">
                      {/* <label
                        htmlFor="image"
                        className="btn btn-primary btn-woof"
                      >
                        上傳圖片
                      </label> */}
                      <button
                        className="btn btn-primary btn-woof"
                        onClick={(e) => {
                          e.preventDefault()
                          fileInputRef.current.click()
                        }}
                      >
                        上傳圖片
                      </button>
                      <input
                        id="image"
                        name="image"
                        type="file"
                        accept="image/jpeg,image/png"
                        className="d-none"
                        onChange={handleUpload}
                        ref={fileInputRef}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
        {/* 內容區塊 2 */}
        <section>
          <div className="mt-2 mx-5">
            <div className={`row text-center p-5 ${styles.record_block}`}>
              <div className="col">
                <h5>預約次數</h5>
                <h5>{memberData.orderTimes}</h5>
              </div>
              <div className={`col ${styles.divider}`}>
                <h5>剩餘紅利</h5>
                <h5>{memberData.totalBonus}</h5>
              </div>
              <div className="col">
                <h5>已折抵紅利</h5>
                <h5>{memberData.useBonus}</h5>
              </div>
            </div>
          </div>
        </section>
      </GlobalJsx>
    </>
  )
}

export default Member
