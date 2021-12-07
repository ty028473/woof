import React, { useState, useEffect, useRef } from 'react'
import GlobalJsx from '../../components/member/GlobalJsx'
import axios from 'axios'
import swal from 'sweetalert'
import { API_URL, PUBLIC_URL } from '../../configs/Config'
// css
import userGlobal from '../../styles/user-global.module.scss'

// icon
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Album() {
  const [albumData, setAlbumData] = useState({
    image: '',
  })
  const fileInputRef = useRef()
  const [album, setAlbum] = useState([])
  const [controlDisplay, setControlDisplay] = useState([])
  // console.log('albumData', albumData)
  console.log('album', album)
  console.log('controlDisplay', controlDisplay)
  // 抓取相簿資料
  useEffect(() => {
    async function getAlbumData() {
      let res = await axios.get(`${API_URL}/petSitter/getAlbum`, {
        withCredentials: true,
      })
      setAlbum(res.data)

      // 加一個控制display顯示的key
      let addDisplay = res.data.map((v) => ({ ...v, display: 'd-none' }))
      setControlDisplay(addDisplay)
    }
    getAlbumData()
  }, [album.length])

  function handleUpload(e) {
    const file = e.target.files[0]
    if (file && file.type.substr(0, 5) === 'image') {
      setAlbumData({ ...albumData, [e.target.name]: file })
    }
  }

  // 送回後端
  async function handleSubmit(e) {
    e.preventDefault()
    try {
      let formData = new FormData()
      formData.append('image', albumData.image)
      let res = await axios.post(`${API_URL}/petSitter/album`, formData, {
        withCredentials: true,
      })
      window.location.reload()
    } catch (err) {}
  }
  return (
    <>
      <GlobalJsx>
        <form onSubmit={handleSubmit}>
          {/* 標題區塊 */}
          <section>
            <div className="row align-items-center">
              <div className="col">
                <h3>我的保母相簿</h3>
                <p>傳與寵物的圖片讓使用者更了解你</p>
              </div>
              <div className="col text-right">
                <div className="from-group">
                  <button
                    className="btn btn-primary btn-woof"
                    onClick={(e) => {
                      e.preventDefault()
                      fileInputRef.current.click()
                    }}
                  >
                    選擇圖片
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
                <br />
                <button className="btn btn-primary btn-woof">上傳</button>
              </div>
            </div>
          </section>
          <hr />
          <section>
            <div className="mt-3 d-flex flex-wrap justify-content-center">
              {controlDisplay.length > 0 ? (
                controlDisplay.map((v, index) => {
                  return (
                    <div
                      style={{
                        transition:
                          'background 500ms, padding 500ms, width 500ms, border 500ms',
                      }}
                      className={`card m-3 ${userGlobal.album_card}`}
                      key={v.id}
                      onMouseEnter={() => {
                        const changeDisplay = [...controlDisplay]
                        changeDisplay[index].display = 'd-block'
                        setControlDisplay(changeDisplay)
                      }}
                      onMouseLeave={() => {
                        const changeDisplay = [...controlDisplay]
                        changeDisplay[index].display = 'd-none'
                        setControlDisplay(changeDisplay)
                      }}
                    >
                      <img
                        src={`${PUBLIC_URL}${v.image}`}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className={`${v.display} ${userGlobal.test}`}>
                        <FontAwesomeIcon
                          icon={faTrash}
                          size="3x"
                          className={userGlobal.icon_cursor}
                          onClick={async () => {
                            try {
                              let res = await axios.post(
                                `${API_URL}/petSitter/deleteAlbumImage`,
                                v,
                                {
                                  withCredentials: true,
                                }
                              )
                              swal({
                                title: '相片刪除成功',
                                text: ' ',
                                icon: 'success',
                                buttons: false,
                                timer: 1500,
                              }).then(() => {
                                window.location.reload()
                              })
                            } catch (err) {
                              console.log(err)
                            }
                          }}
                        />
                      </div>
                    </div>
                  )
                })
              ) : (
                <section>
                  <div
                    className={`row align-items-center ${userGlobal.no_data}`}
                  >
                    <div className="col text-center">
                      <h3>您目前尚未上傳圖片</h3>
                    </div>
                  </div>
                </section>
              )}
            </div>
          </section>
        </form>
      </GlobalJsx>
    </>
  )
}

export default Album
