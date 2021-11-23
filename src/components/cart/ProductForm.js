import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../../contexts/ProductContext'
import axios from 'axios'

const ProductForm = (props) => {
  const { dispatch } = useContext(ProductContext)
  const { obj, pet_sitter_id, district } = props
  let start = obj.start.toLocaleString()
  let end = obj.end.toLocaleString()
  let title = obj.title

  // 從這邊抓資料庫的值
  const [time, setTime] = useState({
    start: start,
    end: end,
    title: title,
    pet_sitter_id: '', //當前頁面id
    district: '', //當前頁面保母id找到服務地區
  })
  useEffect(() => {
    setTime(obj, pet_sitter_id, district)
  }, [obj, pet_sitter_id, district])

  const [address, setAddress] = useState('')
  const [petIdsFromServer, setPetIdsFromServer] = useState([]) // 從 server 來的資料

  // 寵物 id 從 server 來的資料
  useEffect(() => {
    axios
      .get('./api/pet.json')
      .then((res) => setPetIdsFromServer(res.data))
      .catch((err) => console.log(err))
  }, [])

  const [selectedPetId, setSelectedPetId] = useState('') // 存入localstroge
  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(title, author);
    dispatch({
      type: 'ADD_PRODUCT',
      product: {
        time,
        address,
        petIdsFromServer,
        selectedPetId,
      },
    })
    setTime('')
    setAddress('')
    setPetIdsFromServer('')
    alert('預約成功！')
    // setSelectedPetId('') // 這個好像不需要去做更新
  }
  return (
    <form className="row" onSubmit={handleSubmit}>
      <div className="col-5 ">
        <div className="container">
          <div className="row">
            <div className="col-4 ">
              <input
                className="form-control"
                type="text"
                placeholder="地區"
                value={time.district}
                // onChange={(e) => {
                //   setTime(e.target.value)
                // }}
                disabled="disabled"
              />
            </div>
            <div className="col-8 ">
              <input
                className="form-control"
                type="text"
                placeholder="交易地點"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value)
                }}
                required
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-2 ">
        <div class="input-group mb-3">
          <select
            className="form-control"
            value={selectedPetId}
            onChange={(e) => setSelectedPetId(e.target.value)}
          >
            {petIdsFromServer.length > 0 &&
              petIdsFromServer.map((pet) => {
                return (
                  <option
                    key={pet.id}
                    value={pet.name}
                    onChange={(e) => setPetIdsFromServer(e.target.value)}
                  >
                    {pet.name}
                  </option>
                )
              })}
          </select>
        </div>
      </div>

      <div className="col-3 ">
        <div className="container">
          <div className="row">
            <div className="col-6 ">
              <p>
                開始時間：
                {obj.start.toLocaleString()}
              </p>

              <p>
                結束時間：
                {obj.end.toLocaleString()}
              </p>
            </div>
            <div className="col-6 ">
              <p>
                金額：
                {obj.title}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-2 ">
        <button
          className="btn btn-primary btn-woof"
          type="submit"
          value="add product"
        >
          立即預約
        </button>
      </div>
    </form>
  )
}

export default ProductForm
