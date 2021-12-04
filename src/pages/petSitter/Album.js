import React from 'react'

import GlobalJsx from '../../components/member/GlobalJsx'
// css
import userGlobal from '../../styles/user-global.module.scss'

function Album() {
  return (
    <>
      <GlobalJsx>
        {/* 標題區塊 */}
        <section>
          <div className="row align-items-center">
            <div className="col">
              <h3>我的保母相簿</h3>
              <p>傳與寵物的圖片讓使用者更了解你</p>
            </div>
            <div className="col text-right">
              <input type="file" name="avatar" accept="image/png, image/jpeg" />
            </div>
          </div>
        </section>
        <hr />
        {/* 內容區塊 1 */}
        <section>
          <div className="mt-3">
            <div className={`card ${userGlobal.album_card}`}>
              <img
                src="https://updates.allianzgi.com/-/media/allianzgi/eu/updates/investment-ideas/thematic-investing/the-pet-effect/1920x980-the-pet-effect.jpg?rev=aeeb51dcee9843c184c902862e9be621"
                className="card-img-top"
                alt="..."
              />
              {/* 文字區塊 */}
              {/* <div class="card-body">
                      <p class="card-text">
                        我與某位顧客的寵物合照，這隻狗狗非常乖，也很親近人
                      </p>
                    </div> */}
            </div>
          </div>
        </section>
      </GlobalJsx>
    </>
  )
}

export default Album
