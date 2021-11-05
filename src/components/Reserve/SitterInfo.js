import React from 'react'
import {
  faStar,
  faMapMarker,
  faDollarSign,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function sitterInfo(props) {
  const { name, photo, description, price, country, star } = props

  return (
    <div className="sitter-card">
      <img className="sitter-img" src={photo} alt={'pic1'} />
      <h2>{name}</h2>
      <p className="sitter-description">{description}</p>
      <div className="filters">
        <FontAwesomeIcon icon={faMapMarker} />
        <div className="icon-filter">{country}</div>
      </div>
      <div className="sitter-price-price">
        <div className="filters">
          <FontAwesomeIcon icon={faDollarSign} />
          <div className="icon-filter">{price}</div>
        </div>
        <div className="sitter-starcenter-element">
          <FontAwesomeIcon
            icon={faStar}
            className={star >= 1 ? 'color-white' : 'color-grey'}
          />
          &nbsp;
          <FontAwesomeIcon
            icon={faStar}
            className={star > 1 ? 'color-white' : 'color-grey'}
          />
          &nbsp;
          <FontAwesomeIcon
            icon={faStar}
            className={star > 2 ? 'color-white' : 'color-grey'}
          />
          &nbsp;
          <FontAwesomeIcon
            icon={faStar}
            className={star > 3 ? 'color-white' : 'color-grey'}
          />
        </div>
      </div>
      <div className="center-element">
        <button className="col-4 btn btn-primary btn-sm btn-woof">
          詳細資訊
        </button>
      </div>
    </div>
  )
}
