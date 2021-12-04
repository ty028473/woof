import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import swal from 'sweetalert'
// css
import userGlobal from '../../styles/user-global.module.scss'

function AsideNavbar() {
  let name = JSON.parse(localStorage.getItem('member')).member.name
  let history = useHistory()

  function handleIdentity() {
    const localmember = JSON.parse(localStorage.getItem('member'))

    if (!localmember.member.petSitterId) {
      swal({
        title: '您目前沒有保母身分',
        text: '要去成為保母嗎?',
        icon: 'warning',
        buttons: {
          cancel: {
            text: '取消',
            value: 'no',
            visible: true,
            className: 'btn btn-info btn-woof',
            closeModal: true,
          },
          confirm: {
            text: '前往',
            value: 'yes',
            visible: true,
            className: 'btn btn-primary btn-woof',
            closeModal: true,
          },
        },
      }).then((value) => {
        if (value === 'yes') {
          history.push('/joinus')
        }
      })
    } else {
      history.push('/PetSitter')
    }
  }
  return (
    <>
      <div className="row flex-column text-center">
        <div className="col">
          {/* <img
            src={memberData && `${PUBLIC_URL}${memberData.image}`}
            // src={`${PUBLIC_URL}${memberData.image}`}
            className={userGlobal.img_cover_sm}
            alt="會員小頭像"
          /> */}
        </div>
        <div className="col">
          <ul className={userGlobal.list_styled}>
            <li className="p-0">{name}</li>
            <li className="p-0">會員中心</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="mt-4 text-center">
        <ul className={userGlobal.member_nav}>
          <li>
            <Link to="/member">會員資料</Link>
          </li>
          <li>
            <Link to="/member/changepwd">更改密碼</Link>
          </li>
          <li>
            <Link to="/member/pets">寵物資料</Link>
          </li>
          <li>
            <Link to="/member/record/carryout">訂單紀錄</Link>
          </li>
          {/* <li>
            <Link to="/member/Collection">保母收藏</Link>
          </li> */}
        </ul>
      </div>
      <hr />
      <div className="mt-4 text-center">
        <ul className={userGlobal.member_nav}>
          <li>
            {/* <Link to="/PetSitter" onClick={handleIdentity}>
              切換為保母身分
            </Link> */}
            <a href="#/" onClick={handleIdentity}>
              切換為保母身分
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default AsideNavbar
