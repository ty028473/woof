import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { BiCurrentLocation } from 'react-icons/bi'
import '../../styles/reserve.scss'
import { IconContext } from 'react-icons'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

export default function Header() {
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
            src="../resources/AdobeStock_257446250.jpeg 
            "
            alt="pic1"
          />
        </div>
        <div>
          <img
            className="header-img"
            src="../resources/AdobeStock_173443769 (1).jpeg"
            alt="pic2"
          />
        </div>
        <div>
          <img
            className="header-img"
            src="../resources/AdobeStock_317438568.jpeg"
            alt="pic3"
          />
        </div>
      </Carousel>
      <h1 className="header-title">預約代遛</h1>
      <div className="container filter-title ">
        <div className="row d-flex justify-content-between">
          <div className="filter-select ">
            <label className="text-hidden">.</label>
            <div>
              <IconContext.Provider value={{ size: 36 }}>
                <BiCurrentLocation />
              </IconContext.Provider>
            </div>
          </div>
          <div className="col-2 filter-select">
            <label>交易地區:</label>
            <select
              className="form-select input-filters"
              aria-label="Default select example"
            >
              <option selected>地區範圍</option>
              <option value="中正區">中正區</option>
              <option value="大同區">大同區</option>
              <option value="中山區">中山區</option>
              <option value="松山區">松山區</option>
              <option value="大安區">大安區</option>
              <option value="萬華區">萬華區</option>
              <option value="信義區">信義區</option>
              <option value="士林區">士林區</option>
              <option value="北投區">北投區</option>
              <option value="內湖區">內湖區</option>
              <option value="南港區">南港區</option>
              <option value="文山區">文山區</option>
            </select>
          </div>

          <div className="col-2 filter-select">
            <div className="filter-select">
              <label>預約日期:</label>
              <input className="input-filters" type="date" autoComplete="off" />
            </div>
          </div>
          <div className="col-2 filter-select ">
            <label>預約時段:</label>
            <select
              className="form-select input-filters"
              aria-label="Default select example"
            >
              <option selected>時段範圍</option>
              <option value={1}>08:00~12:00</option>
              <option value={2}>12:00~16:00</option>
              <option value={3}>16:00~20:00</option>
            </select>
          </div>

          <div className="col-5 ">
            <label className="text-hidden">.</label>
            <InputGroup>
              <FormControl
                placeholder="想找什麼呢？"
                aria-label="想找什麼呢？"
                aria-describedby="想找什麼呢？"
              />
              <Button variant="outline-primary" id="button-addon2">
                搜尋
              </Button>
            </InputGroup>
          </div>
        </div>
      </div>
    </div>
  )
}
