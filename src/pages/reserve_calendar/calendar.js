import React, { useState } from 'react'
import ViewApp from '../../components/calendar2/calendarView'
import SitterDetail from '../../components/reserve/personal'
import SitterSummary from '../../components/reserve/summary'
import { Form } from 'react-bootstrap'
import NavBar from '../../components/golbal/NavBar'
import Board from '../../components/reserve/ImgBoard'
import Evalution from '../../components/reserve/EvaluationBoard'
import Footer from '../../components/golbal/Footer'

function Reservecalendar(props) {
  const [obj, setObj] = useState({
    start: '',
    end: '',
    title: '',
  })
  // console.log(obj)
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row d-flex justify-content-center mx-0">
          <div className="col-6 my-4 ">
            <SitterDetail />
          </div>
          <div className="col-6 my-2 ">
            <SitterSummary />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-12  ">
            <h3>保母日曆</h3>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-beteeen calendar-bg">
          <div className="col-12 my-4  ">
            <ViewApp setObj={setObj} />
          </div>
          <div className="col-5 ">
            <div className="container">
              <div className="row">
                <div className="col-4 ">
                  <Form.Control type="text" placeholder="北投區" readOnly />
                </div>
                <div className="col-8 ">
                  <Form.Control type="text" placeholder="交易地點" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-2 ">
            <div class="input-group mb-3">
              <select class="custom-select">
                <option selected>寵物名稱</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="col-3 ">
            <div className="container">
              <div className="row">
                <div className="col-6 ">
                  <p>開始時間：{obj.start.toLocaleString()}</p>
                  <p>結束時間：{obj.end.toLocaleString()}</p>
                </div>
                <div className="col-6 ">
                  <p>金額：{obj.title}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-2 ">
            <button type="button" className=" btn btn-primary btn-woof ">
              立即預約
            </button>
          </div>
        </div>
      </div>
      <Board />
      <Evalution />
      <Footer />
    </>
  )
}

export default Reservecalendar
