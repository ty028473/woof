import React from 'react'
import { Link } from 'react-router-dom'

// css
import userGlobal from '../../styles/user-global.module.scss'

function AsideNavbarSitter(props) {
  return (
    <>
      <div className="row flex-column text-center">
        <div className="col">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
            className={userGlobal.img_cover_sm}
            alt="會員小頭像"
          />
        </div>
        <div className="col">
          <ul className={userGlobal.list_styled}>
            <li className="p-0">mockup01</li>
            <li className="p-0">保母會員中心</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="mt-4 text-center">
        <ul className={userGlobal.member_nav}>
          <li>
            <Link to="/petsitter">保母資料</Link>
          </li>
          <li>
            <Link to="/petsitter/schedule">工作排程管理</Link>
          </li>
          <li>
            <Link to="/petsitter/record/carryout">訂單紀錄</Link>
          </li>
          <li>
            <Link to="/petsitter/album">保母相簿</Link>
          </li>
        </ul>
      </div>
      <hr />
      <div className="mt-4 text-center">
        <ul className={userGlobal.member_nav}>
          <li>
            <Link to="/member">切換為會員身分</Link>
          </li>
          <li>
            <Link to="/login">登出</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default AsideNavbarSitter
