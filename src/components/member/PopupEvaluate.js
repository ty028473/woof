import React from 'react'
import { Modal } from 'react-bootstrap'

// css
import userGlobal from '../../styles/user-global.module.scss'

function Popup(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">評價此訂單</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-4 text-center">
            <h5 className={userGlobal.title_font}>林海海保母</h5>
            <img
              src="https://kpopthing.com/wp-content/uploads/2021/03/Yes-i-an-sana-making.jpg"
              className={userGlobal.img_cover_square_sm}
              alt="寵物頭像"
            />
          </div>
          <div className="col-2 text-right">
            <ul
              className={`${userGlobal.list_styled} ${userGlobal.title_font}`}
            >
              <br />
              <li>地址</li>
              <li>預約時間</li>
              <li>金額</li>
            </ul>
          </div>
          <div className="col-6 text-left">
            <ul
              className={`${userGlobal.list_styled} ${userGlobal.content_font}`}
            >
              <br />
              <li>台北市中正區中山北路115號</li>
              <li>2021/06/23 (五) 下午 13:00-17:00</li>
              <li>500</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <h1>(未做)星星評價區塊</h1>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <textarea
              name=""
              id=""
              cols="50"
              rows="5"
              placeholder="對保母說些什麼吧"
            ></textarea>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          type="button"
          className="btn btn-info btn-woof"
          onClick={props.onHide}
        >
          取消
        </button>
        <button type="button" className="btn btn-primary btn-woof">
          送出
        </button>
      </Modal.Footer>
    </Modal>
  )
}

export default Popup
