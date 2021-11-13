import React from 'react'
import image from '../../local-json/image.json'
function Board(props) {
  const [imageData, setImageState] = React.useState(image)
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-between my-2">
          <div className="col-12  ">
            <h3>照片牆</h3>
          </div>
        </div>
      </div>

      {imageData &&
        imageData.map(({ img, id }) => (
          <div className="container ">
            <div
              className="row d-flex justify-content-between  my-2 calendar-bg"
              key={id}
            >
              <div className="col-12  board-pic ">
                <img src={img} alt="..." class="img-thumbnail img-fluid " />
                <img src={img} alt="..." class="img-thumbnail img-fluid " />
                <img src={img} alt="..." class="img-thumbnail img-fluid " />
              </div>
            </div>
          </div>
        ))}
    </>
  )
}

export default Board
