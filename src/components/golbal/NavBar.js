import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { BsFillCartFill } from 'react-icons/bs'
import '../../styles/golbal.scss'

function NavBar(props) {
  return (
    <>
      <Navbar fixed="top" sticky="top" bg="secondary" variant="dark">
        <Navbar.Brand href="#home">
          <img
            className="logo-woof"
            src="../../../images/global/logo-woof.png"
            alt="logo-woof"
          />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link className="nav-title" href="#home">
            預約帶遛
          </Nav.Link>
          <Nav.Link className="nav-title" href="#features">
            關於我們
          </Nav.Link>
          <Nav.Link className="nav-title" href="#pricing">
            成為保母
          </Nav.Link>
        </Nav>
        <Nav className="mr-right flex-right">
          <a className="icon-cart" href="#1">
            <BsFillCartFill />
          </a>
          <Nav.Link className="nav-title" href="#1">
            登入
          </Nav.Link>
          <Nav.Link className="nav-title" href="#2">
            註冊
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  )
}

export default NavBar
