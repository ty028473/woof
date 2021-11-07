import React from 'react'

// css
import styles from '../../styles/record.module.scss'

function RecordPopup(props) {
  return props.trigger ? (
    <>
      <div className={styles.popup}>
        <div className={styles.popup_inner}>
          <h3 className="mb-4">評價此訂單</h3>
          <div className="row">
            <div className="col-4 text-center">
              <h5 className={styles.title_font}>林海海保母</h5>
              <img
                src="https://kpopthing.com/wp-content/uploads/2021/03/Yes-i-an-sana-making.jpg"
                className={styles.img_cover_sm}
                alt="寵物頭像"
              />
            </div>
            <div className="col-2 text-right">
              <ul className={`${styles.list_styled} ${styles.title_font}`}>
                <li>地址</li>
                <li>預約時間</li>
                <li>金額</li>
              </ul>
            </div>
            <div className="col-6 text-left">
              <ul className={styles.list_styled}>
                <li>台北市中正區中山北路115號</li>
                <li>2021/06/23 (五) 下午 13:00-17:00</li>
                <li>500</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col text-center">
              <h1>(未做)星星評價區塊</h1>
            </div>
          </div>
          <div className="row">
            <div className="col text-center">
              <textarea
                name=""
                id=""
                cols="50"
                rows="5"
                placeholder="對保母說些什麼吧"
              ></textarea>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col text-right">
              <button
                className="btn btn-info btn-woof"
                onClick={() => {
                  props.setTrigger(false)
                }}
              >
                取消
              </button>
            </div>
            <div className="col">
              <button type="button" className="btn btn-primary btn-woof">
                送出
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    ''
  )
}

export default RecordPopup
