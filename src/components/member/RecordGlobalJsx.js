import React from 'react'

// css
import styles from '../../styles/record.module.scss'
import userGlobal from '../../styles/user-global.module.scss'

function RecordGlobalJsx(props) {
  return (
    <>
      <section className="m-3">
        <div className={`row ${userGlobal.data_block}`}>
          <div className="col-3 text-center">
            <h5 className={userGlobal.title_font}>林海海保母</h5>
            <img
              src="https://kpopthing.com/wp-content/uploads/2021/03/Yes-i-an-sana-making.jpg"
              className={userGlobal.img_cover_square_sm}
              alt="寵物頭像"
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
            {props.children}
          </div>
        </div>
      </section>
    </>
  )
}

export default RecordGlobalJsx
