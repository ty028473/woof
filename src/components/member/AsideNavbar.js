import React from 'react'
import '../../styles/member.scss'
import { Link } from 'react-router-dom'

const AsideNavbar = (props) => {
  return (
    <>
      <aside className="col-2">
        <div className="row flex-column text-center">
          <div className="col">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
              className="img-cover-sm"
              alt="會員小頭像"
            />
          </div>
          <div className="col">
            <ul className="list-styled">
              <li className="p-0">mockup01</li>
              <li className="pb-3">會員中心</li>
              <hr />
            </ul>
          </div>
        </div>
        <ul className="list-styled member-nav">
          <li>
            <Link to="/Member">會員資料</Link>
          </li>
          <li>
            <Link to="/Password">忘記密碼</Link>
          </li>
          <li>
            <Link to="/Pets">寵物資料</Link>
          </li>
          <li>
            <Link to="/Record">訂單紀錄</Link>
          </li>
          <li>
            <Link to="/Collection">保母收藏</Link>
          </li>
          <hr className="mb-3" />
          <li>
            <Link to="/PetSitter">切換為保母身分</Link>
          </li>
          <li>
            <Link to="/login">登出</Link>
          </li>
        </ul>
      </aside>
    </>
  )
}

export default AsideNavbar
