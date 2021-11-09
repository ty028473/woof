import React from 'react'
// react plugin used to create google maps
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps'
// reactstrap components
// import {
//
// } from "reactstrap";

// Core Components

let defaultOptions = {
  scrollwheel: false,
  styles: [
    {
      featureType: 'administrative',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#444444',
        },
      ],
    },
    {
      featureType: 'landscape',
      elementType: 'all',
      stylers: [
        {
          color: '#f2f2f2',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'all',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'all',
      stylers: [
        {
          saturation: -100,
        },
        {
          lightness: 45,
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'all',
      stylers: [
        {
          visibility: 'simplified',
        },
      ],
    },
    {
      featureType: 'road.arterial',
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'transit',
      elementType: 'all',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'all',
      stylers: [
        {
          color: '#C5CBF5',
        },
        {
          visibility: 'on',
        },
      ],
    },
  ],
}

let defaultCenter = { lat: 40.748817, lng: -73.985428 }

let position = { lat: 40.748817, lng: -73.985428 }

const MapComponent = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={defaultCenter}
      defaultOptions={defaultOptions}
    >
      <Marker position={position} />
    </GoogleMap>
  ))
)

let loadingElementStyle = { height: `100%` }

let containerElementStyle = {
  width: '100%',
  height: '600px',
  display: 'block',
  marginTop: '-80px',
}

function Example() {
  return (
    <>
      <MapComponent
        googleMapURL="https://maps.googleapis.com/maps/api/js?key="
        loadingElement={<div style={loadingElementStyle} />}
        containerElement={
          <div
            style={containerElementStyle}
            className="map"
            id="map-contactus-1"
          />
        }
        mapElement={<div />}
      />
    </>
  )
}

export default Example
