import React, { useContext, useState, useEffect } from 'react'
import '../../styles/carts.scss'
import { ProductContext } from '../../contexts/ProductContext'
import ProductDetails from './ProductDetails'
import { BrowserRouter as Link } from 'react-router-dom'



function ProductList(props) {
  const { products } = useContext(ProductContext)
  const { searchTerm, setShowProductList, setShowLoading } = props
  // const [findImg, setFindImg] = useState([])
  // const [viewProducts, setViewProducts] = useState()

  // 抓取保母名稱+圖片
  // useEffect(async () => {
  //   products.forEach(async (item) => {
  //     let res = await axios.post(
  //       `${API_URL}/orders/member/findImg`,
  //       { pet_sitter_id: item.pet_sitter_id },
  //       {
  //         withCredentials: true,
  //       }
  //     )
  //     item.name = res.data[0].name
  //     item.image = res.data[0].image
  //   })
  //   // setViewProducts(products)
  // }, [products])

  // let filteredProducts = products.filter((v) => {
  //   if (searchTerm === '') {
  //     return v
  //   } else if (v.address.toLowerCase().includes(searchTerm.toLowerCase())) {
  //     return v
  //   }
  // })

  return products.length ? (
    <>
      {products.map((product) => {
        return (
          <ProductDetails
            product={product}
            key={product.id}
            setShowProductList={setShowProductList}
            setShowLoading={setShowLoading}
          />
        )
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
