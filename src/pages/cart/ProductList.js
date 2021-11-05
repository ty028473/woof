import React from 'react'
import '../../styles/golbal.scss'
import '../../styles/carts.scss'
import NavBar from '../../components/golbal/NavBar'
import Footer from '../../components/golbal/Footer'

function ProductList(props) {
  return (
    <>
      <NavBar />
      <div className="container height">
        <div className="row mt-5">
          <h3>購物車</h3>
        </div>
        <div className="row d-flex justify-content-between">
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
        {/* 項目標題 */}
        <div className="block-item-title my-3">
          <div class="row px-4 pt-2">
            <div class="col-2">
              <h5>保母</h5>
            </div>
            <div class="col-5">
              <h5>詳細資訊</h5>
            </div>
            <div class="col-2">
              <h5>時段</h5>
            </div>
            <div class="col-2">
              <h5>價格</h5>
            </div>
            <div class="col-1">
              <h5>操作</h5>
            </div>
          </div>
        </div>
        {/* 空的購物車 */}
        <div className="block-item my-3 ">
          <div class="d-flex justify-content-center text-center ">
            <div class="p-2 bd-highlight">
              <h5>購物車是空的！趕快去逛逛吧～</h5>
              <button type="button" className="btn btn-primary btn-lg btn-woof">
                點我預約去～
              </button>
            </div>
          </div>
        </div>
        {/* 單筆資訊 */}
        <div className="block-item my-3 my-auto">
          <div class="row px-4">
            <div class="col-2">王小明</div>
            <div class="col-5">
              交易地點：
              <br />
              台北市中山區大同二路28巷2號
              <br />
              寵物名稱：
              <br />
              毛毛
              <br />
            </div>
            <div class="col-2">2021/12/1 08:00 - 12:00</div>
            <div class="col-2">$500</div>
            <div class="col-1">Ｘ</div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default ProductList
