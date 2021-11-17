import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { BiCurrentLocation } from 'react-icons/bi'
import '../../styles/reserve.scss'
import { IconContext } from 'react-icons'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { Form } from 'react-bootstrap'
import dayjs from 'dayjs'

export default function Header(props) {
  const {
    from,
    handleDateFrom,
    timefrom,
    handleTimeFrom,
    District,
    handleDistrict,
    handleClear,
  } = props
  const todayDate = new Date()
  const today = dayjs(todayDate).format('YYYY-MM-DD')
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
          <div onClick={handleClear}>
            <IconContext.Provider value={{ size: 36 }}>
              <BiCurrentLocation />
            </IconContext.Provider>
          </div>

          <div className="col-2 ">
            <div className="input-group">
              <select
                className="custom-select"
                onChange={handleDistrict}
                value={District}
              >
                <option selected>服務地區</option>
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
          </div>
          <div className="col-3 ">
            <Form.Group controlId="dob">
              <Form.Control
                type="date"
                name="dob"
                placeholder="預約"
                value={from}
                onChange={handleDateFrom}
                autoComplete="off"
                min={today}
              />
            </Form.Group>
          </div>
          <div className="col-2 ">
            <div className="input-group">
              <select
                class="custom-select"
                type="time"
                value={timefrom}
                onChange={handleTimeFrom}
              >
                <option selected>時段</option>
                <option value={1}>08:00-12:00</option>
                <option value={2}>12:00-16:00</option>
                <option value={3}>12:00-20:00</option>
              </select>
            </div>
          </div>

          <div className="col-4 ">
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
