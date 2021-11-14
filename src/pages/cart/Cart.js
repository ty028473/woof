import React, { useState } from 'react'
import '../../styles/golbal.scss'
import NavBar from '../../components/golbal/NavBar'
import Footer from '../../components/golbal/Footer'
import Main from '../../components/cart/Main'
import ProductItem from '../../components/cart/ProductItem'
import data from './data'

function Cart(props) {
  const { products } = data
  const [cartItems, setCartItems] = useState([])

  // 要改寫成至多+1，不可大於1
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id)
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      )
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])
    }
  }

  // 刪除
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id)
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id))
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      )
    }
  }

  return (
    <>
      <NavBar countCartItems={cartItems.length} />
      <div className="container">
        <h3 className="mt-5">購物車</h3>
        <div className="d-flex justify-content-between">
          <h5>勾選下方紅利點數，即可折抵現金！</h5>
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
            <td>操作</td>
          </tr>
        </table>
        {/* Main 只是測試用～ */}
        <Main products={products} onAdd={onAdd} />
        <ProductItem cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
      </div>
      <Footer />
      <div className="footer-long"></div>
    </>
  )
}

export default Cart
