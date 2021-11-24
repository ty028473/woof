import React, { useState } from 'react'
import '../../styles/golbal.scss'
import '../../styles/signup.scss'
import NewNavBar from '../../components/golbal/NewNavBar'
import Footer from '../../components/golbal/Footer'
import axios from 'axios'
import { API_URL } from '../../configs/config'

function Signup() {
  const [signForm, setSignForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    birthday: '',
    gender: '',
  })

  function handleChange(e) {
    setSignForm({ ...signForm, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    // 關掉預設行為
    e.preventDefault()
    try {
      // 用 post 送出資料 (member 已經是 json 格式可以直接送出)
      let req = await axios.post(`${API_URL}/auth/signup`, signForm)
    } catch (err) {
      console.log('handleSubmitErr', err)
    }
  }

  return (
    <>
      <NewNavBar />
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
              <form onSubmit={handleSubmit}>
                <li>
                  <h5>創建帳號</h5>
                  如果您已經有帳號，請直接點擊登入
                </li>
                <li>
                  <div className="from-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="姓名"
                      name="name"
                      value={signForm.name}
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="from-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email信箱"
                      name="email"
                      value={signForm.email}
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
                      value={signForm.password}
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="from-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="再次確認密碼"
                      name="confirmPassword"
                      value={signForm.confirmPassword}
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="from-group">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="電話號碼"
                      name="phone"
                      pattern="09\d{2}\-?\d{3}\-?\d{3}"
                      value={signForm.phone}
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="from-group">
                    <input
                      type="date"
                      className="form-control"
                      placeholder="生日"
                      name="birthday"
                      value={signForm.birthday}
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div className="from-group">
                    <select
                      className="custom-select"
                      name="gender"
                      value={signForm.gender}
                      onChange={handleChange}
                    >
                      <option selected>請選擇性別</option>
                      <option value="1">男</option>
                      <option value="2">女</option>
                    </select>
                  </div>
                </li>
                <li>
                  <button
                    type="submit"
                    className="col btn btn-primary btn-woof"
                  >
                    註冊
                  </button>
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

export default Signup
