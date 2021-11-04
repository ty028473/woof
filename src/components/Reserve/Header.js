import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

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
            src="../resources/AdobeStock_62255314 (1).jpeg"
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
      {/* <h1 className="header-title ">預約代遛</h1> */}
    </div>
  )
}
