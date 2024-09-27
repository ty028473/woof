import React from 'react'
import { Carousel } from 'react-bootstrap'

function Advantage(props) {
  return (
    <>
      <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../images/home/chat-online.png"
              alt="First slide"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../images/home/chat-online.png"
              alt="Second slide"
            />

            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../images/home/chat-online.png"
              alt="Third slide"
            />

            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </>
  )
}

Advantage.propTypes = {

}

export default Advantage

