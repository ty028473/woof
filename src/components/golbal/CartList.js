import React from 'react'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../styles/golbal.scss'
import '../../styles/cartList.scss'

function CartList(props) {
  return (
    <>
      <div className="row my-1 px-3 cart-list-styled shadow">
        <div className="col-2 my-auto">
          <h6>name</h6>
          <img src="" className="img-cover-sm-square-cartList" alt="" />
        </div>
        <div className="col-4 my-auto">
          交易地點： <br />
          寵物名稱：
        </div>
        <div className="col-3 my-auto">
          開始時間
          <br />
          結束時間
        </div>
        <div className="col-2 my-auto">
          <span className="price-color">$100</span>
        </div>
        <div className="col-1 my-auto">
          <FontAwesomeIcon
            icon={faTrash}
            size="lg"
            // onClick={() =>
            //   dispatch({ type: 'REMOVE_PRODUCT', id: product.id })
            // }
          />
        </div>
      </div>
    </>
  )
}

export default CartList
