import React, { useState, useContext } from 'react'
import { ProductContext } from '../../contexts/ProductContext'

function ToDoOrder(props) {
  const { products } = useContext(ProductContext)
  const { total } = props
  const [point, setPoint] = useState(90)
  const [usePoint, setUsePoint] = useState()
  // const [total, setTotal] = useState()
  // const sum = total(products) - parseInt(usePoint)
  // console.log(parseInt(usePoint))
  // console.log(total(products))
  // console.log(sum)
  console.log(total(products))

  return (
    <>
      {/* 如果購物車裡面有東西才顯示「下訂單」 */}
      {products.length !== 0 && (
        <div className="check-order cart-shadow">
          {/* 如果紅利是0 */}
          {point === 0 && (
            <div class="d-flex bd-highlight ">
              <div class="py-4 px-5 flex-grow-1 bd-highlight"></div>
              <div class="py-4 px-5 bd-highlight">
                <span className="none-color">紅利點數不足</span>
              </div>
              <div class="py-4 px-5 bd-highlight col-2">
                <span className="none-color">${point}</span>
              </div>
            </div>
          )}
          {/* 如果紅利不是0 */}
          {point !== 0 && (
            <div class="d-flex bd-highlight ">
              <div class="py-4 px-5 flex-grow-1 bd-highlight">
                目前紅利點數 <span className="price-color">{point}點</span>
                <br />
                (1點=1元)
              </div>
              <div class="py-4 px-5 bd-highlight text-right">
                <span>
                  紅利點數折抵
                  <br />
                  (最高折抵100元)
                </span>
              </div>
              <div class="py-4 px-5 bd-highlight col-2">
                <input
                  className="form-control"
                  type="number"
                  placeholder="預扣點數"
                  value={usePoint}
                  max="100"
                  onChange={(e) => {
                    setUsePoint(e.target.value)
                  }}
                />
              </div>
            </div>
          )}
          <hr />
          <div class="d-flex bd-highlight my-auto">
            <div class="py-4 px-5 flex-grow-1 bd-highlight"></div>
            <div class="py-4 px-5 bd-highlight ">
              總金額 ({products.length}個商品):
              <span className="price-color">${total(products)}</span>
            </div>
            <div class="py-4 px-5 bd-highlight col-2">
              <button type="button" className="btn btn-primary btn-woof">
                去結帳
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ToDoOrder
