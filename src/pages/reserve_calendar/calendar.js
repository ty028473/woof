import React, { useState, useEffect } from 'react'
import ViewApp from '../../components/calendar2/calendarView'
import SitterDetail from '../../components/reserve/personal'
import SitterSummary from '../../components/reserve/summary'
// import { Form } from 'react-bootstrap'
import NavBar from '../../components/golbal/NavBar'
import Board from '../../components/reserve/ImgBoard'
import Evalution from '../../components/reserve/EvaluationBoard'
import Footer from '../../components/golbal/Footer'
import ProductForm from '../../components/cart/ProductForm'
import ProductContextProvider from '../../contexts/ProductContext'

function Reservecalendar(props) {
  const [obj, setObj] = useState({
    start: '',
    end: '',
    title: '',
    pet_sitter_id: '2',
    district: '北投區',
  })
  // console.log(obj)
  return (
    <ProductContextProvider>
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
          <ProductForm obj={obj} />
        </div>
      </div>
      <Board />
      <Evalution />
      <Footer />
    </ProductContextProvider>
  )
}

export default Reservecalendar
