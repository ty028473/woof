import React from 'react'

function Board(props) {
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-between my-2">
          <div className="col-12  ">
            <h3>照片牆</h3>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row d-flex justify-content-between  my-2 calendar-bg">
          <div className="col-12  board-pic ">
            <div className="container">
              <div className="row d-flex justify-content-center ">
                <img
                  src="../resources/AdobeStock_173443769 (1).jpeg"
                  alt="..."
                  class="img-thumbnail img-fluid "
                />

                <img
                  src="../resources/AdobeStock_173443769 (1).jpeg"
                  alt="..."
                  class="img-thumbnail img-fluid "
                />

                <img
                  src="../resources/AdobeStock_173443769 (1).jpeg"
                  alt="..."
                  class="img-thumbnail img-fluid "
                />
              </div>
            </div>
          </div>
          <div className="col-12  board-pic ">
            <div className="container">
              <div className="row d-flex justify-content-center ">
                <img
                  src="../resources/AdobeStock_173443769 (1).jpeg"
                  alt="..."
                  class="img-thumbnail img-fluid "
                />

                <img
                  src="../resources/AdobeStock_173443769 (1).jpeg"
                  alt="..."
                  class="img-thumbnail img-fluid "
                />

                <img
                  src="../resources/AdobeStock_173443769 (1).jpeg"
                  alt="..."
                  class="img-thumbnail img-fluid "
                />
              </div>
            </div>
          </div>
          <div className="col-12  board-pic ">
            <div className="container">
              <div className="row d-flex justify-content-center ">
                <img
                  src="../resources/AdobeStock_173443769 (1).jpeg"
                  alt="..."
                  class="img-thumbnail img-fluid "
                />

                <img
                  src="../resources/AdobeStock_173443769 (1).jpeg"
                  alt="..."
                  class="img-thumbnail img-fluid "
                />

                <img
                  src="../resources/AdobeStock_173443769 (1).jpeg"
                  alt="..."
                  class="img-thumbnail img-fluid "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Board
