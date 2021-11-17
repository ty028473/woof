import '../../styles/golbal.scss'
import ProductForm from '../../components/cart/ProductForm'
import ProductContextProvider from '../../contexts/ProductContext'
import NavBar from '../../components/golbal/NavBar'

function testForm(props) {
  return (
    <ProductContextProvider>
      <NavBar />
      <ProductForm />
    </ProductContextProvider>
  )
}

export default testForm
