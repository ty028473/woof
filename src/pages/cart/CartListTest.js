import React from 'react'
import NewNavBar from '../../components/golbal/NewNavBar'
import Footer from '../../components/golbal/Footer'
import CartList from '../../components/golbal/CartList'
import '../../styles/carts.scss'
import ProductContextProvider from '../../contexts/ProductContext'

function CartListTest(props) {
  return (
    <div>
      <NewNavBar />
      <ProductContextProvider>
      <CartList />
      </ProductContextProvider>
      <Footer />
    </div>
  )
}

export default CartListTest
