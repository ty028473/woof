import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import GlobalJsx from '../../components/member/GlobalJsx'
import axios from 'axios'
import swal from 'sweetalert'
import { API_URL } from '../../configs/Config'
// css
import userGlobal from '../../styles/user-global.module.scss'

function ChangePwd() {
  let history = useHistory()
  const [passwordData, setPasswordData] = useState({
    password: '',
    newPassword: '',
    confirmPassword: '',
  })
  // 表單更新資料
  function handleChage(e) {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value })
  }

  // 送回後端
  async function handleSubmit(e) {
    e.preventDefault()
    try {
      let res = await axios.post(
        `${API_URL}/member/changePassword`,
        passwordData,
        {
          withCredentials: true,
        }
      )
      swal({
        title: res.data.message,
        text: ' ',
        icon: 'success',
        buttons: false,
        timer: 1000,
      }).then(() => {
        history.push('/member')
      })
    } catch (err) {
      console.log(err.response)
      // 抓取錯誤訊息

      if (err.response.data.code === '3100') {
        swal({
          title: err.response.data.message,
          text: ' ',
          icon: 'error',
          buttons: false,
          timer: 1000,
        })
      } else if (err.response.data.code === '3101') {
        const errorsData = err.response.data.errors
        const errorsArray = errorsData.map((v) => v.msg)
        const errorShow = errorsArray.join(' ')

        swal({
          title: errorShow,
          text: ' ',
          icon: 'error',
          buttons: false,
          timer: 1000,
        })
      }
    }
  }
  return (
    <>
      <GlobalJsx>
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
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className={`col-4 text-right ${userGlobal.title_font}`}>
                <ul className={userGlobal.list_styled}>
                  <li className="my-4">現在的密碼</li>
                  <li className="my-4">新的密碼</li>
                  <li className="my-4">確認密碼</li>
                </ul>
              </div>
              <div className="col-5">
                <div className=" input-group my-4">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="form-control"
                    onChange={handleChage}
                  />
                </div>
                <div className=" input-group my-4">
                  <input
                    id="newPassword"
                    name="newPassword"
                    type="password"
                    className="form-control"
                    onChange={handleChage}
                  />
                </div>
                <div className=" input-group my-4">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    className="form-control"
                    onChange={handleChage}
                  />
                </div>
                <button className="btn btn-primary btn-woof">送出</button>
              </div>
              <div className="col-3"></div>
            </div>
            <div className={userGlobal.Bottom_blank}></div>
          </form>
        </section>
      </GlobalJsx>
    </>
  )
}

export default ChangePwd
