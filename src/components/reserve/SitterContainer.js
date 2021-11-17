import React from 'react'
import SitterInfo from './SitterInfo'
import NoResults from './NoResults'
export default function SitterContainer(props) {
  const { filteredList } = props
  return (
    <div>
      {filteredList.length > 0 ? (
        filteredList.map((sitter) => {
          return (
            <div key={sitter.id}>
              <SitterInfo
                photo={sitter.photo}
                name={sitter.name}
                description={sitter.description}
                district={sitter.district}
                price={sitter.price}
                star={sitter.star}
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
