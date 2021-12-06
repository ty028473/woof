import React, { Component } from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'

const containerStyle = {
  width: '1100px',
  height: '500px',
}

const center = {
  lat: 25.03746,
  lng: 121.564558,
}

class HomeMap extends Component {
  render() {
    return (
      <LoadScript googleMapsApiKey={process.env.REACT_APP_API_KEY}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
}
export default React.memo(HomeMap)
