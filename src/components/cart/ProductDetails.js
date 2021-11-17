import React, { useContext } from 'react'
import { ProductContext } from '../../contexts/ProductContext'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ToDoOrder from './ToDoOrder'

// 計算總價
const total = (product) => {
  let sum = 0
  for (let i = 0; i < product.length; i++) {
    sum += parseInt(product[i].title)
  }
  return sum
}

// console.log(parseInt(product.title))
// let total = 0
// total += parseInt(product.title)
// console.log(sum)

const ProductDetails = ({ product }) => {
  const { dispatch } = useContext(ProductContext)
  return (
    <>
      <table className="my-3 table-list-styled shadow">
        <tr>
          <td>
            <h6>name</h6>
            <img src="" className="img-cover-sm-square" alt="" />
          </td>
          <td className="adderss-width">
            交易地點： <br />
            {product.district}
            {product.address}
            <br />
            <br />
            寵物名稱： <br />
            {product.pet_id}
          </td>
          <td>
            {product.start} ~
            <br />
            {product.end}
          </td>
          <td className="price-color">${product.title}</td>
          <td>
            <FontAwesomeIcon
              icon={faTrash}
              size="lg"
              onClick={() =>
                dispatch({ type: 'REMOVE_PRODUCT', id: product.id })
              }
            />
          </td>
        </tr>
      </table>
      <ToDoOrder product={product} total={total} />
    </>
  )
}

export default ProductDetails
