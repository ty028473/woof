import React from 'react'
import '../../styles/carts.scss'

function ItemListDetail(props) {
  return (
    <>
      <table className="mt-3 table-list-styled shadow">
        <tr>
          <td>
            <h6>審佳宜</h6>
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
              className="img-cover-sm-square"
              alt="保母頭像"
            />
          </td>
          <td className="adderss-width">
            交易地點： <br />
            台北市中山區大同二路28巷2號
            <br />
            寵物名稱： <br />
            毛毛
          </td>
          <td>
            2021/12/1
            <br />
            08:00 - 12:00
          </td>
          <td>$500</td>
        </tr>
      </table>
    </>
  )
}

export default ItemListDetail
