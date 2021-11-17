import React, { useState, useRef } from 'react'
import '../../styles/golbal.scss'
import '../../styles/login.scss'
import GoogleButton from 'react-google-button'
import NavBar from '../../components/golbal/NavBar'
import Footer from '../../components/golbal/Footer'
import axios from 'axios'

function Login(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const login = () => {
    axios
      .post('http://localhost:8801/api/auth/login', {
        email: email,
        password: password,
      })
      .then((response) => {
        alert('登入成功')
        console.log(response)
      })
      .catch((e) => {
        if (e.response.data === Array(0)) {
          alert('帳號或密碼錯誤！')
        } else if (email === '') {
          alert('請輸入帳號!')
        } else {
          alert('請輸入密碼!')
        }
      })
  }

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
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </li>
              <li>
                <div class=" input-group">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="密碼"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </li>
              <li>
                <button
                  type="submit"
                  className="col btn btn-primary  btn-woof"
                  onClick={login}
                >
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
