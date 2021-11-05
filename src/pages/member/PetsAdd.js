import React from 'react'
import AsideNavbar from '../../components/member/AsideNavbar'
import AddPet from '../../components/member/AddPet'
import NavBar from '../../components/golbal/NavBar'
import Footer from '../../components/golbal/Footer'

function PetsAdd(props) {
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
            <AddPet />
          </main>
        </div>
      </div>
      {/* footer區塊 */}
      <Footer />
    </>
  )
}

export default PetsAdd
