import React, { useState, useEffect } from 'react'
import GlobalJsx from '../../components/member/GlobalJsx'
import axios from 'axios'
import swal from 'sweetalert'
import { API_URL, PUBLIC_URL } from '../../configs/Config'
// css
import styles from '../../styles/member.module.scss'
import userGlobal from '../../styles/user-global.module.scss'

function PetSitter() {
  const [petSitterData, setpetSitterData] = useState({
    // 會員資料
    email: '',
    name: '',
    phone: '',
    birthday: '',
    gender: '',
    // 保母會員資料
    district: '',
    address: '',
    skill: '',
    introduction: '',
    image: '',
  })

  useEffect(() => {
    async function getPetSitterData() {
      let res = await axios.get(`${API_URL}/petSitter`, {
        withCredentials: true,
      })
      setpetSitterData(res.data)
    }
    getPetSitterData()
  }, [])

  let handleGender
  if (petSitterData.gender === '1') {
    handleGender = '男'
  } else if (petSitterData.gender === '2') {
    handleGender = '女'
  } else {
    handleGender = '不顯示'
  }

  // 表單更新資料
  function handleChange(e) {
    setpetSitterData({ ...petSitterData, [e.target.name]: e.target.value })
  }

  // 送回後端
  async function handleSubmit(e) {
    e.preventDefault()
    try {
      let res = await axios.post(
        `${API_URL}/petSitter/updatepetSitter`,
        petSitterData,
        {
          withCredentials: true,
        }
      )
      swal({
        title: '保母會員資料修改成功',
        text: ' ',
        icon: 'success',
        buttons: false,
        timer: 2000,
      })
    } catch (err) {
      console.log(err)
    }
  }

  // 判斷圖片顯示
  let showImg
  if (typeof petSitterData.image === 'object') {
    showImg = (
      <img
        src="/images/person/noAvatar.png"
        className={userGlobal.img_cover_lg}
        alt="會員預設頭像"
      />
    )
  } else {
    showImg = (
      <img
        src={`${PUBLIC_URL}${petSitterData.image}`}
        className={userGlobal.img_cover_lg}
        alt="會員預設頭像"
      />
    )
  }
  return (
    <>
      <GlobalJsx>
        {/* 標題區塊 */}
        <section>
          <div>
            <h3>我的保母資料</h3>
            <p>管理你的保母資訊讓使用者更了解你</p>
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
                    {/* <li className="my-4">
                      <label htmlFor="email">帳號</label>
                    </li>
                    <li className="my-4">
                      <label htmlFor="name">姓名</label>
                    </li>
                    <li className="my-4">
                      <label htmlFor="phone">電話</label>
                    </li>
                    <li className="my-4">
                      <label htmlFor="gender">性別</label>
                    </li>
                    <li className="my-4">
                      <label htmlFor="birthday">生日</label>
                    </li> */}
                    <li className="my-4">
                      <label htmlFor="district">居住區</label>
                    </li>
                    <li className="my-4">
                      <label htmlFor="address">居住地</label>
                    </li>
                    <li className="my-4">
                      <label htmlFor="skill">技能</label>
                    </li>
                    <li className="my-5">
                      <label htmlFor="introduction">簡介</label>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul className={userGlobal.list_styled}>
                    {/* <li className="my-4">
                      <div className="from-group">
                        <input
                          id="email"
                          name="email"
                          type="text"
                          className={`form-control-plaintext ${styles.font_color}`}
                          value={petSitterData.email}
                        />
                      </div>
                    </li>
                    <li className="my-4">
                      <div className="from-group">
                        <input
                          id="name"
                          name="name"
                          type="text"
                          className={`form-control-plaintext ${styles.font_color}`}
                          value={petSitterData.name}
                        />
                      </div>
                    </li>
                    <li className="my-4">
                      <div className="from-group">
                        <input
                          id="phone"
                          name="phone"
                          type="text"
                          className={`form-control-plaintext ${styles.font_color}`}
                          value={petSitterData.phone}
                        />
                      </div>
                    </li>
                    <li className="my-4">
                      <div className="from-group">
                        <input
                          id="gender"
                          name="gender"
                          type="text"
                          className={`form-control-plaintext ${styles.font_color}`}
                          value={handleGender}
                        />
                      </div>
                    </li>
                    <li className="my-4">
                      <div className="from-group">
                        <input
                          id="date"
                          name="date"
                          type="text"
                          className={`form-control-plaintext ${styles.font_color}`}
                          value={petSitterData.birthday}
                        />
                      </div>
                    </li> */}
                    <li className="my-4">
                      <div className="from-group row">
                        <label
                          htmlFor="district"
                          className="col-3 col-form-label"
                        >
                          台北市
                        </label>
                        <div className="col-9">
                          <select
                            id="district"
                            name="district"
                            className="form-control"
                            value={petSitterData.district}
                            onChange={handleChange}
                          >
                            <option value="台北市中正區">中正區</option>
                            <option value="台北市大同區">大同區</option>
                            <option value="台北市中山區">中山區</option>
                            <option value="台北市松山區">松山區</option>
                            <option value="台北市大安區">大安區</option>
                            <option value="台北市萬華區">萬華區</option>
                            <option value="台北市信義區">信義區</option>
                            <option value="台北市士林區">士林區</option>
                            <option value="台北市北投區">北投區</option>
                            <option value="台北市內湖區">內湖區</option>
                            <option value="台北市南港區">南港區</option>
                            <option value="台北市文山區">文山區</option>
                          </select>
                        </div>
                      </div>
                    </li>
                    <li className="my-4">
                      <div className="from-group">
                        <input
                          id="address"
                          name="address"
                          type="text"
                          className="form-control"
                          value={petSitterData.address}
                          onChange={handleChange}
                        />
                      </div>
                    </li>
                    <li className="my-4">
                      <div class="form-group">
                        <textarea
                          className="form-control"
                          id="skill"
                          name="skill"
                          rows="2"
                          value={petSitterData.skill}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </li>
                    <li className="my-4">
                      <div class="form-group">
                        <textarea
                          className="form-control"
                          id="introduction"
                          name="introduction"
                          rows="2"
                          value={petSitterData.introduction}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </li>
                  </ul>
                  <button className="btn btn-primary btn-woof">送出</button>
                </div>
                <div className="col-4 text-center">
                  <div>
                    {/* 判斷圖片顯示 */}
                    {showImg}
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
                <h5>訂單筆數</h5>
                <h5>{petSitterData.orderTimes}</h5>
              </div>
              <div className={`col ${styles.divider}`}>
                <h5>累積金額</h5>
                <h5>{petSitterData.totalPrice}</h5>
              </div>
              <div className="col">
                <h5>評價</h5>
                <h5>
                  {petSitterData.avgScore}({petSitterData.evaluationTimes})
                </h5>
              </div>
            </div>
          </div>
        </section>
      </GlobalJsx>
    </>
  )
}

export default PetSitter
