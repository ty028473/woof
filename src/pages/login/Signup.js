import React from 'react'
import '../../styles/golbal.scss'
import '../../styles/signup.scss'
import NavBar from '../../components/golbal/NavBar'
import Footer from '../../components/golbal/Footer'

function Signup(props) {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row signup-bg-block shadow">
          <div className="col-5">
            <img
              className="signup-img"
              src="../../../images/login/login.png"
              alt="signup"
            />
          </div>
          <div className="col-5 signup-block">
            <ul className="signup-list-styled">
              <li>
                <h5>創建帳號</h5>
                如果您已經有帳號，請直接點擊登入
              </li>
              <li>
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="姓名" />
                </div>
              </li>
              <li>
                <div class=" input-group">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                  />
                </div>
              </li>
              <li>
                <div class=" input-group">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="密碼"
                  />
                </div>
              </li>
              <li>
                <div class=" input-group">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="再次確認密碼"
                  />
                </div>
              </li>
              <li>
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="電話號碼"
                  />
                </div>
              </li>
              <li>
                <div class="input-group">
                  <input type="date" class="form-control" placeholder="生日" />
                </div>
              </li>
              <li>
                <div class="input-group mb-3">
                  <select class="custom-select">
                    <option selected>請選擇性別</option>
                    <option value="1">男</option>
                    <option value="2">女</option>
                  </select>
                </div>
              </li>
              <li>
                <button type="button" className="col btn btn-primary  btn-woof">
                  註冊
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Signup
