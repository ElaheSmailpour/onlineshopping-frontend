import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import React from 'react'
const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function Googlemap() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    
    googleMapsApiKey: "AIzaSyDm06Mnb8z3QhOqQ7sK54V4mLgph4NnAwg"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
      
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default Googlemap

//Google Developers Console von diese seite können wir API key bekommen.