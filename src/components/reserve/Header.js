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
          <div>
            <IconContext.Provider value={{ size: 36 }}>
              <BiCurrentLocation />
            </IconContext.Provider>
          </div>

          <div className="col-2 ">
            <div className="input-group">
              <select class="custom-select">
                <option selected>服務地區</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
          <div className="col-3 ">
            <Form.Group controlId="dob">
              <Form.Control
                type="date"
                name="dob"
                placeholder="Date of Birth"
              />
            </Form.Group>
          </div>
          <div className="col-2 ">
            <div className="input-group">
              <select class="custom-select">
                <option selected>時段</option>
                <option value="1">08:00-12:00</option>
                <option value="2">12:00-16:00</option>
                <option value="3">12:00-20:00</option>
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
