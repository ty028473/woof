import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { API_URL } from '../../configs/Config'
import { PUBLIC_URL } from '../../configs/Config'

function Board(props) {
  const { personalData } = props
  let pet_sitter_id = personalData.pet_sitter_id

  const [petsitterAlbum, setPetsitterAlbum] = useState([])
  console.log(pet_sitter_id)
  useEffect(
    (e) => {
      async function album() {
        try {
          let res = await axios.get(
            `${API_URL}/reserve/album/${personalData.pet_sitter_id}`
          )
          setPetsitterAlbum(res.data)
          console.log(res.data)
        } catch (e) {
          console.log(e)

          // alert('找不到此保母的相簿')
        }
      }
      album()
    },
    [personalData.pet_sitter_id]
  )

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
        <div className="row d-flex  my-2 calendar-bg  justify-content-start">
          {petsitterAlbum.map((m) => (
            <div className="col-4  board-pic d-flex justify-content-center">
              <img
                src={PUBLIC_URL + m.image}
                alt="img"
                class="img-thumbnail img-fluid m-2 "
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Board
