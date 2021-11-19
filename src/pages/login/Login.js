import React, { useState, useRef } from 'react'
import '../../styles/golbal.scss'
import '../../styles/login.scss'
import GoogleButton from 'react-google-button'
import NewNavBar from '../../components/golbal/NewNavBar'
import Footer from '../../components/golbal/Footer'
import axios from 'axios'
import {withRouter,useHistory} from 'react-router-dom'


function Login(props) {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  })
  let history= useHistory()
  let id =JSON.parse(localStorage.getItem('id'))
  if (id){
    history.push("/")

  }

  function handleChange(e) {
    let newMember = { ...loginForm }
    newMember[e.target.name] = e.target.value
    setLoginForm(newMember)
    console.log(loginForm)

    // 逗點後面的值會蓋掉前面的
    // setMember(...member, [e.target.name]:e.target.value)
  }
  async function handleSubmit(e) {

    // 關掉預設行為
    e.preventDefault()
    try {
      
      // 用 post 送出資料 (member 已經是 json 格式可以直接送出)
      let res = await axios.post(
        'http://localhost:8801/api/auth/login',
        loginForm
      )
      console.log(res)
      if (res.data.code === "0") {
        localStorage.setItem('id', JSON.stringify(res.data.returnMember))
        alert("登入成功")
        history.push("/")
      }
    } catch (err) {
      console.log('handleSubmitErr', err)
    }
  }

  return (
    
    <>
      <NewNavBar />
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
              <form onSubmit={handleSubmit}>
                <li>
                  <h5>會員登入</h5>
                </li>
                <li>
                  <div class=" input-group">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email"
                      name="email"
                      value={loginForm.email}
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div class=" input-group">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="密碼"
                      name="password"
                      value={loginForm.password}
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <button
                    type="submit"
                    className="col btn btn-primary  btn-woof"
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
              </form>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Login
