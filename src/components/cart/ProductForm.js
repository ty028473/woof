import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../../contexts/ProductContext'
import axios from 'axios'

const ProductForm = () => {
  const { dispatch } = useContext(ProductContext)
  // 從這邊抓資料庫的值
  const [district, setDistrict] = useState('')
  const [address, setAddress] = useState('')
  const [petIdsFromServer, setPetIdsFromServer] = useState([])
  const [selectedPetId, setSelectedPetId] = useState([])

  useEffect(() => {
    axios
      .get('./api/pet.json')
      .then((res) => setPetIdsFromServer(res.data))
      .catch((err) => console.log(err))
  }, [])

  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const [title, setTitle] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(title, author);
    dispatch({
      type: 'ADD_PRODUCT',
      product: { district, address, petIdsFromServer, start, end, title },
    })
    setDistrict('')
    setAddress('')
    setPetIdsFromServer([])
    setStart('')
    setEnd('')
    setTitle('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="col-5 ">
        <div className="container">
          <div className="row">
            <div className="col-4 ">
              <input
                className="form-control"
                type="text"
                placeholder="地區"
                value={district}
                onChange={(e) => {
                  setDistrict(e.target.value)
                }}
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
            onChange={(e) => setPetIdsFromServer(e.target.value)}
          >
            {petIdsFromServer.length >0 &&
              petIdsFromServer.map((pet) => {
                return (
                  <option key={pet.id} value={pet.name}>
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
                <input
                  className="form-control"
                  type="text"
                  placeholder="開始時間"
                  value={start}
                  onChange={(e) => {
                    setStart(e.target.value)
                  }}
                  disabled="disabled"
                />
              </p>
              <p>
                結束時間：
                <input
                  className="form-control"
                  type="text"
                  placeholder="結束時間"
                  value={end}
                  onChange={(e) => {
                    setEnd(e.target.value)
                  }}
                  disabled="disabled"
                />
              </p>
            </div>
            <div className="col-6 ">
              <p>
                金額：
                <input
                  className="form-control"
                  type="text"
                  placeholder="價格"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value)
                  }}
                  // disabled="disabled"
                />
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
          onClick={() => {
            alert('預約成功！')
          }}
        >
          立即預約
        </button>
      </div>
    </form>
  )
}

export default ProductForm