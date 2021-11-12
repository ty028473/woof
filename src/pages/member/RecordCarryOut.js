import React from 'react'
import GlobalJsx from '../../components/member/GlobalJsx'
import RecordGlobalJsx from '../../components/member/RecordGlobalJsx'

// css
import styles from '../../styles/record.module.scss'

function RecordCarryOut() {
  return (
    <>
      <GlobalJsx>
        <RecordGlobalJsx>
          <button
            type="button"
            className={`btn btn-secondary btn-woof-Chat ${styles.record_button_position_01}`}
          >
            聊聊
          </button>
          <button
            type="button"
            className={`btn btn-info btn-woof ${styles.record_button_position}`}
          >
            取消
          </button>
        </RecordGlobalJsx>
      </GlobalJsx>
    </>
  )
}

export default RecordCarryOut
