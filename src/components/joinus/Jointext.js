import React from 'react'
import '../../styles/about.scss'

function Jointext(props) {
  return (
    <>
      <div className="container ">
        <div className="aboutbg">
          <div className="aboutleft"></div>
          <div className="aboutright">
            <div className="formsub">
              <h1 className="aboutmb24">成為保母</h1>
              <form>
                <select class="form-control form-control-lg mb-2">
                  <option>台北市信義區</option>
                  <option>台北市中山區</option>
                  <option>台北市中正區</option>
                  <option>台北市北投區</option>
                  <option>台北市文山區</option>
                </select>
                <div class="form-group mb-4 ">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    id="formGroupExampleInput"
                    placeholder="地址"
                  />
                </div>
                <div class="form-group mb-3">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    id="formGroupExampleInput"
                    placeholder="身分證字號"
                  />
                </div>
                <div className=" mb-4 d-flex  align-items-center">
                  <button
                    type="button"
                    className=" btn btn-secondary btn-woof aboutbtnuodata"
                  >
                    身分證正面上傳
                  </button>
                  <label className="fontsize">還沒上傳檔案</label>
                </div>
                <div class="form-group form-check checkwh">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    我遵守網站守則
                  </label>
                </div>
                <div className=" mt-4 d-flex  align-items-center">
                  <button
                    type="button"
                    className=" btn btn-primary btn-woof aboutbtn"
                  >
                    送出
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Jointext
