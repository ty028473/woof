import React from 'react'
import '../../styles/carts.scss'
import { PUBLIC_URL } from '../../configs/Config'

function ProductItemDetail({ orderCheck }) {
  return (
    <>
      {orderCheck.length > 0 &&
        orderCheck.map((item) => {
          return (
            <table className="mt-3 table-list-styled shadow">
              <tr>
                <td>
                  <h6>{item.pet_sitter_name}</h6>
                  <img
                    src={PUBLIC_URL + item.image}
                    className="img-cover-sm-square"
                    alt="保母頭像"
                  />
                </td>
                <td className="adderss-width-2">
                  交易地點： <br />
                  {item.district}
                  {item.address}
                  <br />
                  <br />
                  寵物名稱： <br />
                  {item.pet_name}
                </td>
                <td>
                  {item.start}
                  <div className="text-center mr-5">|</div>
                  {item.end}
                </td>
                <td className="price-color">${item.title}</td>
              </tr>
            </table>
          )
        })}
    </>
  )
}

export default ProductItemDetail
