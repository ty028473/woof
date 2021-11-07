import React from 'react'
import styles from '../../styles/record.module.scss'

function RecordData(props) {
  return (
    <>
      <div className="col-3 text-center">
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
      <div className="col-5 text-left">
        <ul className={styles.list_styled}>
          <li>台北市中正區中山北路115號</li>
          <li>2021/06/23 (五) 下午 13:00-17:00</li>
          <li>500</li>
        </ul>
      </div>
    </>
  )
}

export default RecordData
