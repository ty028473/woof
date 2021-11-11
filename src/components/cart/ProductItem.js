import React from 'react'
import '../../styles/carts.scss'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// 每個商品的物件
// {
//     id :1,
//     name:'審佳宜',
//     image:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
//     address:'台北市中山區大同二路28巷2號',
//     pet_name:'毛毛',
//     start_event:'2021/12/1 08:00',
//     end_event:'2021/12/1 12:00',
//     price: 500,
// }

function ProductItem(props) {
  const {
    name,
    image,
    address,
    pet_name,
    start_event,
    end_event,
    price,
    handleDelete,
  } = props

  return (
    <>
      <table className="my-3 table-list-styled shadow">
        <tr>
          <td>
            <h6>{name}</h6>
            <img src={image} className="img-cover-sm-square" alt="" />
          </td>
          <td className="adderss-width">
            交易地點： <br />
            {address}
            <br />
            <br />
            寵物名稱： <br />
            {pet_name}
          </td>
          <td>
            {start_event} ~
            <br />
            {end_event}
          </td>
          <td className="price-color">${price}</td>
          <td>
            <FontAwesomeIcon icon={faTrash} size="lg" onClick={handleDelete} />
          </td>
        </tr>
      </table>
    </>
  )
}

export default ProductItem
