import React from 'react'
import AsideNavbar from '../../components/member/AsideNavbar'
import NavBar from '../../components/golbal/NavBar'
import Footer from '../../components/golbal/Footer'

// css
import styles from '../../styles/pets.module.scss'

function PetsAdd(props) {
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
              {/* 標題區塊 */}
              <section>
                <div>
                  <h3>新增寵物</h3>
                  <p>讓保母更了解您的寵物</p>
                </div>
              </section>
              <hr />
              {/* 內容區塊 1 */}
              <section>
                <div className="mt-4">
                  <div className="row">
                    <div className={`col-2 text-center ${styles.title_font}`}>
                      <ul className={styles.list_styled}>
                        <li className="my-4">寵物名稱</li>
                        <li className="my-4">性別</li>
                        <li className="my-4">歲數</li>
                        <li className="my-4">詳細資料</li>
                      </ul>
                    </div>
                    <div className="col-6">
                      {/* <li>mockup01@gmail.com</li> */}
                      <div class="input-group my-4">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Username"
                        />
                      </div>
                      <div class="input-group my-4">
                        <select class="custom-select">
                          <option selected>性別</option>
                          <option value="1">公</option>
                          <option value="2">母</option>
                          <option value="3">不顯示</option>
                        </select>
                      </div>
                      <div class="input-group my-4">
                        <input
                          type="date"
                          class="form-control"
                          placeholder="生日"
                        />
                      </div>
                      <div class="input-group my-4">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Username"
                        />
                      </div>
                      <button
                        type="button"
                        className="btn btn-primary btn-woof"
                      >
                        送出
                      </button>
                    </div>
                    <div className="col-4 text-center">
                      <div>
                        <img
                          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
                          className={styles.img_cover_lg}
                          alt="會員大頭像"
                        />
                        <br />
                        <br />
                        <button
                          type="button"
                          className="btn btn-primary btn-woof"
                        >
                          上傳圖片
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.Bottom_blank}></div>
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

export default PetsAdd
