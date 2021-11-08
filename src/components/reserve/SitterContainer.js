import React from 'react'
import {
  faStar,
  faMapMarker,
  faDollarSign,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NoResults from './NoResults'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

function sitterContainer(props) {
  return (
    <div className="container mb-2">
      <div className="row ">
        <div className="col-5">
          <img
            className="sitter-img"
            src="./images/sitter/AdobeStock_62255314 (1).jpeg"
            alt={'pic1'}
          />
        </div>
        <div className="col-7">
          <h6 className="sitter-title">沈佳宜</h6>
          <p className="sitter-description mb-0">500~1000/步行 4hr</p>
          <p className="sitter-description mb-2">
            之前有帶多隻毛孩外出的經驗及長時間.....
          </p>

          <div className="sitter-price-price">
            <div className="filters">
              <FontAwesomeIcon icon={faStar} />
              <div className="icon-filter">4.2</div>
            </div>
          </div>
          <button
            type="button"
            className="col-5 btn btn-primary mx-2 btn-sm btn-woof"
          >
            詳細資訊
          </button>
        </div>
      </div>
    </div>
  )
}
export default sitterContainer
