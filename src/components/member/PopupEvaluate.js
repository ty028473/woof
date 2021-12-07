import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa'
import { API_URL, PUBLIC_URL } from '../../configs/Config'
import axios from 'axios'
import swal from 'sweetalert'

// css
import userGlobal from '../../styles/user-global.module.scss'

function Popup(props) {
  // 控制星星
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)
  const { test, setTest, onHide } = props

  // 資料
  const [evaluation, setEvaluation] = useState({
    pet_sitter_id: 0,
    content: '',
    score: 0,
  })

  useEffect(() => {
    async function getOneData() {
      setEvaluation({
        ...evaluation,
        pet_sitter_id: test.pet_sitter_id,
        id: test.id,
      })
    }
    getOneData()
  }, [test])

  function handleChange(e) {
    setEvaluation({
      ...evaluation,
      [e.target.name]: e.target.value,
    })
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
      }).then(() => {
        onCancelClick()
        setTest({ ...test, evaluation_states: 1 })
      })
    } catch (err) {
      console.log(err)
    }
  }

  function setDataZero() {
    setEvaluation({ ...evaluation, content: '', score: 0 })
    setHover(null)
    setRating(null)
  }

  // 取消按鈕
  function onCancelClick() {
    onHide()
    setDataZero()
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
                {test.petSitterName}保母
              </h5>

              <img
                src={`${PUBLIC_URL}${test.petSitterImage}`}
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
                <li>{test.petName}</li>
                <li>
                  {test.district}
                  {test.address}
                </li>
                <li>{test.start}</li>
                <li>{test.end}</li>
                <li>{test.price}</li>
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
            onClick={onCancelClick}
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
