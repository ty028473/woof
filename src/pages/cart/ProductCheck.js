import React from 'react'
import '../../styles/golbal.scss'
import NavBar from '../../components/golbal/NavBar'
import Footer from '../../components/golbal/Footer'
import ItemListDetail from '../../components/cart/ItemListDetail'

function ProductList(props) {
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
        <ItemListDetail />
        <ItemListDetail />
        {/* check-out */}
        <div className="my-3 check-out shadow">
          <h5 className="py-2 px-5">付款方式</h5>
          <hr />
          {/* 選擇付款信用卡 */}
          <div className="mt-3 d-flex bd-highlight ">
            <div className="py-2 px-5 bd-highlight">
              <h5>選擇付款信用卡</h5>
            </div>
            <div className="py-2 px-5 bd-highlight">
              <button type="button" className="btn btn-info btn-woof ">
                選擇信用卡
              </button>
            </div>
            <div className="py-2 px-5 bd-highlight">
              <button type="button" className="btn btn-info btn-woof disabled">
                銀行轉帳
              </button>
            </div>
            <div className="py-2 px-5 bd-highlight">
              <button type="button" className="btn btn-info btn-woof disabled">
                面交付款
              </button>
            </div>
          </div>
          {/* 信用卡資訊 */}
          <ul className="my-3 credit-card-list-styled">
            <li>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                  checked
                />
                <label className="form-check-label" for="exampleRadios1">
                  VISA 台新國際商業銀行 **** 4106
                </label>
              </div>
            </li>
            <li>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="option2"
                />
                <label className="form-check-label" for="exampleRadios2">
                  VISA 台新國際商業銀行 **** 4106
                </label>
              </div>
            </li>
            <li>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios3"
                  value="option3"
                  disabled
                />
                <label className="form-check-label" for="exampleRadios3">
                  VISA 台新國際商業銀行 **** 4106
                </label>
              </div>
            </li>
            <button type="button" className="btn btn-primary btn-woof ">
              新增信用卡
            </button>
          </ul>

          <hr />
          {/* 紅利折抵+總付款金額 */}
          <div className=" mt-3 d-flex bd-highlight ">
            <div className="py-2 px-5 flex-grow-1 bd-highlight"></div>
            <div className="py-2 px-5 bd-highlight">折抵紅利點數</div>
            <div className="py-2 px-5 bd-highlight col-2">$0</div>
          </div>
          <div className="d-flex bd-highlight ">
            <div className="py-2 px-5 flex-grow-1 bd-highlight"></div>
            <div className="py-2 px-5 bd-highlight">總付款金額 (1個商品):</div>
            <div className="py-2 px-5 bd-highlight col-2"><span className="price-color">$500</span></div>
          </div>
          <div className="d-flex bd-highlight my-auto">
            <div className="py-2 px-5 flex-grow-1 bd-highlight"></div>
            <div className="py-2 px-5 bd-highlight "></div>
            <div className="py-2 px-5 bd-highlight col-2">
              <button type="button" className="btn btn-primary btn-woof">
                下訂單
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default ProductList
