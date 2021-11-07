import React from 'react'
import { Carousel } from 'react-bootstrap'

function Advantage(props) {
  return (
    <>
      <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../resources/AdobeStock_317438568.jpeg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>1</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../resources/AdobeStock_317438568.jpeg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>2</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../resources/AdobeStock_317438568.jpeg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                2
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </>
  )
}

Advantage.propTypes = {

}

export default Advantage

