import React from 'react'

function MemberData(props) {
  return (
    <>
      <section>
        <div>
          <h3>我的檔案</h3>
          <p>管理你的檔案以保護你的帳戶</p>
          <hr />
        </div>
        <div className="mt-4">
          <div className="row">
            <div className="col-2 text-center">
              <ul className="title-list-styled">
                <li>帳號</li>
                <li>姓名</li>
                <li>電話</li>
                <li>生日</li>
                <li>性別</li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="list-styled">
                <li>mockup01@gmail.com</li>
                <li>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Username"
                    />
                  </div>
                </li>
                <li>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Username"
                    />
                  </div>
                </li>

                <li>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Username"
                    />
                  </div>
                </li>
                <li className="p-0">
                  <div class="input-group mb-3">
                    <select class="custom-select">
                      <option selected>Choose...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                </li>
              </ul>
              <button type="button" className="btn btn-primary btn-woof">
                送出
              </button>
            </div>
            <div className="col-4 text-center">
              <div className="mb-3">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                  className="img-cover-lg"
                  alt="會員大頭像"
                />
              </div>
              <button type="button" className="btn btn-primary btn-woof">
                上傳圖片
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="m-5">
        <div className="row record-block text-center p-5">
          <div className="col divider">
            <h5>預約次數</h5>
            <h5>5</h5>
          </div>
          <div className="col divider">
            <h5>累積紅利</h5>
            <h5>30</h5>
          </div>
          <div className="col">
            <h5>已折抵紅利</h5>
            <h5>60</h5>
          </div>
        </div>
      </section>
    </>
  )
}

export default MemberData
