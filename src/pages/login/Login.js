import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import ReactDOM from 'react-dom'
import GoogleLogin from 'react-google-login'

import '../../styles/golbal.scss'
import '../../styles/login.scss'
import GoogleButton from 'react-google-button'
import NewNavBar from '../../components/golbal/NewNavBar'
import Footer from '../../components/golbal/Footer'
import axios from 'axios'
import swal from 'sweetalert'
import { API_URL } from '../../configs/Config'
// context
import { UserContext } from '../../contexts/UserContext'
import { Prev } from 'react-bootstrap/esm/PageItem'

function Login() {
  const responseGoogle = async (response) => {
    let aaa = { email: response.Au.pv, name: response.Au.hf }
    try {
      // 用 post 送出資料 (member 已經是 json 格式可以直接送出)
      // 有用到session就要加 withCredentials
      let res = await axios.post(`${API_URL}/auth/googlelogin`, aaa, {
        withCredentials: true,
      })
      if (res.data.code === '1001') {
        // 聊天室用
        localStorage.setItem('id', JSON.stringify(res.data.member))

        //控制登入狀態
        localStorage.setItem('member', JSON.stringify(res.data))
        setMemberSession(true)
        swal({
          title: res.data.message,
          text: ' ',
          icon: 'success',
          buttons: false,
          timer: 2000,
        }).then(() => {
          let user = JSON.parse(localStorage.getItem('id'))

          if(user.image==null){
            history.push('/member')

          }else{
            history.push('/')
          }
        })
      } else {
        swal({
          title: res.data.message,
          text: ' ',
          icon: 'error',
          buttons: false,
          timer: 2000,
        })
      }
    } catch (e) {
      console.log(e)
    }
  }
  const { setMemberSession } = useContext(UserContext)

  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  })

  let history = useHistory()

  function handleChange(e) {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    // 關掉預設行為
    e.preventDefault()
    try {
      // 用 post 送出資料 (member 已經是 json 格式可以直接送出)
      // 有用到session就要加 withCredentials
      let res = await axios.post(`${API_URL}/auth/login`, loginForm, {
        withCredentials: true,
      })

      if (res.data.code === '1001') {
        // 聊天室用
        localStorage.setItem('id', JSON.stringify(res.data.member))

        //控制登入狀態
        localStorage.setItem('member', JSON.stringify(res.data))
        setMemberSession(true)
        swal({
          title: res.data.message,
          text: ' ',
          icon: 'success',
          buttons: false,
          timer: 2000,
        }).then(() => {
          history.push('/')
        })
      } else {
        swal({
          title: res.data.message,
          text: ' ',
          icon: 'error',
          buttons: false,
          timer: 2000,
        })
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
                  <div className="from-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      value={loginForm.email}
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="from-group">
                    <input
                      type="password"
                      className="form-control"
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
                    className="col btn btn-primary btn-woof"
                  >
                    登入
                  </button>
                </li>
                <li>
                  <Link to="/signup" className="col btn btn-secondary btn-woof">
                    註冊
                  </Link>
                </li>
                <li className="text-center">
                  <a href="#/" alt="忘記密碼">
                    忘記密碼?
                  </a>
                </li>
                <li className="text-center">
                  <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_LOGIN_KEY}
                    buttonText="使用您的Google帳號繼續"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
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
