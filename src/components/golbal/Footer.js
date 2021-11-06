import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { MdEmail, MdFacebook } from 'react-icons/md'
import '../../styles/golbal.scss'
import '../../styles/navbar-footer.scss'

function Footer(props) {
  return (
    <>
      <div className="footer">
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <p>聯絡我們</p>
              地址：新北市三重區三重路103號1樓
              <br />
              電話：02-2987-0000
              <br />
              客服服務時間：週一至週五 10:00 - 17:00 <br />
              E-mail：woof@gmail.com
            </div>
            <div class="col-sm">
              <p>追蹤我們</p>
              <MdFacebook className="icon-footer" />
              <AiFillInstagram className="icon-footer" />
              <MdEmail className="icon-footer" />
            </div>
            <div class="col-sm">
              <p>訂閱電子信箱</p>
              <p>將最新的優惠訊息直達你信箱！</p>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="請輸入您的email"
                  aria-label="請輸入您的email"
                  aria-describedby="button-addon2"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-secondary btn-woof down"
                    type="button"
                    id="button-addon2"
                  >
                    訂閱
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="line" />
          <div className="text-center">© Copyright 2021 Woof</div>
        </div>
      </div>
    </>
  )
}

export default Footer
