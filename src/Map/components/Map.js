import React, { Component } from 'react'
import MapCell from './MapCell'

class Map extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      location,
      zoom,
      markerable,
      height,
      width,
      mapType,
      disableUI,
      mapStyling,
      noPath,
      handler
    } = this.props
    return (
      <MapCell
        location={location}
        zoom={zoom}
        markerable={markerable}
        mapType={mapType}
        disableUI={disableUI}
        mapStyling={mapStyling}
        noPath={noPath}
        handler={handler}
        containerElement={
          <div style={{ height: `${height}px`, width: `${width}px` }} />
        }
      />
    )
  }
}

export default Map
