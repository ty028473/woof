import React from 'react'
import GlobalJsx from '../../components/member/GlobalJsx'

// css
import userGlobal from '../../styles/user-global.module.scss'

function PetsAdd() {
  return (
    <>
      <GlobalJsx>
        {/* 標題區塊 */}
        <section>
          <div>
            <h3>新增寵物</h3>
            <p>讓保母更了解您的寵物</p>
          </div>
        </section>
        <hr />
        {/* 內容區塊 1 */}
        <section>
          <div className="mt-4">
            <div className="row">
              <div className={`col-2 text-center ${userGlobal.title_font}`}>
                <ul className={userGlobal.list_styled}>
                  <li className="my-4">寵物名稱</li>
                  <li className="my-4">性別</li>
                  <li className="my-4">歲數</li>
                  <li className="my-4">詳細資料</li>
                </ul>
              </div>
              <div className="col-6">
                {/* <li>mockup01@gmail.com</li> */}
                <div className="input-group my-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                  />
                </div>
                <div className="input-group my-4">
                  <select className="custom-select">
                    <option selected>性別</option>
                    <option value="1">公</option>
                    <option value="2">母</option>
                    <option value="3">不顯示</option>
                  </select>
                </div>
                <div className="input-group my-4">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="生日"
                  />
                </div>
                <div className="input-group my-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                  />
                </div>
                <button type="button" className="btn btn-primary btn-woof">
                  送出
                </button>
              </div>
              <div className="col-4 text-center">
                <div>
                  <img
                    src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
                    className={userGlobal.img_cover_lg}
                    alt="會員大頭像"
                  />
                  <br />
                  <br />
                  <button type="button" className="btn btn-primary btn-woof">
                    上傳圖片
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={userGlobal.Bottom_blank}></div>
        </section>
      </GlobalJsx>
    </>
  )
}

export default PetsAdd
