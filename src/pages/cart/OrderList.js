import React, { useState } from 'react'
import '../../styles/golbal.scss'
import NavBar from '../../components/golbal/NavBar'
import Footer from '../../components/golbal/Footer'
import ToDoOrder from '../../components/cart/ToDoOrder'
import OrderList2 from '../../components/cart/OrderList2'

// 產品訂購的項目 - 範例資料
const products = [
  {
    id: 1,
    name: '審佳宜',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    address: '台北市中山區大同二路28巷2號',
    pet_name: '毛毛',
    start_event: '2021/12/1 08:00',
    end_event: '2021/12/1 12:00',
    price: 200,
  },
  {
    id: 2,
    name: '王家安',
    image: 'https://picsum.photos/id/1005/300/300',
    address: '台北市中正區大同二路28巷2號',
    pet_name: '皮皮',
    start_event: '2021/12/2 12:00',
    end_event: '2021/12/2 16:00',
    price: 300,
  },
  {
    id: 3,
    name: '王家安',
    image: 'https://picsum.photos/id/1006/300/300',
    address: '台北市中正區大同二路28巷2號',
    pet_name: '皮皮',
    start_event: '2021/12/2 12:00',
    end_event: '2021/12/2 16:00',
    price: 300,
  },
  {
    id: 4,
    name: '王家安',
    image: 'https://picsum.photos/id/1025/300/300',
    address: '台北市中正區大同二路28巷2號',
    pet_name: 'COdy',
    start_event: '2021/12/2 12:00',
    end_event: '2021/12/2 16:00',
    price: 600,
  },
]

const initStateWithObject = (products) => {
  const state = []

  for (let i = 0; i < products.length; i++) {
    state.push({ ...products[i], count: 1 })
  }

  return state
}

function OrderList(props) {
  const [productsInOrder, setProductsInOrder] = useState(
    initStateWithObject(products)
  )

  // ToDoOrder.js
  // 計算目前商品數量
  const productCount = () => {
    let totalCount = 0
    for (let i = 0; i < productsInOrder.length; i++) {
      totalCount += productsInOrder[i].count
    }
    return totalCount
  }
  // 計算商品總價
  // const subTotal = () => {
  //   let sum = 0

  //   for (let i = 0; i < productsInOrder.length; i++) {
  //     sum += productsInOrder[i].count * productsInOrder[i].price
  //   }

  //   return sum
  // }

  const total = () => {
    let sum = 0

    for (let i = 0; i < productsInOrder.length; i++) {
      sum += productsInOrder[i].count * productsInOrder[i].price
    }
    return sum
  }

  return (
    <>
      <NavBar />
      <div className="container">
        <h3 className="mt-5">購物車</h3>
        <div className="d-flex justify-content-between">
          <h5>勾選下方紅利點數，即可折抵現金！</h5>
          <form class="form-inline my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="想找什麼呢？"
              aria-label="Search"
            />
            <button class="btn btn-info" type="submit">
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
            <td>操作</td>
          </tr>
        </table>
        {/* // 如果 products 是 null 顯示這個，如果有東西就列出來 */}
        {/* <section className="table-list-styled">
      購物車是空的！趕快去逛逛吧～
      <br />
      <button type="button" className="btn btn-primary btn-woof">
        點我預約去～
      </button>
    </section> */}
        <OrderList2
          productsInOrder={productsInOrder}
          setProductsInOrder={setProductsInOrder}
        />
      </div>
      <ToDoOrder
        productCount={productCount()}
        // subTotal={subTotal()}
        total={total()}
      />
      <Footer />
      <div className="footer-long"></div>
    </>
  )
}

export default OrderList
