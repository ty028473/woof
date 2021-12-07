import React, { useState } from 'react'
import axios from 'axios'
import swal from 'sweetalert'
import { API_URL } from '../../configs/Config'

// css
import '../../styles/joinus.scss'

function Jointext() {
  const [joinPetSitterData, setjoinPetSitterData] = useState({
    // 保母會員資料
    district: '台北市中正區',
    address: '',
    ID_number: '',
  })

  // 表單更新資料
  function handleChange(e) {
    setjoinPetSitterData({
      ...joinPetSitterData,
      [e.target.name]: e.target.value,
    })
  }

  // 送回後端
  async function handleSubmit(e) {
    e.preventDefault()
    try {
      let res = await axios.post(
        `${API_URL}/petSitter/joinus`,
        joinPetSitterData,
        {
          withCredentials: true,
        }
      )
      swal({
        title: '保母會員資料修改成功',
        text: ' ',
        icon: 'success',
        buttons: false,
        timer: 2000,
      }).then(() => {
        localStorage.setItem('member', JSON.stringify(res.data))
        localStorage.setItem('id', JSON.stringify(res.data.member))
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <div className="container ">
        <div className="jsbg mt-4 mb-4 shadow">
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
              <form onSubmit={handleSubmit}>
                <div className="from-group row">
                  <label htmlFor="district" className="col-3 col-form-label">
                    台北市
                  </label>
                  <div className="col-9">
                    <select
                      id="district"
                      name="district"
                      className="form-control"
                      value={joinPetSitterData.district}
                      onChange={handleChange}
                    >
                      <option value="台北市中正區">中正區</option>
                      <option value="台北市大同區">大同區</option>
                      <option value="台北市中山區">中山區</option>
                      <option value="台北市松山區">松山區</option>
                      <option value="台北市大安區">大安區</option>
                      <option value="台北市萬華區">萬華區</option>
                      <option value="台北市信義區">信義區</option>
                      <option value="台北市士林區">士林區</option>
                      <option value="台北市北投區">北投區</option>
                      <option value="台北市內湖區">內湖區</option>
                      <option value="台北市南港區">南港區</option>
                      <option value="台北市文山區">文山區</option>
                    </select>
                  </div>
                </div>
                <div className="form-group my-4">
                  <input
                    id="address"
                    name="address"
                    type="text"
                    className="form-control"
                    placeholder="地址"
                    value={joinPetSitterData.address}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group my-4">
                  <input
                    id="ID_number"
                    name="ID_number"
                    type="text"
                    className="form-control"
                    placeholder="身分證字號"
                    value={joinPetSitterData.ID_number}
                    onChange={handleChange}
                  />
                </div>
                {/* <div className=" mb-4 d-flex  align-items-center">
                  <button
                    type="button"
                    className=" btn btn-secondary btn-woof jsbtnuodata"
                  >
                    身分證正面上傳
                  </button>
                  <label className="fontsize">還沒上傳檔案</label>
                </div> */}
                <div className="form-group form-check checkwh">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" for="exampleCheck1">
                    我遵守網站守則
                  </label>
                </div>
                <div className=" mt-4 d-flex  align-items-center">
                  <button className=" btn btn-primary btn-woof jsbtn">
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
