import React from 'react'
import '../../styles/golbal.scss'
import '../../styles/login.scss'
import GoogleButton from 'react-google-button'
import NavBar from '../../components/golbal/NavBar'
import Footer from '../../components/golbal/Footer'

function Login(props) {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row login-bg-block shadow">
          <div className="col-5">
            <img
              className="login-img"
              src="../../../images/login/login.png"
              alt="立即預約"
            />
          </div>
          <div className="col-5 login-block">
            <ul className="login-list-styled">
              <li>
                <h5>會員登入</h5>
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
                <button type="button" className="col btn btn-primary  btn-woof">
                  登入
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="col btn btn-secondary btn-woof"
                >
                  註冊
                </button>
              </li>
              <li className="text-center">
                <a href="#/" alt="忘記密碼">
                  忘記密碼?
                </a>
              </li>
              <li>
                <GoogleButton
                  type="light"
                  label="使用Google登入"
                  onClick={() => {
                    console.log('Google button clicked')
                  }}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Login
