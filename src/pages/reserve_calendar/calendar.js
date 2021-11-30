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
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../../configs/Config'

function Reservecalendar(props) {
  const [personalData, setPersonalData] = useState({
    pet_sitter_id: '',
    district: '',
  })
  const { reserveId } = useParams()
  // 抓取保母 id 的相關日曆時段以及資料
  useEffect((e) => {
    async function reserve() {
      try {
        let res = await axios.get(`${API_URL}/reserve/${reserveId}`)
        setPersonalData(res.data)
        // console.log('我要找保母ＩＤ', res.data.pet_sitter_id)
        const findPetsitterId = res.data.pet_sitter_id
        console.log('找到了', findPetsitterId)
      } catch (e) {
        alert('找不到此保母的時段資料')
      }
    }
    reserve()
  }, [])

  const [obj, setObj] = useState({
    start: '',
    end: '',
    title: '',
  })
  // console.log('personalData', personalData)
  return (
    <ProductContextProvider>
      <NavBar />
      <div className="container">
        <div className="row d-flex justify-content-center mx-0">
          <div className="col-6 my-4 ">
            <SitterDetail
              personalData={personalData}
              setPersonalData={setPersonalData}
            />
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
            <ViewApp setObj={setObj} personalData={personalData} />
          </div>
          <ProductForm obj={obj} personalData={personalData} />
        </div>
      </div>
      <Board />
      <Evalution />
      <Footer />
    </ProductContextProvider>
  )
}

export default Reservecalendar
