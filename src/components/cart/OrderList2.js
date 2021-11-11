import React from 'react'
import ProductItem from './ProductItem'

function OrderList2(props) {
  const { productsInOrder, setProductsInOrder } = props

  // 處理項目刪除用
  const handleDelete = (id) => {
    //1. 先從原本的陣列(物件)拷貝出一個新陣列(物件)
    //2. 在拷貝出的新陣列(物件)上運算或處理
    const newProductsInOrder = [...productsInOrder].filter((v, i) => {
      return v.id !== id
    })

    //3. 設定回原本的狀態
    setProductsInOrder(newProductsInOrder)
  }
  return (
    <>
      {productsInOrder.map((v, i) => {
        return (
          <ProductItem
            key={v.id}
            name={v.name}
            image={v.image}
            address={v.address}
            pet_name={v.pet_name}
            start_event={v.start_event}
            end_event={v.end_event}
            price={v.price}
            // counts={counts}
            // setCounts={setCounts}
            handleDelete={() => {
              handleDelete(v.id)
            }}
          />
        )
      })}
    </>
  )
}

export default OrderList2
