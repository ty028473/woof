import React, { useState } from 'react'
import NavBar from '../../components/golbal/NavBar'
import Footer from '../../components/golbal/Footer'
import AsideNavbar from '../../components/member/AsideNavbar'
import RecordNavbar from '../../components/member/RecordNavbar'
import PopupEvaluate from '../../components/member/PopupEvaluate'

// css
import styles from '../../styles/record.module.scss'
import userGlobal from '../../styles/user-global.module.scss'

function RecordComplete(props) {
  const [modalShow, setModalShow] = useState(false)
  return (
    <>
      {/* navbar區塊 */}
      <NavBar />
      {/* 主要區塊 */}
      <div className="container">
        <div className="row m-5">
          {/* 左側navbar */}
          <aside className="col-2">
            <AsideNavbar />
          </aside>
          {/* 右側content */}
          <main className="col-10">
            <RecordNavbar />
            {/*功能區塊*/}
            <div className={`shadow ${userGlobal.frame}`}>
              <section className="m-3">
                <div className={`row ${userGlobal.data_block}`}>
                  <div className="col-3 text-center">
                    <h5 className={userGlobal.title_font}>林海海保母</h5>
                    <img
                      src="https://kpopthing.com/wp-content/uploads/2021/03/Yes-i-an-sana-making.jpg"
                      className={userGlobal.img_cover_square_sm}
                      alt="保母頭像"
                    />
                  </div>
                  <div className="col-2 text-right">
                    <ul
                      className={`${userGlobal.list_styled} ${userGlobal.title_font}`}
                    >
                      <br />
                      <li>地址</li>
                      <li>預約時間</li>
                      <li>金額</li>
                    </ul>
                  </div>
                  <div className="col-5 text-left">
                    <ul
                      className={`${userGlobal.list_styled} ${userGlobal.content_font}`}
                    >
                      <br />
                      <li>台北市中正區中山北路115號</li>
                      <li>2021/06/23 (五) 下午 13:00-17:00</li>
                      <li>500</li>
                    </ul>
                  </div>
                  <div className={`col-2 ${styles.record_button}`}>
                    <button
                      type="button"
                      className={`btn btn-secondary btn-woof-Chat ${styles.record_button_position}`}
                      onClick={() => setModalShow(true)}
                    >
                      評價訂單
                    </button>
                    <PopupEvaluate
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
      {/* footer區塊 */}
      <Footer />
    </>
  )
}

export default RecordComplete
