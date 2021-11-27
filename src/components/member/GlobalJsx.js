import React from 'react'
import NavBar from '../golbal/NavBar'
import NewNavBar from '../../components/golbal/NewNavBar'
import Footer from '../golbal/Footer'
import AsideNavbar from './AsideNavbar'
import AsideNavbarSitter from './AsideNavbarSitter'
import RecordNavbar from './RecordNavbar'
import { withRouter } from 'react-router-dom'
// css
import userGlobal from '../../styles/user-global.module.scss'

function GlobalJsx(props) {
  const { memberData } = props
  // 判斷navbar要顯示會員還是保母版本
  const splitUrl = props.match.url.split('/')
  const userExistUrl = splitUrl.indexOf('member')
  let controlMemberNavbar
  if (userExistUrl >= 0) {
    controlMemberNavbar = <AsideNavbar memberData={memberData} />
  } else {
    controlMemberNavbar = <AsideNavbarSitter />
  }

  // 判斷要不要顯示RecordNavbar
  const recordExistUrl = splitUrl.indexOf('record')

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
            {controlMemberNavbar}
          </aside>
          {/* 右側content */}
          <main className="col-10">
            {/*判斷要不要顯示RecordNavbar*/}
            {recordExistUrl > 0 && <RecordNavbar />}
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
