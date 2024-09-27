import React from 'react'
import GlobalJsx from '../../components/member/GlobalJsx'
import DemoApp from '../../components/calendar2/petsitterCalendar'

function Schedule() {
  return (
    <>
      <GlobalJsx>
        {/* 標題區塊 */}
        <section>
          <div>
            <h3>我的工作排程</h3>
            <p>自訂你的工作時間以及金額</p>
          </div>
        </section>
        <hr />
        {/* 內容區塊 1 */}
        <section>
          <div className="mt-3">
            <DemoApp />
          </div>
        </section>
      </GlobalJsx>
    </>
  )
}

export default Schedule
