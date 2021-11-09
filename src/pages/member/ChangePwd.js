import React from 'react'
import AsideNavbar from '../../components/member/AsideNavbar'
import NavBar from '../../components/golbal/NavBar'
import Footer from '../../components/golbal/Footer'

// css
import userGlobal from '../../styles/user-global.module.scss'

function ChangePwd(props) {
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
            <div className={`shadow ${userGlobal.frame}`}>
              <section>
                <div className="row align-items-center">
                  <div className="col">
                    <h3>更改密碼</h3>
                    <p>為了保護你帳號的安全，請不要分享你的密碼給其他人</p>
                  </div>
                </div>
              </section>
              <hr />
              <section className="m-3">
                <div className="row">
                  <div className={`col-4 text-right ${userGlobal.title_font}`}>
                    <ul className={userGlobal.list_styled}>
                      <li className="my-4">現在的密碼</li>
                      <li className="my-4">新的密碼</li>
                      <li className="my-4">確認密碼</li>
                    </ul>
                  </div>
                  <div className="col-5">
                    <div class=" input-group my-4">
                      <input type="password" class="form-control" />
                    </div>
                    <div class=" input-group my-4">
                      <input type="password" class="form-control" />
                    </div>
                    <div class=" input-group my-4">
                      <input type="password" class="form-control" />
                    </div>
                    <button type="button" className="btn btn-primary btn-woof">
                      送出
                    </button>
                  </div>
                  <div className="col-3"></div>
                </div>
                <div className={userGlobal.Bottom_blank}></div>
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

export default ChangePwd
