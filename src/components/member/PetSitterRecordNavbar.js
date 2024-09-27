import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// css
import styles from '../../styles/record.module.scss'

function PetSitterRecordNavbar(props) {
  // const [handleColor, setHandleColor] = props
  // console.log('0', props)

  return (
    <>
      {/*標題區塊*/}
      <section>
        <div className={`d-inline-block shadow ${styles.right_navbar_frame}`}>
          <ul className={`d-flex ${styles.right_navbar_list_styled}`}>
            <li>
              <Link
                exact
                to="/petsitter/record/carryout"
                // className={handleColor && styles.control_nav}
                onClick={() => {
                  // setHandleColor(true)
                  // setHandleColor1(false)
                  // setHandleColor2(false)
                }}
              >
                交易進行中
              </Link>
            </li>
            <li>
              <Link
                exact
                to="/petsitter/record/complete"
                // className={handleColor1 && styles.control_nav}
                onClick={() => {
                  // setHandleColor(false)
                  // setHandleColor1(true)
                  // setHandleColor2(false)
                }}
              >
                交易已完成
              </Link>
            </li>
            <li>
              <Link
                exact
                to="/petsitter/record/cancel"
                // className={handleColor2 && styles.control_nav}
                onClick={() => {
                  // setHandleColor(false)
                  // setHandleColor1(false)
                  // setHandleColor2(true)
                }}
              >
                已取消訂單
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default PetSitterRecordNavbar
