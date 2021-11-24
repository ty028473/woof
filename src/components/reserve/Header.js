import React from 'react'
import { useState, useEffect } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { BiCurrentLocation } from 'react-icons/bi'
import '../../styles/reserve.scss'
import { IconContext } from 'react-icons'

const HeaderFilter = ({
  districts,
  onNameFilter,
  onDistrictFilter,
  onStartFilter,
}) => {
  const [filters, setFilters] = useState({
    districts: '',
    name: '',
    start: '',
  })

  const handleInput = (field) => (e) => {
    const { value } = e.target
    setFilters({
      ...filters,
      [field]: value,
    })
    switch (field) {
      case 'name':
        onNameFilter(value)
        break
      case 'district':
        onDistrictFilter(value)
        break

      case 'start':
        onStartFilter(value, 'start')
        break

      default:
        break
    }
  }

  return (
    <div className="header-container">
      <Carousel
        className="header-carousel"
        autoPlay={true}
        infiniteLoop={true}
        interval={5000}
        showStatus={false}
      >
        <div>
          <img
            className="header-img"
            src="../images/resources/AdobeStock_257446250.jpeg 
            "
            alt="pic1"
          />
        </div>
        <div>
          <img
            className="header-img"
            src="../images/resources/AdobeStock_173443769 (1).jpeg"
            alt="pic2"
          />
        </div>
        <div>
          <img
            className="header-img"
            src="../images/resources/AdobeStock_317438568.jpeg"
            alt="pic3"
          />
        </div>
      </Carousel>
      <h1 className="header-title">預約代遛</h1>
      <div className="container filter-title ">
        <div className="row d-flex justify-content-between">
          <div>
            <IconContext.Provider value={{ size: 36 }}>
              <BiCurrentLocation />
            </IconContext.Provider>
          </div>

          <div className="col-2 ">
            <div className="input-group">
              <select
                className="custom-select"
                onChange={handleInput('district')}
              >
                <option selected>服務地區</option>
                {districts.map((district) => (
                  <option value={district} key={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="col-5 ">
            <div className="input-group">
              <input
                type="date"
                className="form-control"
                id="startDate"
                min="today"
                onChange={handleInput('start')}
              />
            </div>
          </div>

          <div className="col-4 ">
            <input
              id="name "
              type="text"
              placeholder="搜尋保母名字"
              className="form-control"
              value={filters.name}
              onChange={handleInput('name')}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default HeaderFilter
