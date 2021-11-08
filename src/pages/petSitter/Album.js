import React from 'react'
import AsideNavbarSitter from '../../components/member/AsideNavbarSitter'
import NavBar from '../../components/golbal/NavBar'
import Footer from '../../components/golbal/Footer'

// css
import userGlobal from '../../styles/user-global.module.scss'

function Album(props) {
  return (
    <>
      {/* navbar區塊 */}
      <NavBar />
      {/* 主要區塊 */}
      <div className="container">
        <div className="row m-5">
          {/* 左側navbar */}
          <aside className="col-2">
            <AsideNavbarSitter />
          </aside>
          {/* 右側content */}
          <main className="col-10">
            <div className={`shadow ${userGlobal.frame}`}>
              {/* 標題區塊 */}
              <section>
                <div className="row align-items-center">
                  <div className="col">
                    <h3>我的保母相簿</h3>
                    <p>傳與寵物的圖片讓使用者更了解你</p>
                  </div>
                  <div className="col text-right">
                    <input
                      type="file"
                      name="avatar"
                      accept="image/png, image/jpeg"
                    />
                  </div>
                </div>
              </section>
              <hr />
              {/* 內容區塊 1 */}
              <section>
                <div className="mt-3">
                  <div class={`card ${userGlobal.album_card}`}>
                    <img
                      src="https://updates.allianzgi.com/-/media/allianzgi/eu/updates/investment-ideas/thematic-investing/the-pet-effect/1920x980-the-pet-effect.jpg?rev=aeeb51dcee9843c184c902862e9be621"
                      class="card-img-top"
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
            </div>
          </main>
        </div>
      </div>
      {/* footer區塊 */}
      <Footer />
    </>
  )
}

export default Album
