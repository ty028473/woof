import React, { useState, useEffect } from 'react'
import GlobalJsx from '../../components/member/GlobalJsx'
import axios from 'axios'
import { API_URL } from '../../configs/Config'

// css
import styles from '../../styles/member.module.scss'
import userGlobal from '../../styles/user-global.module.scss'

function Member() {
  const [memberData, setMemberData] = useState({})

  // 抓取資料
  useEffect(() => {
    async function getMemberData() {
      let res = await axios.get(`${API_URL}/member`)
      setMemberData(res.data)
    }
    getMemberData()
  }, [])

  // 表單更新資料
  function handleChage(e) {
    setMemberData({ ...memberData, [e.target.name]: e.target.value })
  }

  // 送回後端
  async function handleSubmit(e) {
    e.preventDefault()
    try {
      let req = await axios.post(`${API_URL}/member/auth`, memberData)
    } catch (e) {
      console.log(e)
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
                    <img
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                      className={userGlobal.img_cover_lg}
                      alt="會員大頭像"
                    />
                    <br />
                    <br />
                    <button type="button" className="btn btn-primary btn-woof">
                      上傳圖片
                    </button>
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
                <h5>5</h5>
              </div>
              <div className={`col ${styles.divider}`}>
                <h5>累積紅利</h5>
                <h5>30</h5>
              </div>
              <div className="col">
                <h5>已折抵紅利</h5>
                <h5>60</h5>
              </div>
            </div>
          </div>
        </section>
      </GlobalJsx>
    </>
  )
}

export default Member
