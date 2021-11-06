import React from 'react'
import AsideNavbar from '../../components/member/AsideNavbar'
import MemberData from '../../components/member/MemberData'
import NavBar from '../../components/golbal/NavBar'
import Footer from '../../components/golbal/Footer'

function Member(props) {
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
            <MemberData />
          </main>
        </div>
      </div>
      {/* footer區塊 */}
      <Footer />
    </>
  )
}

export default Member
