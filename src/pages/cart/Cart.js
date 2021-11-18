import '../../styles/golbal.scss'
import { useState } from 'react'
import NavBar from '../../components/golbal/NavBar'
import Footer from '../../components/golbal/Footer'
import ProductList from '../../components/cart/ProductList'
import ProductForm from '../../components/cart/ProductForm'
import ProductContextProvider from '../../contexts/ProductContext'

function Cart(props) {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <ProductContextProvider>
      <NavBar />
      <div className="container">
        <h3 className="mt-5">購物車</h3>
        <div className="d-flex justify-content-between">
          <h5>勾選下方紅利點數，即可折抵現金！</h5>
          <form className="form-inline my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="從購物車找點什麼？"
              aria-label="Search"
              onChange={(e) => {
                setSearchTerm(e.target.value)
              }}
            />
            {/* <button className="btn btn-info" type="submit">
              搜尋
            </button> */}
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
        <ProductForm />
        <ProductList searchTerm={searchTerm} />
      </div>
      <Footer />
      <div className="footer-long"></div>
    </ProductContextProvider>
  )
}

export default Cart
