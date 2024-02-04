import React from 'react'
import {MapContainer, TileLayer, Marker} from "react-leaflet"
import "leaflet/dist/leaflet.css"

const MapComponent = async() => {

  const response = await fetch('http://localhost:3030/Brands');
  const brands = await response.json();
  const brandsJSON = []

  brands.forEach((brand) => {
    brandsJSON.push(brand.address)
  })

  console.log(brands);
  console.log(brandsJSON);


  return (
      <MapContainer center={[40.7128, -74.0060]} zoom={13}>
          <TileLayer
              url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
      </MapContainer>

      
  )
}

export default MapComponent