import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import './styles.css'

export default function App() {
  const position = [51.505, -0.09]
  const style = {
    width: '100%',
    height: '300px',
  }

  return (
    <div className="App">
      <h1>Hello Map!</h1>
      <div style={style}>
        <Map center={position} zoom={13}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup.
              <br />
              Easily customizable.
            </Popup>
          </Marker>
        </Map>
      </div>
    </div>
  )
}
