import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { BsFillCartFill } from 'react-icons/bs'
import '../../styles/golbal.scss'
import '../../styles/navbar-footer.scss'

function NavBar(props) {
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
        <Nav className="mr-right flex-right">
          {/* <a className="icon-cart" href="/productList">
            <BsFillCartFill />
          </a> */}
          <a className="icon-cart" href="#/cart">
            <BsFillCartFill className="mr-2"/>
            {props.countCartItems ? (
              <button className="badge">{props.countCartItems}</button>
            ) : (
              ''
            )}
          </a>
          <Nav.Link className="nav-title" href="/login">
            登入
          </Nav.Link>
          <Nav.Link className="nav-title" href="/signup">
            註冊
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  )
}

export default NavBar
