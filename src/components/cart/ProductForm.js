import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../../contexts/ProductContext'
import axios from 'axios'
import { API_URL } from '../../configs/Config'

const ProductForm = ({ obj, personalData }) => {
  const { dispatch } = useContext(ProductContext)
  // const { obj, personalData } = props
  console.log(obj, personalData)
  let start = obj.start.toLocaleString()
  let end = obj.end.toLocaleString()
  let title = obj.title
  let pet_sitter_id = personalData.pet_sitter_id
  let district = personalData.district

  // 從這邊抓資料庫的值
  const [time, setTime] = useState({
    start: start,
    end: end,
    title: title,
    pet_sitter_id: pet_sitter_id, //當前頁面id
    district: district, //當前頁面保母id找到服務地區
  })
  useEffect(() => {
    setTime({
      start: obj.start,
      end: obj.end,
      title: obj.title,
      pet_sitter_id: personalData.pet_sitter_id,
      district: personalData.district,
    })
  }, [obj, personalData])
  console.log(time)
  const [address, setAddress] = useState('')
  const [petIdsFromServer, setPetIdsFromServer] = useState([]) // 從 server 來的資料

  // 抓取 member_id =1 的寵物
  useEffect((e) => {
    async function memberPets() {
      try {
        let res = await axios.get(`${API_URL}/orders/member/pets`, {
          withCredentials: true,
        })
        setPetIdsFromServer(res.data)
        // console.log(res.data)
      } catch (e) {
        alert('找不到此會員的寵物資料')
      }
    }
    memberPets()
  }, [])

  const [selectedPetId, setSelectedPetId] = useState('') // 存入localstroge
  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(title, author);
    console.log(pet_sitter_id)
    console.log(district)
    console.log(time)

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
    setSelectedPetId('') // 這個好像不需要去做更新
  }
  return (
    <div className="container">
      <form className="row" onSubmit={handleSubmit}>
        <div className="col-2 ">
          <input
            className="form-control"
            type="text"
            placeholder="保母服務地區"
            value={district}
            disabled
          />
        </div>
        <div className="col-2 ">
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
        <div className="col-4 ">
          <div className="row">
            <div className="col-6">
              <p>開始時間：{obj.start.toLocaleString()}</p>
              <p>結束時間：{obj.end.toLocaleString()}</p>
            </div>
            <div className="col-6">
              <p>
                金額：<span className="price-color">${obj.title}</span>
              </p>
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
    </div>
  )
}

export default ProductForm
