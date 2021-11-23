import React, { createContext, useEffect, useReducer } from 'react'
import { ProductReducer } from '../reducers/ProductReducer'

export const ProductContext = createContext()

const ProductContextProvider = (props) => {
  const [products, dispatch] = useReducer(ProductReducer, [], () => {
    const localData = localStorage.getItem('products')
    return localData ? JSON.parse(localData) : []
  })
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products))
  }, [products])

  return (
    <ProductContext.Provider value={{ products, dispatch }}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider
