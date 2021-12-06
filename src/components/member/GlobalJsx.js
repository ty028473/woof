import React, { useState } from 'react'
import NewNavBar from '../../components/golbal/NewNavBar'
import Footer from '../golbal/Footer'
import AsideNavbar from './AsideNavbar'
import AsideNavbarSitter from './AsideNavbarSitter'
import RecordNavbar from './RecordNavbar'
import PetSitterRecordNavbar from './PetSitterRecordNavbar'
import { withRouter } from 'react-router-dom'
// css
import userGlobal from '../../styles/user-global.module.scss'

function GlobalJsx(props) {
  // 判斷navbar要顯示會員還是保母版本
  const splitUrl = props.match.url.split('/')
  const userExistUrl = splitUrl.indexOf('member')

  const petSitterExistUrl = splitUrl.indexOf('petsitter')

  // 判斷要不要顯示RecordNavbar
  const recordExistUrl = splitUrl.indexOf('record')

  let handleRecordNavbar
  if (recordExistUrl > 0 && userExistUrl >= 0) {
    handleRecordNavbar = <RecordNavbar />
  } else if (recordExistUrl > 0 && petSitterExistUrl >= 0) {
    handleRecordNavbar = <PetSitterRecordNavbar />
  }
  return (
    <>
      {/* navbar區塊 */}
      <NewNavBar />
      {/* 主要區塊 */}
      <div className="container">
        <div className="row m-5">
          {/* 左側navbar */}
          <aside className="col-2">
            {/* <AsideNavbar /> */}
            {userExistUrl >= 0 ? <AsideNavbar /> : <AsideNavbarSitter />}
          </aside>
          {/* 右側content */}
          <main className="col-10">
            {/*判斷要不要顯示RecordNavbar*/}
            {handleRecordNavbar}
            {/*功能區塊*/}
            <div className={`shadow ${userGlobal.frame}`}>{props.children}</div>
          </main>
        </div>
      </div>
      {/* footer區塊 */}
      <Footer />
    </>
  )
}

export default withRouter(GlobalJsx)
