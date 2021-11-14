import React from 'react'

function ToDoOrder(props) {
  const { cartItems } = props
  const point = 40
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  const totalPrice = itemsPrice - point
  return (
    <>
      {' '}
      {/* 如果購物車裡面有東西才顯示「下訂單」 */}
      {cartItems.length !== 0 && (
        <div className="check-order cart-shadow">
          {/* 如果紅利是0 */}
          {point === 0 && (
            <div class="d-flex bd-highlight ">
              <div class="py-4 px-5 flex-grow-1 bd-highlight"></div>
              <div class="py-4 px-5 bd-highlight">
                <input type="checkbox" className="mr-3" disabled />
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
                目前紅利點數 {point}點<br />
                (1點=1元)
              </div>
              <div class="py-4 px-5 bd-highlight text-right">
                <input type="checkbox" className="mr-3" />
                <span>
                  紅利點數折抵
                  <br />
                  (最高折抵100元)
                </span>
              </div>
              <div class="py-4 px-5 bd-highlight col-2">
                <span>$-{point}</span>
                {/* <span>${point > 100 && ({point = 100})}{point < 100 && ({point})}</span> */}
              </div>
            </div>
          )}

          <hr />
          <div class="d-flex bd-highlight my-auto">
            <div class="py-4 px-5 flex-grow-1 bd-highlight"></div>
            <div class="py-4 px-5 bd-highlight ">
              總金額 ({cartItems.length}個商品):{' '}
              <span className="price-color">${totalPrice}</span>
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
