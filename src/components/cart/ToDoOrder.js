import React, { useState, useContext, useEffect } from 'react'
import { ProductContext } from '../../contexts/ProductContext'
import axios from 'axios'
import { Link } from 'react-router-dom'

function ToDoOrder(props) {
  const { products } = useContext(ProductContext)
  const { total } = props
  const [point, setPoint] = useState(0)
  const [usePoint, setUsePoint] = useState(0)
  let sum = total(products) - usePoint
  const totalInsert = { use_bonus: usePoint, total_sum: sum }

  // 抓取 member_id =1 的 bonus
  useEffect((e) => {
    async function memberBonus() {
      try {
        let res = await axios.get(
          'http://localhost:8801/api/orders/member/bonus'
        )
        setPoint(res.data[0].total_bonus)
      } catch (e) {
        alert('獲取資料失敗')
      }
    }
    memberBonus()
  }, [])

  // 寫入訂單 (接 local 資料) totalInsert -> 主訂單 / products -> 子訂單
  async function handleSubmit(e) {
    try {
      let res = await axios.post(
        'http://localhost:8801/api/orders/order_insert',
        [products, totalInsert]
      )
    } catch (e) {
      alert('獲取資料失敗')
    }
  }

  return (
    <>
      {/* 如果購物車裡面有東西才顯示「下訂單」 */}
      {products.length !== 0 && (
        <div className="check-order cart-shadow">
          {/* 如果紅利是0 */}
          {point === 0 && (
            <div className="d-flex bd-highlight ">
              <div className="py-4 px-5 flex-grow-1 bd-highlight"></div>
              <div className="py-4 px-5 bd-highlight">
                <span className="none-color">紅利點數不足</span>
              </div>
              <div className="py-4 px-5 bd-highlight col-2">
                <span className="none-color">${point}</span>
              </div>
            </div>
          )}
          {/* 如果紅利不是0 */}
          {point !== 0 && (
            <div className="d-flex bd-highlight ">
              <div className="py-4 px-5 flex-grow-1 bd-highlight">
                目前紅利點數 <span className="price-color">{point}點</span>
                <br />
                (1點=1元)
              </div>
              <div className="py-4 px-5 bd-highlight text-right">
                <span>
                  紅利點數折抵
                  <br />
                  (最高折抵100元)
                </span>
              </div>
              <div className="py-4 px-5 bd-highlight col-2">
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
          <div className="d-flex bd-highlight my-auto">
            <div className="py-4 px-5 flex-grow-1 bd-highlight"></div>
            <div className="py-4 px-5 bd-highlight ">
              總金額 ({products.length}個商品):
              <span className="price-color">${sum}</span>
            </div>
            <div className="py-4 px-5 bd-highlight col-2">
              <Link to="/OrderCheck">
                <button
                  type="button"
                  className="btn btn-primary btn-woof"
                  onClick={handleSubmit}
                >
                  去結帳
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ToDoOrder
