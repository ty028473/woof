import React, { useState } from 'react'
import '../../styles/golbal.scss'
import '../../styles/signup.scss'
import NavBar from '../../components/golbal/NavBar'
import Footer from '../../components/golbal/Footer'
import axios from 'axios'

function Signup(props) {
  const [signForm, setSignForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
    phone: '',
    date: '',
  })

  function handleChange(e) {
    let newMember = { ...signForm }
    newMember[e.target.name] = e.target.value
    setSignForm(newMember)
    console.log(signForm)

    // 逗點後面的值會蓋掉前面的
    // setMember(...member, [e.target.name]:e.target.value)
  }
  async function handleSubmit(e) {
    // 關掉預設行為
    e.preventDefault()
    try {
      console.log(signForm)
      // 用 post 送出資料 (member 已經是 json 格式可以直接送出)
      let res = await axios.post('http://localhost:8801/api/auth/signup', signForm)
    } catch (err) {
      console.log('handleSubmitErr', err)
    }
  }

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
              <form onSubmit={handleSubmit}>
                <li>
                  <h5>創建帳號</h5>
                  如果您已經有帳號，請直接點擊登入
                </li>
                <li>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="姓名"
                      name="name"
                      value={signForm.name}
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div class=" input-group">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email"
                      name="email"
                      value={signForm.email}
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
                      value={signForm.password}
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div class=" input-group">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="再次確認密碼"
                      name="confirmPassword"
                      value={signForm.confirmPassword}
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="電話號碼"
                      name="phone"
                      value={signForm.phone}
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div class="input-group">
                    <input
                      type="date"
                      class="form-control"
                      placeholder="生日"
                      name="date"
                      value={signForm.date}
                      onChange={handleChange}
                    />
                  </div>
                </li>
                <li>
                  <div class="input-group mb-3">
                    <select
                      class="custom-select"
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
                    className="col btn btn-primary  btn-woof"
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
