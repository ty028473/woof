import React from 'react'
import NewNavBar from '../../components/golbal/NewNavBar'
import Footer from '../../components/golbal/Footer'
import CartList from '../../components/golbal/CartList'
import SyncLoader from 'react-spinners/SyncLoader'
import '../../styles/carts.scss'

function CartListTest(props) {
  return (
    <div>
      <NewNavBar />
      <div className="text-center m-5">
        <SyncLoader color={'#087bdc'} size={30} margin={10} />
        <h2 className="loading-text mt-4">資料處理中...</h2>
      </div>
      <CartList />
      <Footer />
    </div>
  )
}

export default CartListTest
