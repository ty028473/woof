import React, { useContext } from 'react'
import '../../styles/carts.scss'
import { ProductContext } from '../../contexts/ProductContext'
import ProductDetails from './ProductDetails'
import { BrowserRouter as Link } from 'react-router-dom'
// import { API_URL } from '../../configs/Config'

function ProductList(props) {
  const { products } = useContext(ProductContext)
  const { searchTerm } = props

  return products.length ? (
    <>
      {products
        .filter((v) => {
          if (searchTerm == '') {
            return v
          } else if (
            v.address.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return v
          }
        })
        .map((product) => {
          return <ProductDetails product={product} key={product.id} />
        })}
    </>
  ) : (
    <section className="table-list-styled text-center my-3 shadow">
      <h5 className="pt-5">購物車是空的！趕快去逛逛吧～</h5>
      <br />
      <a href="http://localhost:3000/ReserveMap">
        <button type="button" className="btn btn-primary btn-woof">
          點我預約去～
        </button>
      </a>
    </section>
  )
}

export default ProductList
