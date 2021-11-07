import React from 'react'
import AsideNavbar from '../../components/member/AsideNavbar'
import RecordNavbar from '../../components/member/RecordNavbar'
import NavBar from '../../components/golbal/NavBar'
import Footer from '../../components/golbal/Footer'
import { withRouter } from 'react-router-dom'
// css
import styles from '../../styles/record.module.scss'

function RecordCarryOut(props) {
  console.log('props', props)
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
            <div className={`shadow ${styles.frame}`}>
              <section className="m-3">
                <div className={`row ${styles.data_block}`}>
                  <div className="col-3 text-center">
                    <h5 className={styles.title_font}>林海海保母</h5>
                    <img
                      src="https://kpopthing.com/wp-content/uploads/2021/03/Yes-i-an-sana-making.jpg"
                      className={styles.img_cover_sm}
                      alt="寵物頭像"
                    />
                  </div>
                  <div className="col-2 text-right">
                    <ul
                      className={`${styles.list_styled} ${styles.title_font}`}
                    >
                      <li>地址</li>
                      <li>預約時間</li>
                      <li>金額</li>
                    </ul>
                  </div>
                  <div className="col-5 text-left">
                    <ul className={styles.list_styled}>
                      <li>台北市中正區中山北路115號</li>
                      <li>2021/06/23 (五) 下午 13:00-17:00</li>
                      <li>500</li>
                    </ul>
                  </div>
                  <div className="col-2">
                    <button
                      type="button"
                      className="btn btn-secondary mb-5 btn-woof-Chat"
                    >
                      聊聊
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger mt-4 btn-woof-Chat"
                    >
                      取消
                    </button>
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

export default withRouter(RecordCarryOut)
