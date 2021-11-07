import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../../components/golbal/NavBar'
import Footer from '../../components/golbal/Footer'
import AsideNavbar from '../../components/member/AsideNavbar'

// css
import styles from '../../styles/collection.module.scss'

// icon
import {
  faTrash,
  faStar,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Collection(props) {
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
            <div className={`shadow ${styles.frame}`}>
              <section>
                <div className="row align-items-center">
                  <div className="col">
                    <h3>保母收藏一覽</h3>
                    <p>管理你喜愛的保母資訊</p>
                  </div>
                  <div className="col text-right">
                    <Link
                      exact
                      to="/member/pets/add"
                      className="btn btn-primary btn-woof"
                    >
                      {/* 到時候看保母在哪頁換連結 */}
                      查看所有保母
                    </Link>
                  </div>
                </div>
              </section>
              <hr />
              <section className="m-3">
                <div className={styles.data_block}>
                  <div className="text-right">
                    <FontAwesomeIcon icon={faTrash} size="lg" />
                  </div>

                  <div className="row">
                    <div className="col-3">
                      <h5 className={styles.title_font}>林海海保母</h5>
                      <img
                        src="https://kpopthing.com/wp-content/uploads/2021/03/Yes-i-an-sana-making.jpg"
                        className={styles.img_cover_sm}
                        alt="寵物頭像"
                      />
                    </div>
                    <div className="col-1 p-0 text-center">
                      <ul
                        className={`${styles.list_styled} ${styles.title_font}`}
                      >
                        <li>技能</li>
                        <li>簡介</li>
                      </ul>
                    </div>
                    <div className="col-8">
                      <ul className={styles.list_styled}>
                        <li>PCP寵物照護員認證(基礎)</li>
                        <li>
                          本身體力不錯，常帶雇主的狗狗出門散步耗體力。目前其中1位雇主的狗體重24公斤，愛爆衝，但因為之前有帶多隻毛孩外出的經驗及長時間固定運動，因此可以控制住比較活潑好動的狗狗。在遛毛孩的同時，也會不定時拍照及拍影片回傳給飼主，讓飼主放心。
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
                      文山區
                      <br />
                      <FontAwesomeIcon icon={faStar} size="lg" />
                      評價星數
                    </div>
                    <div className="col-6 text-right">
                      <button
                        type="button"
                        className="btn btn-secondary btn-woof-Chat"
                      >
                        聊聊
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary btn-woof-Chat ml-3"
                      >
                        觀看更多
                      </button>
                    </div>
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

export default Collection
