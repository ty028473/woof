import React from 'react'
import HotelInfo from './HotelInfo'
import NoResults from './NoResults'

export default function HotelContainer(props) {
  const { filteredList } = props
  return (
    <div className="hotel-container center-element">
      {filteredList.length > 0 ? (
        filteredList.map((hotel) => {
          return (
            <div key={hotel.slug}>
              <HotelInfo
                photo={hotel.photo}
                name={hotel.name}
                description={hotel.description}
                city={hotel.city}
                country={hotel.country}
                rooms={hotel.rooms}
                price={hotel.price}
              />
            </div>
          )
        })
      ) : (
        <NoResults />
      )}
    </div>
  )
}
