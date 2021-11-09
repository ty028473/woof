import React from 'react'

function ToDoOrder(props) {
  return (
    <div>
      <div className="check-order cart-shadow">
        <div class="d-flex bd-highlight ">
          <div class="py-4 px-5 flex-grow-1 bd-highlight"></div>
          <div class="py-4 px-5 bd-highlight">
            <input type="checkbox" className="mr-3" disabled />
            <span className="none-color">紅利點數不足</span>
          </div>
          <div class="py-4 px-5 bd-highlight col-2">
            <span className="none-color">$0</span>
          </div>
        </div>

        <hr />
        <div class="d-flex bd-highlight my-auto">
          <div class="py-4 px-5 flex-grow-1 bd-highlight"></div>
          <div class="py-4 px-5 bd-highlight ">
            總金額 (1個商品): <span className="price-color">$500</span>
          </div>
          <div class="py-4 px-5 bd-highlight col-2">
            <button type="button" className="btn btn-primary btn-woof">
              下訂單
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToDoOrder
