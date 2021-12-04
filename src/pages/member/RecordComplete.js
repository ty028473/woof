import React, { useState } from 'react'
import GlobalJsx from '../../components/member/GlobalJsx'
import RecordGlobalJsx from '../../components/member/RecordGlobalJsx'
import PopupEvaluate from '../../components/member/PopupEvaluate'

// css
import styles from '../../styles/record.module.scss'

function RecordComplete() {
  const [modalShow, setModalShow] = useState(false)
  return (
    <>
      <GlobalJsx>
        <RecordGlobalJsx>
          <button
            type="button"
            className={`btn btn-secondary btn-woof-Chat ${styles.record_button_position}`}
            onClick={() => setModalShow(true)}
          >
            評價訂單
          </button>
          <PopupEvaluate show={modalShow} onHide={() => setModalShow(false)} />
        </RecordGlobalJsx>
      </GlobalJsx>
    </>
  )
}

export default RecordComplete
