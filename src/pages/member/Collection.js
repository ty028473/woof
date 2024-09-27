import React from 'react'
import { Link } from 'react-router-dom'
import GlobalJsx from '../../components/member/GlobalJsx'
// css
import userGlobal from '../../styles/user-global.module.scss'

// icon
import {
  faTrash,
  faStar,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Collection() {
  return (
    <>
      <GlobalJsx>
        <section>
          <div className="row align-items-center">
            <div className="col">
              <h3>保母收藏一覽</h3>
              <p>管理你喜愛的保母資訊</p>
            </div>
            <div className="col text-right">
              <Link
                exact
                to="/member/pets/add"
                className="btn btn-primary btn-woof"
              >
                {/* 到時候看保母在哪頁換連結 */}
                查看所有保母
              </Link>
            </div>
          </div>
        </section>
        <hr />
        <section className="m-3">
          <div className={userGlobal.data_block}>
            <div className="text-right mr-5">
              <FontAwesomeIcon icon={faTrash} size="lg" />
            </div>

            <div className="row">
              <div className="col-3 text-center">
                <h5 className={userGlobal.title_font}>林海海保母</h5>
                <img
                  src="https://kpopthing.com/wp-content/uploads/2021/03/Yes-i-an-sana-making.jpg"
                  className={userGlobal.img_cover_square_sm}
                  alt="寵物頭像"
                />
                <br />
                <br />
                <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
                文山區
                <br />
                <FontAwesomeIcon icon={faStar} size="lg" />
                評價星數
              </div>
              <div className="col-1 p-0 text-center">
                <ul
                  className={`${userGlobal.list_styled} ${userGlobal.title_font}`}
                >
                  <li>技能</li>
                  <li>簡介</li>
                </ul>
              </div>
              <div className="col-7">
                <ul
                  className={`${userGlobal.list_styled} ${userGlobal.content_font}`}
                >
                  <li>PCP寵物照護員認證(基礎)</li>
                  <li>
                    本身體力不錯，常帶雇主的狗狗出門散步耗體力。目前其中1位雇主的狗體重24公斤，愛爆衝，但因為之前有帶多隻毛孩外出的經驗及長時間固定運動，因此可以控制住比較活潑好動的狗狗。在遛毛孩的同時，也會不定時拍照及拍影片回傳給飼主，讓飼主放心。
                  </li>
                </ul>
              </div>
              <div className="col-1"></div>
            </div>

            <div className="text-right mr-5">
              <button type="button" className="btn btn-secondary btn-woof-Chat">
                聊聊
              </button>
              <button
                type="button"
                className="btn btn-primary btn-woof-Chat ml-3"
              >
                觀看更多
              </button>
            </div>
          </div>
        </section>
      </GlobalJsx>
    </>
  )
}

export default Collection
