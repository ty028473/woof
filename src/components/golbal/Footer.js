import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { MdEmail, MdFacebook } from 'react-icons/md'
import '../../styles/golbal.scss'

function Footer(props) {
  return (
    <>
      <div className="footer">
        <div class="container">
          <div class="row">
            <div class="col-sm">
              <p>聯絡我們</p>
              <h6>
                地址：新北市三重區三重路103號1樓
                <br />
                電話：02-2987-0000
                <br />
                客服服務時間：週一至週五 10:00 - 17:00 <br />
                E-mail：woof@gmail.com
              </h6>
            </div>
            <div class="col-sm">
              <p>追蹤我們</p>
              <MdFacebook className="icon-footer" />
              <AiFillInstagram className="icon-footer" />
              <MdEmail className="icon-footer" />
            </div>
            <div class="col-sm">
              <p>訂閱電子信箱</p>
              <h6>將最新的優惠訊息直達你信箱！</h6>
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
                    className="btn btn-secondary btn-woof"
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
          <h6 className="text-center">© Copyright 2021 Woof</h6>
        </div>
      </div>
    </>
  )
}

export default Footer
