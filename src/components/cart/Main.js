import React from 'react'
import Product from './Product'

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <>
      <main className="block-2 col-2-2">
        <div className="row-2">
          {products.map((product) => (
            <Product key={product.id} product={product} onAdd={onAdd}></Product>
          ))}
        </div>
      </main>
    </>
  )
}
