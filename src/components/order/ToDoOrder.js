import React, { useState, useEffect } from 'react'
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
// import AddCreditCard from './AddCreditCard'
import CheckOutResult from './CheckOutResult'
import InsertCreditCard from './InsertCreditCard'
// import axios from 'axios'
// import { API_URL } from '../../configs/Config'

function ToDoOrder(props) {
  const { orderCheck } = props

  console.log(orderCheck)
  // const [addCreditCard, setAddCreditCard] = useState(false)
  const [checkOutResult, setCheckOutResult] = useState(false)
  return (
    <>
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
            <OverlayTrigger
              overlay={
                <Tooltip id="tooltip-disabled">抱歉現在沒有這項服務!</Tooltip>
              }
            >
              <span className="d-inline-block">
                <Button
                  disabled
                  className="btn btn-info btn-woof"
                  style={{ pointerEvents: 'none' }}
                >
                  銀行轉帳
                </Button>
              </span>
            </OverlayTrigger>
          </div>
          <div className="py-2 px-5 bd-highlight">
            <OverlayTrigger
              overlay={
                <Tooltip id="tooltip-disabled">抱歉現在沒有這項服務!</Tooltip>
              }
            >
              <span className="d-inline-block">
                <Button
                  disabled
                  className="btn btn-info btn-woof"
                  style={{ pointerEvents: 'none' }}
                >
                  面交付款
                </Button>
              </span>
            </OverlayTrigger>
          </div>
        </div>
        {/* 信用卡資訊 */}
        {/* <Button
              className="btn btn-primary btn-woof"
              onClick={() => setAddCreditCard(true)}
            >
              新增信用卡
            </Button>
            {addCreditCard && (
              <AddCreditCard
                show={addCreditCard}
                onHide={() => setAddCreditCard(false)}
                state="editing"
              />
            )} */}
        <InsertCreditCard />

        <hr />

        {/* 紅利折抵+總付款金額 */}

        <div className=" mt-3 d-flex bd-highlight ">
          <div className="py-2 px-5 flex-grow-1 bd-highlight"></div>
          <div className="py-2 px-5 bd-highlight">折抵紅利點數</div>
          <div className="py-2 px-5 bd-highlight col-2">
            {/* ${orderCheck[0].use_bonus} */}
          </div>
        </div>
        <div className="d-flex bd-highlight ">
          <div className="py-2 px-5 flex-grow-1 bd-highlight"></div>
          <div className="py-2 px-5 bd-highlight">
            總付款金額 ({orderCheck.length}個商品):
          </div>
          <div className="py-2 px-5 bd-highlight col-2">
            {/* <span className="price-color">${orderCheck[0].total_sum}</span> */}
          </div>
        </div>

        <div className="d-flex bd-highlight my-auto">
          <div className="py-2 px-5 flex-grow-1 bd-highlight"></div>
          <div className="py-2 px-5 bd-highlight "></div>
          <div className="py-2 px-5 bd-highlight col-2">
            <div className="blog__controller">
              <button
                className="btn btn-primary btn-woof"
                onClick={() => setCheckOutResult(true)}
              >
                下訂單
              </button>
              {checkOutResult && (
                <CheckOutResult
                  show={checkOutResult}
                  onHide={() => setCheckOutResult(false)}
                  state="editing"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ToDoOrder
