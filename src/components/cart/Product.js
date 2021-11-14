import React from 'react'

export default function Product(props) {
  const { product, onAdd } = props
  return (
    <div>
      {/* <img
        className="img-cover-sm-square"
        src={product.image}
        alt={product.name}
      /> */}
      <h3>{product.name}</h3>
      交易地點：{product.address}
      <br />
      寵物名稱：
      {/* <input type="text"/> */}
      {product.pet_name}
      <br />
      {product.start_event}～{product.end_event}
      <div>${product.price}</div>
      <div>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  )
}
