import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa'
import { API_URL, PUBLIC_URL } from '../../configs/Config'
import axios from 'axios'
import swal from 'sweetalert'

// css
import userGlobal from '../../styles/user-global.module.scss'

function Popup(props) {
  const { oneData } = props
  console.log('oneData', oneData)

  // 控制星星
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)

  // 資料
  const [evaluation, setEvaluation] = useState({
    pet_sitter_id: 0,
    content: '',
    score: 0,
  })
  console.log(evaluation)

  function handleChange(e) {
    setEvaluation({ ...evaluation, [e.target.name]: e.target.value })
  }

  // 送回後端
  async function handleSubmit(e) {
    e.preventDefault()
    try {
      let res = await axios.post(
        `${API_URL}/memberRecord/evaluation`,
        evaluation,
        {
          withCredentials: true,
        }
      )
      swal({
        title: '保母評價新增成功',
        text: ' ',
        icon: 'success',
        buttons: false,
        timer: 1000,
      })
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            評價此訂單
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-4 text-center">
              <h5 className={userGlobal.title_font}>
                {oneData && oneData.petSitterName}保母
              </h5>
              <div class="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="pet_sitter_id"
                  name="pet_sitter_id"
                  value={oneData && oneData.pet_sitter_id}
                ></input>
              </div>
              <img
                src={oneData && `${PUBLIC_URL}${oneData.petSitterImage}`}
                className={userGlobal.img_cover_square_sm}
                alt="保母頭像"
              />
            </div>
            <div className="col-2 text-right">
              <ul
                className={`${userGlobal.list_styled} ${userGlobal.title_font}`}
              >
                <br />
                <li>寵物名稱</li>
                <li>會面地址</li>
                <li>預約開始</li>
                <li>預約結束</li>
                <li>金額</li>
              </ul>
            </div>
            <div className="col-6 text-left">
              <ul
                className={`${userGlobal.list_styled} ${userGlobal.content_font}`}
              >
                <br />
                <li>{oneData && oneData.petName}</li>
                <li>
                  {oneData && oneData.district}
                  {oneData && oneData.address}
                </li>
                <li>{oneData && oneData.start}</li>
                <li>{oneData && oneData.end}</li>
                <li>{oneData && oneData.price}</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col text-center">
              <h5>評價此訂單</h5>

              <div>
                {[...Array(5)].map((star, i) => {
                  const ratingValue = i + 1
                  return (
                    <label>
                      <input
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        onClick={() => {
                          setRating(ratingValue)
                          setEvaluation({ ...evaluation, score: ratingValue })
                        }}
                      />
                      <FaStar
                        className={userGlobal.star}
                        color={
                          ratingValue <= (hover || rating)
                            ? '#fac42e'
                            : '#f4f4f5'
                        }
                        size={50}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                      />
                    </label>
                  )
                })}
              </div>
              {/* <p>the rating is {rating}</p> */}
            </div>
          </div>
          <div className="row">
            <div className="col-2"></div>

            <div className="col-8 text-center">
              <div class="form-group">
                <textarea
                  className="form-control"
                  id="content"
                  name="content"
                  rows="5"
                  value={evaluation.content}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <div className="col-2"></div>
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
          <button className="btn btn-primary btn-woof">送出</button>
        </Modal.Footer>
      </form>
    </Modal>
  )
}

export default Popup
