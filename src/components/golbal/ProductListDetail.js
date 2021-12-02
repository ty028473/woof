import React, { useContext, useState, useEffect } from 'react'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../styles/golbal.scss'
import '../../styles/cartList.scss'
import { ProductContext } from '../../contexts/ProductContext'
import { PUBLIC_URL } from '../../configs/Config'
import axios from 'axios'
import { API_URL } from '../../configs/Config'

const ProductListDetail = ({ product }) => {
  const { products } = useContext(ProductContext)
  const { dispatch } = useContext(ProductContext)
  const [otherInfo, setOtherInfo] = useState({ name: '', image: '' })

  useEffect(async () => {
    let res = await axios.post(`${API_URL}/orders/member/findImg`, {
      pet_sitter_id: product.pet_sitter_id,
    })
    setOtherInfo(res.data[0])
  }, [])

  return (
    <>
      <div className="row my-1 px-3 cart-list-item">
              <div className="col-2 my-auto">
                <span>{otherInfo.name}</span>
                <img
                  src={PUBLIC_URL + otherInfo.image}
                  className="img-cover-sm-square-cartList"
                  alt=""
                />
              </div>
              <div className="col-3 my-auto">
                {product.district}
                {product.address}
                <br />
                {product.pet_id}
              </div>
              <div className="col-4 my-auto">
                {new Date(`${product.start}`).toLocaleString()}<br/>
                {new Date(`${product.end}`).toLocaleString()}
              </div>
              <div className="col-2 my-auto">
                <span className="price-color">${product.title}</span>
              </div>
              <div className="col-1 my-auto">
                <FontAwesomeIcon
                  icon={faTrash}
                  size="lg"
                  onClick={() =>
                    dispatch({ type: 'REMOVE_PRODUCT', id: product.id })
                  }
                />
              </div>
            </div>
    </>
  )
}

export default ProductListDetail
