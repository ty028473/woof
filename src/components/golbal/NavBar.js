import { BrowserRouter as Link } from 'react-router-dom'
import React, { useContext } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { BsFillCartFill } from 'react-icons/bs'
// context
import { ProductContext } from '../../contexts/ProductContext'
import { UserContext } from '../../contexts/UserContext'
import axios from 'axios'
import { API_URL } from '../../configs/Config'

// css
import '../../styles/golbal.scss'
import '../../styles/navbar-footer.scss'

function NavBar() {
  const { products } = useContext(ProductContext)
  const { memberSession } = useContext(UserContext)
  console.log('Navbar.js', memberSession)

  // 登出
  async function handleLogout() {
    try {
      localStorage.removeItem('member')
      localStorage.removeItem('id')
      await axios.get(`${API_URL}/auth/logout`, { withCredentials: true })
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <>
      <Navbar fixed="top" sticky="top" bg="secondary" variant="dark">
        <Navbar.Brand href="/">
          <img
            className="logo-woof"
            src="../../../images/global/logo-woof.png"
            alt="logo-woof"
          />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link className="nav-title" href="/ReserveMap">
            預約帶遛
          </Nav.Link>
          <Nav.Link className="nav-title" href="/about">
            關於我們
          </Nav.Link>
          <Nav.Link className="nav-title" href="/joinus">
            成為保母
          </Nav.Link>
        </Nav>
        {memberSession ? (
          <Nav className="mr-right flex-right">
            <Nav.Link className="icon-cart" href="/cart">
              <BsFillCartFill className="mr-2" />
              {products.length ? (
                <button className="badge">{products.length}</button>
              ) : (
                ''
              )}
            </Nav.Link>
            <Nav.Link className="nav-title" href="/member">
              會員中心
            </Nav.Link>
            <Nav.Link
              className="nav-title"
              href="/login"
              onClick={handleLogout}
            >
              登出
            </Nav.Link>
          </Nav>
        ) : (
          <Nav className="mr-right flex-right">
            <Nav.Link className="nav-title" href="/login">
              登入
            </Nav.Link>
            <Nav.Link className="nav-title" href="/signup">
              註冊
            </Nav.Link>
          </Nav>
        )}
      </Navbar>
    </>
  )
}

export default NavBar
