import React from 'react'

export default function ResultInfo(props) {
  const { country, price } = props

  const countryInfo = () => {
    return country === '尋找地區' ? '尋找地區' : ` ${country}`
  }

  const priceInfo = () => {
    switch (parseInt(price, 10)) {
      case 1:
        return 'see all'
      case 2:
        return '0~500'
      case 3:
        return '500~1000'
      case 4:
        return '1000~2000'
      default:
        return '金額範圍'
    }
  }

  return (
    <div className="results-container">
      <h5 className="results-text">
        {/* <br />
        {countryInfo()}
        <br />
        {priceInfo()}
        <br />

        <br /> */}
      </h5>
    </div>
  )
}
