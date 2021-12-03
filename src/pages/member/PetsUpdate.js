import React, { useState, useRef, useEffect } from 'react'
import { useHistory, withRouter } from 'react-router-dom'
import GlobalJsx from '../../components/member/GlobalJsx'
import axios from 'axios'
import swal from 'sweetalert'
import { API_URL, PUBLIC_URL } from '../../configs/Config'
// css
import userGlobal from '../../styles/user-global.module.scss'

function PetsUpdate(props) {
  let history = useHistory()

  const [updatePetData, setupdatePetData] = useState({
    id: 0,
    name: '',
    gender: 0,
    birthday: 0,
    information: '',
    image: '',
  })
  console.log(updatePetData)

  // 讀取從Pets.js來的資料
  useEffect(() => {
    setupdatePetData(props.location.state.data)
  }, [])

  // 圖片處理
  const fileInputRef = useRef()
  const [preview, setPreview] = useState('')
  const [uploadImage, setuploadImage] = useState(null)

  // 表單更新資料
  function handleChange(e) {
    setupdatePetData({ ...updatePetData, [e.target.name]: e.target.value })
  }

  function handleUpload(e) {
    const file = e.target.files[0]

    if (file && file.type.substr(0, 5) === 'image') {
      setuploadImage(file)
      setupdatePetData({ ...updatePetData, [e.target.name]: file })
    } else {
      setuploadImage(null)
    }
  }

  useEffect(() => {
    if (uploadImage) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result)
      }
      reader.readAsDataURL(uploadImage)
    } else {
      setPreview(null)
    }
  }, [uploadImage])

  // 送回後端
  async function handleSubmit(e) {
    e.preventDefault()
    try {
      let formData = new FormData()
      formData.append('id', updatePetData.id)
      formData.append('name', updatePetData.name)
      formData.append('gender', updatePetData.gender)
      formData.append('birthday', updatePetData.birthday)
      formData.append('information', updatePetData.information)
      formData.append('image', updatePetData.image)
      let res = await axios.post(`${API_URL}/pet/updatePet`, formData, {
        withCredentials: true,
      })
      swal({
        title: '寵物資料修改成功',
        text: ' ',
        icon: 'success',
        buttons: false,
        timer: 1000,
      })
    } catch (err) {
      // 抓取錯誤訊息
      const errorsData = err.response.data.errors
      const errorsArray = errorsData.map((v) => v.msg)
      const errorShow = errorsArray.join(' ')

      swal({
        title: errorShow,
        text: ' ',
        icon: 'error',
        buttons: false,
        timer: 1000,
      })
    }
  }
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
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className={`col-2 text-center ${userGlobal.title_font}`}>
                  <ul className={userGlobal.list_styled}>
                    <li className="my-4">
                      <label htmlFor="name">寵物名稱</label>
                    </li>
                    <li className="my-4">
                      <label htmlFor="gender">寵物性別</label>
                    </li>
                    <li className="my-4">
                      <label htmlFor="birthday">出生年份</label>
                    </li>
                    <li className="my-4">
                      <label htmlFor="information">詳細資料</label>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul className={userGlobal.list_styled}>
                    <li className="my-4">
                      <div className="from-group">
                        <input
                          id="name"
                          name="name"
                          type="text"
                          className="form-control"
                          value={updatePetData.name}
                          onChange={handleChange}
                        />
                      </div>
                    </li>
                    <li className="my-4">
                      <div className="from-group">
                        <select
                          id="gender"
                          name="gender"
                          className="form-control"
                          value={updatePetData.gender}
                          onChange={handleChange}
                        >
                          <option value="1">公</option>
                          <option value="2">母</option>
                          <option value="3">不顯示</option>
                        </select>
                      </div>
                    </li>
                    <li className="my-4">
                      <div className="from-group">
                        <input
                          id="birthday"
                          name="birthday"
                          type="number"
                          className="form-control"
                          min="1900"
                          max="2099"
                          step="1"
                          value={updatePetData.birthday}
                          onChange={handleChange}
                        />
                      </div>
                    </li>
                    <li className="my-4">
                      <div class="form-group">
                        <textarea
                          className="form-control"
                          id="information"
                          name="information"
                          rows="2"
                          value={updatePetData.information}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </li>
                  </ul>
                  <button className="btn btn-primary btn-woof">送出</button>
                </div>
                <div className="col-4 text-center">
                  <div>
                    {uploadImage ? (
                      <img
                        src={preview}
                        className={userGlobal.img_cover_lg}
                        alt="會員大頭像"
                      />
                    ) : (
                      <img
                        src={`${PUBLIC_URL}${updatePetData.image}`}
                        className={userGlobal.img_cover_lg}
                        alt="會員預設頭像"
                      />
                    )}
                    <br />
                    <br />
                    <div className="from-group">
                      <button
                        className="btn btn-primary btn-woof"
                        onClick={(e) => {
                          e.preventDefault()
                          fileInputRef.current.click()
                        }}
                      >
                        上傳圖片
                      </button>
                      <input
                        id="image"
                        name="image"
                        type="file"
                        accept="image/jpeg,image/png"
                        className="d-none"
                        onChange={handleUpload}
                        ref={fileInputRef}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className={userGlobal.Bottom_blank}></div>
        </section>
      </GlobalJsx>
    </>
  )
}

export default withRouter(PetsUpdate)
