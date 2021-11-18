import '../../styles/golbal.scss'
// import ProductForm from '../../components/cart/ProductForm'
import ProductForm2 from '../../components/cart/ProductForm2'
import ProductContextProvider from '../../contexts/ProductContext'
import NavBar from '../../components/golbal/NavBar'

function testForm(props) {
  return (
    <ProductContextProvider>
      <NavBar />
      <div className="container">
        {/* <ProductForm /> */}
        <ProductForm2 />
      </div>
    </ProductContextProvider>
  )
}

export default testForm
