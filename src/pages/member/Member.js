import React from 'react'
import '../../styles/member.scss'
import AsideNavbar from '../../components/member/AsideNavbar'
import MemberData from '../../components/member/MemberData'
import NavBar from '../../components/golbal/NavBar'
import Footer from '../../components/golbal/Footer'

function Member(props) {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row m-5">
          <AsideNavbar />
          <main className="col-10">
            <div className="frame shadow">
              <MemberData />
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Member
