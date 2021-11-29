import React, { useState, useEffect } from 'react'
import '../../styles/golbal.scss'
import NewNavBar from '../../components/golbal/NewNavBar'
import Footer from '../../components/golbal/Footer'
import ProductItemDetail from '../../components/order/ProductItemDetail'
import ToDoOrder from '../../components/order/ToDoOrder'
import axios from 'axios'
import { API_URL } from '../../configs/Config'

function OrderCheck(props) {
  const [orderCheck, setOrderCheck] = useState([])
  // OrderCheck.js 將 member_id = 1 狀態為「未結帳」資料顯示出來
  useEffect((e) => {
    async function orderCheck() {
      try {
        let res = await axios.get(`${API_URL}/orders/member/checkList`, {
          withCredentials: true,
        })
        setOrderCheck(res.data)
        console.log(res.data)
      } catch (e) {
        alert('找不到未結帳訂單')
      }
    }
    orderCheck()
  }, [])
  return (
    <>
      <NewNavBar />
      <div className="container">
        <div className="mt-5 d-flex justify-content-center">
          <h5 className="step-circle-do text-center">
            Step1
            <h5 className="text-width">購物車</h5>
          </h5>
          <div className="step-line-do"></div>
          <h5 className="step-circle-do text-center">
            Step2
            <h5 className="text-width">結帳</h5>
          </h5>
        </div>
        <h3 className="mt-3">結帳</h3>
        <div className="d-flex justify-content-between">
          <h5>訂單明細</h5>
          {/* <form className="form-inline my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="想找什麼呢？"
              aria-label="Search"
            />
            <button className="btn btn-info" type="submit">
              搜尋
            </button>
          </form> */}
        </div>
        <table className="mt-3 table-title-styled shadow">
          <tr>
            <td>保母</td>
            <td className="adderss-width-2">詳細資訊</td>
            <td>時段</td>
            <td>價格</td>
          </tr>
        </table>
        <ProductItemDetail orderCheck={orderCheck} />
        <ToDoOrder orderCheck={orderCheck} />
      </div>
      <Footer />
    </>
  )
}

export default OrderCheck
