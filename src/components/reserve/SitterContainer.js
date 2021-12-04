import React from 'react'
import SitterInfo from './SitterInfo'
import NoResults from './NoResults'
export default function SitterContainer(props) {
  const { filteredList } = props
  return (
    <div>
      {filteredList.length > 0 ? (
        filteredList.map((sitterData) => {
          return (
            <div key={sitterData.id}>
              <SitterInfo
                photo={sitterData.photo}
                name={sitterData.name}
                description={sitterData.description}
                district={sitterData.district}
                price={sitterData.price}
                star={sitterData.star}
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
