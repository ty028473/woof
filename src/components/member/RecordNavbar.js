import React from 'react'
import { Link } from 'react-router-dom'

// css
import styles from '../../styles/record.module.scss'

function RecordNavbar(props) {
  return (
    <>
      {/*標題區塊*/}
      <section>
        <div className={`d-inline-block shadow ${styles.right_navbar_frame}`}>
          <ul className={`d-flex ${styles.right_navbar_list_styled}`}>
            <li>
              <Link exact to="/member/record/carryout">
                交易進行中
              </Link>
            </li>
            <li>
              <Link exact to="/member/record/complete">
                交易已完成
              </Link>
            </li>
            <li>
              <Link exact to="/member/record/cancel">
                已取消訂單
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default RecordNavbar
