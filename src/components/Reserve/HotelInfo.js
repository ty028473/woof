import React from 'react'
import {
  faBed,
  faMapMarker,
  faDollarSign,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function HotelInfo(props) {
  const { slug, name, photo, description, rooms, city, country, price } = props

  return (
    <div className="hotel-card">
      <img className="hotel-img" src={photo} alt={slug} />
      <h2>{name}</h2>
      <p className="hotel-description">{description}</p>
      <div className="filters">
        <FontAwesomeIcon icon={faMapMarker} />
        <div className="icon-filter">
          {city}, {country}
        </div>
      </div>
      <div className="hotel-rooms-price">
        <div className="filters">
          <FontAwesomeIcon icon={faBed} />
          <div className="icon-filter">{rooms} Habitaciones</div>
        </div>
        <div className="hotel-price center-element">
          <FontAwesomeIcon
            icon={faDollarSign}
            className={price >= 1 ? 'color-white' : 'color-grey'}
          />
          &nbsp;
          <FontAwesomeIcon
            icon={faDollarSign}
            className={price > 1 ? 'color-white' : 'color-grey'}
          />
          &nbsp;
          <FontAwesomeIcon
            icon={faDollarSign}
            className={price > 2 ? 'color-white' : 'color-grey'}
          />
          &nbsp;
          <FontAwesomeIcon
            icon={faDollarSign}
            className={price > 3 ? 'color-white' : 'color-grey'}
          />
        </div>
      </div>
      <div className="center-element">
        <button className="btn-book">RESERVAR</button>
      </div>
    </div>
  )
}
