import React from 'react'
import '../../styles/golbal.scss'
import '../../styles/carts.scss'
import NavBar from '../../components/golbal/NavBar'
import Footer from '../../components/golbal/Footer'
import ItemList from '../../components/cart/ItemList'

function ProductList(props) {
  return (
    <>
      <NavBar />
      <div className="container height">
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
        <table className="mt-3 table-title-styled">
          <tr>
            <td>保母</td>
            <td className="adderss-width">詳細資訊</td>
            <td>時段</td>
            <td>價格</td>
            <td>操作</td>
          </tr>
        </table>
        {/* <section className="table-list-styled">
          購物車是空的！趕快去逛逛吧～
          <br />
          <button type="button" className="btn btn-primary btn-woof">
            點我預約去～
          </button>
        </section> */}
        <ItemList />
        <div className="check-order cart-shadow">
          <div class="d-flex bd-highlight ">
            <div class="py-4 px-5 flex-grow-1 bd-highlight"></div>
            <div class="py-4 px-5 bd-highlight">
              <input type="checkbox" className="mr-3" />
              紅利點數不足
            </div>
            <div class="py-4 px-5 bd-highlight col-2">$0</div>
          </div>

          <hr />
          <div class="d-flex bd-highlight my-auto">
            <div class="py-4 px-5 flex-grow-1 bd-highlight"></div>
            <div class="py-4 px-5 bd-highlight ">總金額 (1個商品):$500</div>
            <div class="py-4 px-5 bd-highlight col-2">
              <button type="button" className="btn btn-primary btn-woof">
                下訂單
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <div className="footer-long"></div>
    </>
  )
}

export default ProductList
