import React from 'react'
import { Link } from 'react-router-dom'
import AsideNavbar from '../../components/member/AsideNavbar'
import NavBar from '../../components/golbal/NavBar'
import Footer from '../../components/golbal/Footer'

// css
import styles from '../../styles/pets.module.scss'

// icon
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Pets(props) {
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
              {/*標題區塊*/}
              <section>
                <div className="row align-items-center">
                  <div className="col">
                    <h3>寵物資料一覽</h3>
                    <p>管理你的寵物資料</p>
                  </div>
                  <div className="col text-right">
                    <Link
                      to="/member/pets/add"
                      className="btn btn-primary btn-woof"
                    >
                      新增寵物
                    </Link>
                  </div>
                </div>
              </section>
              <hr />
              {/*功能區塊*/}
              <section className="m-4">
                <div className={`row ${styles.data_block}`}>
                  <div className="col-3 text-right">
                    <img
                      src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
                      className={styles.img_cover_sm}
                      alt="寵物頭像"
                    />
                  </div>

                  <div className="col-3 text-center">
                    <ul className={styles.list_styled}>
                      <li className="fontsize">寵物名稱</li>
                      <li>寵物性別</li>
                      <li>寵物歲數</li>
                      <li>詳細資料</li>
                    </ul>
                  </div>
                  <div className="col-3 text-left">
                    <ul className={styles.list_styled}>
                      <li>雞腿</li>
                      <li>1998/08/18</li>
                      <li>公</li>
                      <li>更多詳細資訊</li>
                    </ul>
                  </div>
                  <div className="col-3">
                    <div className="row">
                      <div className="col text-right">
                        <FontAwesomeIcon icon={faEdit} size="lg" />
                      </div>
                      <div className="col text-left">
                        <FontAwesomeIcon icon={faTrash} size="lg" />
                      </div>
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

export default Pets
