import React, { useContext } from 'react'
import '../../styles/golbal.scss'
import '../../styles/cartList.scss'
import { ProductContext } from '../../contexts/ProductContext'
import ProductListDetail from './ProductListDetail'

function CartList(props) {
  const { products } = useContext(ProductContext)

  return products.length ? (
    <>
      {products.map((product) => {
        return <ProductListDetail product={product} key={product.id} />
      })}
    </>
  ) : (
    <div className="cart-list-styled">
      <section className="cart-list-item text-center">
        <h5 className="pt-1">購物車是空的！趕快去逛逛吧～</h5>
        <a href="http://localhost:3000/ReserveMap">
          <button type="button" className="btn btn-primary btn-woof">
            點我預約去～
          </button>
        </a>
      </section>
    </div>
  )
}

export default CartList
