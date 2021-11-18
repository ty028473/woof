import React, { useState } from 'react'
import '../../styles/golbal.scss'
import NavBar from '../../components/golbal/NavBar'
import Footer from '../../components/golbal/Footer'
import ProductItemDetail from '../../components/cart/ProductItemDetail'
import ToCheckout from '../../components/cart/ToCheckout'

function OrderCheck(props) {
  return (
    <>
      <NavBar />
      <div className="container ">
        <h3 className="mt-5">結帳</h3>
        <div className="d-flex justify-content-between">
          <h5>訂單明細</h5>
          <form className="form-inline my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="想找什麼呢？"
              aria-label="Search"
            />
            <button className="btn btn-info" type="submit">
              搜尋
            </button>
          </form>
        </div>
        <table className="mt-3 table-title-styled shadow">
          <tr>
            <td>保母</td>
            <td className="adderss-width">詳細資訊</td>
            <td>時段</td>
            <td>價格</td>
          </tr>
        </table>
        <ProductItemDetail />
        <ToCheckout />
      </div>
      <Footer />
    </>
  )
}

export default OrderCheck
