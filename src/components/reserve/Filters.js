import React from 'react'
import dayjs from 'dayjs'

import { IconContext } from 'react-icons'
import { BiCurrentLocation } from 'react-icons/bi'
import '../../styles/reserve.scss'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

export default function Filters(props) {
  const todayDate = new Date()
  const today = dayjs(todayDate).format('YYYY-MM-DD')

  return (
    <div className="container">
      <div className="row d-flex justify-content-start">
        <div className="col-2 filter-select">
          <div class="input-group m-3">
            <select class="custom-select">
              <option selected>金額範圍</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div className="col-2 filter-select">
          <div className="input-group m-3">
            <select class="custom-select">
              <option selected>篩選範圍</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}
