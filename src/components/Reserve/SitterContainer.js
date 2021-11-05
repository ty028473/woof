import React from 'react'
import SitterInfo from './SitterInfo'
import NoResults from './NoResults'

export default function sitterContainer(props) {
  const { filteredList } = props
  return (
    <div className="sitter-container center-element">
      {filteredList.length > 0
        ? filteredList.map((sitter) => {
            return (
              <div key={sitter.slug}>
                <SitterInfo
                  photo={sitter.photo}
                  name={sitter.name}
                  description={sitter.description}
                  country={sitter.country}
                  price={sitter.price}
                  star={sitter.star}
                />
              </div>
            )
          })
        : {
            /* <NoResults /> */
          }}
    </div>
  )
}
