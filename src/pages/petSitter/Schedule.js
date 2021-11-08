import React from 'react'
import AsideNavbarSitter from '../../components/member/AsideNavbarSitter'
import NavBar from '../../components/golbal/NavBar'
import Footer from '../../components/golbal/Footer'

import DemoApp from '../../components/calendar2/calendar'

// css
import userGlobal from '../../styles/user-global.module.scss'

function Schedule(props) {
  return (
    <>
      {/* navbar區塊 */}
      <NavBar />
      {/* 主要區塊 */}
      <div className="container">
        <div className="row m-5">
          {/* 左側navbar */}
          <aside className="col-2">
            <AsideNavbarSitter />
          </aside>
          {/* 右側content */}
          <main className="col-10">
            <div className={`shadow ${userGlobal.frame}`}>
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
            </div>
          </main>
        </div>
      </div>
      {/* footer區塊 */}
      <Footer />
    </>
  )
}

export default Schedule
