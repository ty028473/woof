import React from 'react'
import AsideNavbar from '../../components/member/AsideNavbar'
import RecordNavbar from '../../components/member/RecordNavbar'
import RecordData from '../../components/member/RecordData'
import NavBar from '../../components/golbal/NavBar'
import Footer from '../../components/golbal/Footer'
// css
import styles from '../../styles/record.module.scss'

function RecordCancel(props) {
  return (
    <>
      {/* navbar區塊 */}
      <NavBar />
      {/* 主要區塊 */}
      <div className="container">
        <div className="row m-5">
          {/* 左側navbar */}
          <aside className="col-2">
            <AsideNavbar />
          </aside>
          {/* 右側content */}
          <main className="col-10">
            <RecordNavbar />
            {/*功能區塊*/}
            <div className={`shadow ${styles.frame}`}>
              <section className="m-3">
                <div className={`row ${styles.data_block}`}>
                  <RecordData />
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

export default RecordCancel