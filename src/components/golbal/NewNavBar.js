import React from 'react'
import ProductContextProvider from '../../contexts/ProductContext'
import NavBar from './NavBar'

function NewNavBar() {
  return (
    <ProductContextProvider>
      <NavBar />
    </ProductContextProvider>
  )
}

export default NewNavBar
