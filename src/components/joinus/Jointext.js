import React from 'react'
import '../../styles/joinus.scss'

function Jointext(props) {
  return (
    <>
      <div className="container ">
        <div className="jsbg">
          <div className="jsleft">
          <div className="pt-4">
            <img
              className="jsImg3"
              src="../../../images/login/login.png"
              alt="立即預約"
            />
          </div>
          </div>
          <div className="jsright">
            <div className="formsub">
              <h3 className="jsmb24">成為保母</h3>
              <form>
                <select class="form-control  mb-2">
                  <option>台北市信義區</option>
                  <option>台北市中山區</option>
                  <option>台北市中正區</option>
                  <option>台北市北投區</option>
                  <option>台北市文山區</option>
                </select>
                <div class="form-group mb-4 ">
                  <input
                    type="text"
                    class="form-control "
                    id="formGroupExampleInput"
                    placeholder="地址"
                  />
                </div>
                <div class="form-group mb-3">
                  <input
                    type="text"
                    class="form-control "
                    id="formGroupExampleInput"
                    placeholder="身分證字號"
                  />
                </div>
                <div className=" mb-4 d-flex  align-items-center">
                  <button
                    type="button"
                    className=" btn btn-secondary btn-woof jsbtnuodata"
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
                    className=" btn btn-primary btn-woof jsbtn"
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
