import React from 'react'
import '../../styles/carts.scss'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ToDoOrder from './ToDoOrder'

function ProductItem(props) {
  const { cartItems, onRemove } = props
  
  
  return (
    <>
      {/* 如果購物車裡面沒東西，顯示是空的 */}
      {cartItems.length === 0 && (
        <section className="table-list-styled text-center my-3 shadow">
          <h5 className="pt-5">購物車是空的！趕快去逛逛吧～</h5>
          <br />
          <button type="button" className="btn btn-primary btn-woof">
            點我預約去～
          </button>
        </section>
      )}
      {/* 購物車商品條列 */}
      {cartItems.map((item) => (
        <table className="my-3 table-list-styled shadow " key={item.id}>
          <tr>
            <td>
              <h6>{item.name}</h6>
              <img src={item.image} className="img-cover-sm-square" alt="" />
            </td>
            <td className="adderss-width">
              交易地點： <br />
              {item.address}
              <br />
              <br />
              寵物名稱： <br />
              {item.pet_name}
            </td>
            <td>
              {item.start_event} ~
              <br />
              {item.end_event}
            </td>
            <td className="price-color">${item.price}</td>
            <td>
              <FontAwesomeIcon
                icon={faTrash}
                size="lg"
                onClick={() => onRemove(item)}
              />
            </td>
          </tr>
        </table>
      ))}
      <ToDoOrder cartItems={cartItems}/>
    </>
  )
}

export default ProductItem
