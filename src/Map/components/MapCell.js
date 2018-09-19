import React from 'react'
import { compose, withProps } from 'recompose'
import Styling from '../assets/kohStyles.json'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Polyline,
  InfoWindow,
  Marker
} from 'react-google-maps'

const API_KEY = 'AIzaSyABQ_VlKDqdqHUcOKKRIkMvNljwWDUIzMc'
const LIBRARY = 'geometry,drawing,places'
const collecCenter = locs => {
  let latReduce =
    locs.map(loc => loc.lat).reduce((lat, val) => lat + val) / locs.length
  let lngReduce =
    locs.map(loc => loc.lng).reduce((lat, val) => lat + val) / locs.length
  return { lat: latReduce, lng: lngReduce }
}
const checkZoom = (t, alt) => {
  return t != undefined || t != null ? parseInt(t) : alt
}

const checkNull = (t, alt) => {
  return t != undefined || t != null ? t : alt
}

const google = window.google
const MapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=${LIBRARY}`,
    loadingElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(
  ({
    markerable,
    noPath,
    location,
    zoom,
    mapType,
    disableUI,
    mapStyling,
    handler
  }) => {
    const renderPoly = (location, set) => {
      return set.map((key, index) => {
        return (
          <Polyline
            path={location['marker'][key]}
            geodesic={true}
            options={{
              strokeColor: location['markerColor'][key],
              strokeWeight: 1.5
            }}
          />
        )
      })
    }

    const renderMarker = location => {
      return location.map((key, index) => {
        let info = false
        return (
          <Marker
            key={index}
            position={{ lat: key.lat, lng: key.lng }}
            onMouseOver={() => {
              handler('show', key.name)
            }}
            onMouseOut={() => {
              handler('hide', key.name)
            }}
            // onClick={() => alert(`${key.name}`)}
            icon={{
              path: google.maps.SymbolPath.CIRCLE,
              strokeColor: key.bg,
              fillColor: key.bg,
              fillOpacity: 1,
              scale: 2.5
            }}
          />
        )
      })
    }

    const parseMarker = (location, set) => {
      return set.map(key => {
        return renderMarker(location[key])
      })
    }
    return (
      <GoogleMap
        defaultZoom={checkZoom(zoom, 9)}
        defaultCenter={location.center}
        mapTypeId={checkNull(mapType, 'roadmap')}
        // onClick={e => alert(`lat: ${e.latLng.lat()}, lng: ${e.latLng.lng()},`)}
        defaultOptions={{
          styles: mapStyling && Styling,
          disableDefaultUI: disableUI && true
        }}
      >
        {markerable &&
          parseMarker(location['marker'], Object.keys(location['marker']))}
        {markerable && renderPoly(location, Object.keys(location['marker']))}
      </GoogleMap>
    )
  }
)

export default MapComponent
// read more documetation at
// https://tomchentw.github.io/react-google-maps/
