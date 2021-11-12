import React from 'react'
import GlobalJsx from '../../components/member/GlobalJsx'
// css
import styles from '../../styles/member.module.scss'
import userGlobal from '../../styles/user-global.module.scss'

function Member() {
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
            <div className="row">
              <div className="col-2 text-center">
                <ul
                  className={`${userGlobal.list_styled} ${userGlobal.title_font}`}
                >
                  <li className="my-4">帳號</li>
                  <li className="my-4">姓名</li>
                  <li className="my-4">電話</li>
                  <li className="my-4">生日</li>
                  <li className="my-4">性別</li>
                </ul>
              </div>
              <div className="col-6">
                <ul className={styles.control_lh}>
                  <li className="my-4">mockup01@gmail.com</li>
                  <li className="my-4">
                    <div className="input-group my-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                      />
                    </div>
                  </li>
                  <li className="my-4">
                    <div className="input-group my-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                      />
                    </div>
                  </li>
                  <li className="my-4">
                    <div className="input-group my-4">
                      <input
                        type="date"
                        className="form-control"
                        placeholder="生日"
                      />
                    </div>
                  </li>
                  <li className="my-4">
                    <div className="input-group my-4">
                      <select className="custom-select">
                        <option selected>性別</option>
                        <option value="1">男</option>
                        <option value="2">女</option>
                        <option value="3">不顯示</option>
                      </select>
                    </div>
                  </li>
                </ul>

                <button type="button" className="btn btn-primary btn-woof">
                  送出
                </button>
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
