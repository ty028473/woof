import React from 'react'
import image from '../../local-json/image.json'
function Board(props) {
  const [imageData, setImageState] = React.useState(image)
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-between ">
          <div className="col-12  ">
            <h3>照片牆</h3>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row d-flex  my-2 calendar-bg  justify-content-between">
          {imageData &&
            imageData.map(({ image, id }) => (
              <div
                className="col-4  board-pic d-flex justify-content-center"
                key={id}
              >
                <img
                  src={image}
                  alt="..."
                  class="img-thumbnail img-fluid m-2 "
                />
              </div>
            ))}{' '}
        </div>
      </div>
    </>
  )
}

export default Board
