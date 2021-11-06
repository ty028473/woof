import React from 'react'
import styles from '../../styles/record.module.scss'

function RecordCarryOut(props) {
  return (
    <>
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
              <div className="col-2 text-center">
                <ul className={styles.title_list_styled}>
                  <li>寵物名稱</li>
                  <li>性別</li>
                  <li>歲數</li>
                  <li>詳細資料</li>
                </ul>
              </div>
              <div className="col-6">
                <ul className={styles.input_list_styled}>
                  <li className="mb-1">
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Username"
                      />
                    </div>
                  </li>
                  <li>
                    <div class="input-group mb-3">
                      <select class="custom-select">
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </li>
                  <li>
                    <div class="input-group mb-3">
                      <select class="custom-select">
                        <option selected>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </li>
                  <li>
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Username"
                      />
                    </div>
                  </li>
                </ul>
                <button type="button" className="btn btn-primary btn-woof">
                  送出
                </button>
              </div>
              <div className="col-4 text-center">
                <div className="mb-3">
                  <img
                    src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
                    className={styles.img_cover_lg}
                    alt="會員大頭像"
                  />
                </div>
                <button type="button" className="btn btn-primary btn-woof">
                  上傳圖片
                </button>
              </div>
            </div>
          </div>
          <div className={styles.Bottom_blank}></div>
        </section>
      </div>
    </>
  )
}

export default RecordCarryOut
